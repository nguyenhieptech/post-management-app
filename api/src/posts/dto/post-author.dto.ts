import { IsNumber } from "class-validator";

export class PostAuthorDto {
  @IsNumber()
  id: number;
}
