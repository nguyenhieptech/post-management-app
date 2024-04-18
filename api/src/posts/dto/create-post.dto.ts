import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreatePostDto {
  @IsString()
  @Length(2, 400)
  title: string;

  @IsString()
  @Length(10, 3000)
  description: string;

  @IsString()
  @Length(100, 10000)
  content: string;

  @IsNumber()
  author_id: number;

  @IsNotEmpty()
  tag: string;
}
