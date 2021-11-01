import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: "ikDshiCLtsLQ66fiZMyr9qjS1NVNbWpz"
		});
	}

	async validate(payload: any) {
		return { userId: payload.userId, username: payload.username };
	}
}
