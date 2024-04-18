import { PostsController } from "@/posts/posts.controller";
import { PostsService } from "@/posts/posts.service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
