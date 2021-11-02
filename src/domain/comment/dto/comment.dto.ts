import { IsString, IsInt } from "class-validator";

export class CommentDto {
	@IsInt()
	boardId!: number;

	@IsString()
	contents!: string;

	@IsInt()
	depth!: number;
}
