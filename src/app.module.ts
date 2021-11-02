import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./domain/entities/users.entity";
import { UserModule } from "./domain/user/user.module";
import { AuthModule } from "./domain/auth/auth.module";
import { ConfigModule } from "@nestjs/config";

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
			entities: [Users]
		}),
		UserModule,
		AuthModule
	]
})
export class AppModule {}
