import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import { Boards } from "../entities/boards.entity";
import { CategoryCode } from "../entities/categoryCode.entity";
import { Users } from "../entities/users.entity";
import { BoardController } from "./board.controller";
import { BoardService } from "./board.service";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [".env"],
			isGlobal: true
		}),
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: "1D" }
		}),
		TypeOrmModule.forFeature([Users, Boards, CategoryCode]),
		AuthModule
	],
	controllers: [BoardController],
	providers: [BoardService]
})
export class BoardModule {}
