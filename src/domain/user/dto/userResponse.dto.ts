import { SuccessResponse } from "src/domain/global/common/SuccessResponse";
import { SuccessCode } from "src/domain/global/common/SuccessCode";

export class UserResponse extends SuccessResponse {
	private token: string;

	constructor(successCode: SuccessCode, data: string) {
		super(successCode);
		this.success = true;
		this.statusCode = successCode.getStatusCode();
		this.message = successCode.getMessage();
		this.token = data;
	}

	public static return(successCode: SuccessCode, data: string) {
		return new UserResponse(successCode, data);
	}
}
