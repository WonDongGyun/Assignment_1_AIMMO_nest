import { CommonResponse } from "./CommonResponse";
import { SuccessCode } from "./SuccessCode";

export class SuccessResponse extends CommonResponse {
	constructor(successCode: SuccessCode) {
		super();
		this.success = true;
		this.statusCode = successCode.getStatusCode();
		this.message = successCode.getMessage();
	}

	public static response(successCode: SuccessCode) {
		return new SuccessResponse(successCode);
	}
}
