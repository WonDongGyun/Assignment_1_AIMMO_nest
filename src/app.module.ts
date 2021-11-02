import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./domain/entities/users.entity";
import { UserModule } from "./domain/user/user.module";
import { AuthModule } from "./domain/auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { Boards } from "./domain/entities/boards.entity";
import { CategoryCode } from "./domain/entities/categoryCode.entity";
import { Comments } from "./domain/entities/comments.entity";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [".env"],
			isGlobal: true
		}),
		TypeOrmModule.forRoot({
			type: "mongodb",
			url: process.env.MONGO_URL,
			port: 27017,
			database: process.env.MONGO_DATABASE,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			entities: [Users, Boards, CategoryCode, Comments]
		}),
		UserModule,
		AuthModule
	]
})
export class AppModule {}
