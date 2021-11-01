import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./domain/entities/users.entity";
import { UserModule } from "./domain/user/user.module";
import { AuthModule } from "./domain/auth/auth.module";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "mongodb",
			url: "mongodb+srv://team13:0000@cluster0.8ii4h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			port: 27017,
			database: "team13",
			useNewUrlParser: true,
			useUnifiedTopology: true,
			entities: [Users]
		}),
		UserModule,
		AuthModule
	]
})
export class AppModule {}
