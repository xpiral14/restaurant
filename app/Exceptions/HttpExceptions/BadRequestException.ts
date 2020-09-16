import HttpException from "./HttpException";

export default class BadRequestException extends HttpException {
  constructor(message: string) {
    super(400, "BAD_REQUEST_EXCEPTION", message);
  }
}
