export class SuccessCode {
	private statusCode: number;
	private message: string;

	constructor(statusCode: number, message: string) {
		this.statusCode = statusCode;
		this.message = message;
	}

	getMessage(): string {
		return this.message;
	}

	getStatusCode(): number {
		return this.statusCode;
	}

	public static createUser() {
		return new SuccessCode(201, "회원가입에 성공했습니다.");
	}

	public static login() {
		return new SuccessCode(200, "로그인에 성공했습니다.");
	}
}
