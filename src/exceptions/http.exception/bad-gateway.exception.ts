import { HttpStatusCode, ResponseCodeEnum } from 'models/enums';
import { HttpException } from './index';
import { IError } from 'models/HandlerSpecificTypes';
import { createStandardError } from 'utility';

/**
 * Defines an HTTP exception for *Bad Gateway* type errors.
 *
 * @see [Built-in HTTP exceptions](https://docs.nestjs.com/exception-filters#built-in-http-exceptions)
 *
 * @publicApi
 */
export class BadGatewayException extends HttpException {
  /**
   * Instantiate a `BadGatewayException` Exception.
   *
   * @example
   * `throw new BadGatewayException()`
   *
   * @usageNotes
   * The HTTP response status code will be 502.
   * - The `objectOrError` argument defines the JSON response body or the message string.
   * - The `descriptionOrOptions` argument contains either a short description of the HTTP error or an options object used to provide an underlying error cause.
   *
   * By default, the JSON response body contains two properties:
   * - `statusCode`: this will be the value 502.
   * - `message`: the string `'Bad Gateway'` by default; override this by supplying
   * a string in the `objectOrError` parameter.
   *
   * If the parameter `objectOrError` is a string, the response body will contain an
   * additional property, `error`, with a short description of the HTTP error. To override the
   * entire JSON response body, pass an object instead. Nest will serialize the object
   * and return it as the JSON response body.
   *
   * @param objectOrError string or object describing the error condition.
   * @param descriptionOrOptions either a short description of the HTTP error or an options object used to provide an underlying error cause
   */
  constructor(
    responseCode: ResponseCodeEnum, 
    extra?: string[]
  ) {

    let ErrorObject = createStandardError(responseCode,extra)

    super(
      ErrorObject,
      HttpStatusCode.BAD_GATEWAY_502,
    );
  }
}
