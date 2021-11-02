import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
	@IsString()
	@Length(4, 12)
	@IsNotEmpty()
	userId!: string;

	@IsString()
	@Length(4, 20)
	@IsNotEmpty()
	password!: string;

	@IsString()
	@Length(2, 12)
	@IsNotEmpty()
	userName!: string;
}
