import { IsString, IsInt } from "class-validator";

export class RecommentDto {
	@IsInt()
	boardId!: number;

	@IsInt()
	parentId!: number;

	@IsString()
	contents!: string;

	@IsInt()
	depth!: number;
}
