import { IsInt, IsString } from "class-validator";

export class UpdatePostDto {
	@IsString()
	readonly title!: string;

	@IsString()
	readonly contents!: string;

	@IsInt()
	readonly categoryCode!: number;
}
