import { JwtGuard } from "@/auth/jwt.guard";
import { CreatePostDto, PostAuthorDto, UpdatePostDto } from "@/posts/dto";
import { PostsService } from "@/posts/posts.service";
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.postsService.findAll();
  }

  @Post("by-author")
  @HttpCode(HttpStatus.OK)
  findAllByAuthor(@Body() postAuthorDto: PostAuthorDto) {
    return this.postsService.findAllByAuthor(postAuthorDto.id);
  }

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  findOne(@Param("id") id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(":id")
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.CREATED)
  update(@Param("id") id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(":id")
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  remove(@Param("id") id: string) {
    return this.postsService.remove(+id);
  }
}
