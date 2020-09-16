export default class HttpException extends Error {
  public name: string;
  public status: number;

  constructor(status: number, name: string, message?: string) {
    super(message);
    this.status = status;
    this.name = name;
  }
}
