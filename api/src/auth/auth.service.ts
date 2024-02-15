import { AuthDto } from '@/auth/dto';
import { PrismaService } from '@/prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async register(authDto: AuthDto) {
    const hashedPassword = await argon.hash(authDto.password);
    try {
      const user = await this.prismaService.user.create({
        data: {
          email: authDto.email,
          hashed_password: hashedPassword,
        },
        select: {
          id: true,
          email: true,
          created_at: true,
        },
      });
      const accessToken = await this.signJwtToken(user.id, user.email);

      return {
        access_token: accessToken,
        user_info: {
          id: user.id,
          email: user.email,
        },
      };
    } catch (error) {
      if (error.code == 'P2002') {
        // throw new ForbiddenException(error.message)
        throw new ForbiddenException('User with this email already exists');
      }
    }
  }

  async login(authDto: AuthDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: authDto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('User not found');
    }
    const passwordMatched = await argon.verify(user.hashed_password, authDto.password);
    if (!passwordMatched) {
      throw new ForbiddenException('Incorrect password');
    }
    delete user.hashed_password;

    const accessToken = await this.signJwtToken(user.id, user.email);

    return {
      ...accessToken,
      user_info: {
        id: user.id,
        email: user.email,
      },
    };
  }

  async signJwtToken(userId: number, email: string): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const jwtString = await this.jwtService.signAsync(payload, {
      expiresIn: '60m',
      secret: this.configService.get('JWT_SECRET'),
    });
    return {
      access_token: jwtString,
    };
  }
}
