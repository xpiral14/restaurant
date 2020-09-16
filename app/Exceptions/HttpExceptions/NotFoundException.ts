import HttpException from "./HttpException";

export default class NotFoundException extends HttpException {
  constructor(message: string) {
    super(404, "NOT_FOUND_EXCEPTION", message);
  }
}
