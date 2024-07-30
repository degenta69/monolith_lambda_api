import { APIGatewayProxyResult, Context } from "aws-lambda";
import { ResponseCodeEnum } from "models/enums";
import { IDependencyContainer } from "models/interface";
import { APIHttpProxyEvent } from "models/types";
import { createStandardError } from "utility";

/**
 * Handles encryption requests using the ICryptography service in IDependencyContainer.
 *
 * Validates the request body and returns appropriate error responses.
 * Optionally logs the encryption result.
 *
 * @param {IDependencyContainer} DC - Dependency container with ICryptography and ILogger access.
 * @param {APIHttpProxyEvent} event - HTTP proxy event containing the encrypted data and an optional key.
 * @param {Context} context - AWS Lambda context.
 * @returns {Promise<APIGatewayProxyResult>} - Response object with encrypted data or an error message.
 */
export const encryptHandler = async (
  DC: IDependencyContainer,
  event: APIHttpProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  let body: { key?: string; data: string } =
    event.body && JSON.parse(event.body);
  if (!body) {
    return {
      statusCode: 400,
      body: JSON.stringify(createStandardError(ResponseCodeEnum.INVALID_BODY)),
    };
  }
  try {
    let result = await DC.Cryptography.encrypt(body.data, body?.key);
    DC.logger.log(result, "encrypt request handler");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `encrypted successfully`, user: result }),
    };
  } catch (error) {
    DC.logger.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify(createStandardError(ResponseCodeEnum.INTERNAL_SERVER_ERROR)),
    };
  }
};
