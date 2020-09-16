/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from "@ioc:Adonis/Core/Logger";
import HttpExceptionHandler from "@ioc:Adonis/Core/HttpExceptionHandler";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import HttpException from "./HttpExceptions/HttpException";
export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger);
  }

  async handle(error: any, ctx: HttpContextContract) {
    // lida com erros http
    if (error instanceof HttpException) {
      return ctx.response
        .status(error.status)
        .send([{ name: error.name, message: error.message }]);
    }


    return ctx.response
        .status(500)
        .send([{ name: error.name, message: error.message }]);
  }
}
