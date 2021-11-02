export class ErrorCode {
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

	public static userDuplicate() {
		return new ErrorCode(406, "중복된 ID입니다.");
	}
}
