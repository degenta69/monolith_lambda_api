import { HttpStatusCode, ResponseCodeEnum } from 'models/enums';
import { HttpException } from './index';
import { IError } from 'models/HandlerSpecificTypes';
import { createStandardError } from 'utility';
/**
 * Defines an HTTP exception for *Not Acceptable* type errors.
 *
 * @publicApi
 */
export class NotAcceptableException extends HttpException {
  /**
   * Instantiate a `NotAcceptableException` Exception.
   *
   * @example
   * `throw new NotAcceptableException(ResponseCodeEnum.SOME_ERROR_CODE)`
   *
   * @usageNotes
   * The HTTP response status code will be 406.
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

    let ErrorObject = createStandardError(responseCode,extra)

    super(
      ErrorObject,
      HttpStatusCode.NOT_ACCEPTABLE_406,
    );
  }
}
