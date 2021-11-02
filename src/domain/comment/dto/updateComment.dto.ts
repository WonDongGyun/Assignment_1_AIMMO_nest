import { IsString } from "class-validator";

export class updateComment {
	@IsString()
	contents!: string;
}
