import { HttpStatusCode, ResponseCodeEnum } from 'models/enums';
import { HttpException } from './index';
import { IError } from 'models/HandlerSpecificTypes';
import { createStandardError } from 'utility';
/**
 * Defines an HTTP exception for *Unsupported Media Type* type errors.
 *
 * @publicApi
 */
export class UnsupportedMediaTypeException extends HttpException {
  /**
   * Instantiate an `UnsupportedMediaTypeException` Exception.
   *
   * @example
   * `throw new UnsupportedMediaTypeException(ResponseCodeEnum.SOME_ERROR_CODE)`
   *
   * @usageNotes
   * The HTTP response status code will be 415.
   * 
   * The response will contain a standard error object created based on the provided response code.
   *
   * @param {ResponseCodeEnum} responseCode - Enum value representing the error code.
   * @param {string[]} [extra] - Optional additional error details.
   */
  constructor(
    responseCode: ResponseCodeEnum,
    extra?: string[]
  ) {

    let ErrorObject = createStandardError(responseCode, extra)

    super(
      ErrorObject,
      HttpStatusCode.UNSUPPORTED_MEDIA_TYPE_415,
    );
  }
}
