import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../entities/users.entity";
import { JwtStrategy } from "./auth.jwtStrategy";
import { LocalStrategy } from "./auth.localStrategy";
import { AuthService } from "./auth.service";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [".env"],
			isGlobal: true
		}),
		PassportModule,
		TypeOrmModule.forFeature([Users]),
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: "1D" }
		})
	],
	providers: [AuthService, LocalStrategy, JwtStrategy],
	exports: [AuthService]
})
export class AuthModule {}
