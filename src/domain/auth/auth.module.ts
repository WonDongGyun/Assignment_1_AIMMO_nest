import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../entities/users.entity";
import { JwtStrategy } from "./auth.jwtStrategy";
import { LocalStrategy } from "./auth.localStrategy";
import { AuthService } from "./auth.service";

@Module({
	imports: [
		PassportModule,
		TypeOrmModule.forFeature([Users]),
		JwtModule.register({
			secret: "ikDshiCLtsLQ66fiZMyr9qjS1NVNbWpz",
			signOptions: { expiresIn: "1D" }
		})
	],
	providers: [AuthService, LocalStrategy, JwtStrategy],
	exports: [AuthService]
})
export class AuthModule {}
