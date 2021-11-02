import { SuccessCode } from "src/global/common/SuccessCode";
import { SuccessResponse } from "src/global/common/SuccessResponse";

export class commentResponse extends SuccessResponse {
	private data: any;

	constructor(successCode: SuccessCode, data: any) {
		super(successCode);
		this.success = true;
		this.statusCode = successCode.getStatusCode();
		this.message = successCode.getMessage();
		this.data = data;
	}

	public static return(successCode: SuccessCode, data: any) {
		return new commentResponse(successCode, data);
	}
}
