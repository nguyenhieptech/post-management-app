import { CreatePostDto, UpdatePostDto } from "@/posts/dto";
import { PrismaService } from "@/prisma/prisma.service";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    // Post title must be unique
    const existingPost = await this.prisma.post.findUnique({
      where: {
        title: createPostDto.title,
      },
    });

    if (existingPost) {
      throw new BadRequestException(
        "A post with this title already existed. Please choose a new one."
      );
    }

    const newPost = await this.prisma.post.create({
      data: {
        title: createPostDto.title,
        description: createPostDto.description,
        content: createPostDto.content,
        author_id: createPostDto.author_id,
        tag: createPostDto.tag,
      },
    });

    return newPost;
  }

  async findAll() {
    const posts = await this.prisma.post.findMany();
    return posts;
  }

  async findAllByAuthor(id: number) {
    const posts = await this.prisma.post.findMany({
      where: {
        author_id: id,
      },
    });

    return posts;
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    if (!post) throw new NotFoundException();

    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const updatedPost = await this.prisma.post.update({
      where: {
        id: id,
      },
      data: updatePostDto,
    });

    if (!updatedPost) throw new NotFoundException();

    return updatedPost;
  }

  async remove(id: number) {
    const deletedPost = await this.prisma.post.delete({
      where: {
        id: id,
      },
    });

    if (!deletedPost) throw new NotFoundException();

    return deletedPost;
  }
}
