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

	public static userUnauthorized() {
		return new ErrorCode(406, "인증되지 않은 사용자입니다.");
	}

	public static boardVerify() {
		return new ErrorCode(406, "해당 게시글에 권한이 없습니다.");
	}

	public static notFoundBoard() {
		return new ErrorCode(404, "게시글을 찾을 수 없습니다.");
	}

	public static notFoundCategory() {
		return new ErrorCode(404, "카테고리 번호를 찾을 수 없습니다.");
	}

	public static notFoundUser() {
		return new ErrorCode(404, "사용자를 찾을 수 없습니다.");
	}

	public static badRequest() {
		return new ErrorCode(404, "잘못된 API 경로입니다.");
	}
}
