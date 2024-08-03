import { ResponseCodeEnum } from "models/enums";

/**
 * Mapping of response codes to detailed error messages for API responses.
 */
export const responseErrorMessage = {
  [ResponseCodeEnum.OK]: "OK",
  [ResponseCodeEnum.INTERNAL_SERVER_ERROR]: "An unexpected error occurred on the server.",
  [ResponseCodeEnum.RESOURCE_NOT_FOUND]: "Requested resource not found.",
  [ResponseCodeEnum.EMAIL_NOT_VALID]: "Invalid email format.",
  [ResponseCodeEnum.PHONE_NUMBER_NOT_VALID]: "Invalid phone number format.",
  [ResponseCodeEnum.BAD_ADD_USER_REQUEST]: "Invalid data provided for user creation.",
  [ResponseCodeEnum.USER_EMAIL_REQUIRED]: "User email is mandatory.",
  [ResponseCodeEnum.USER_NAME_REQUIRED]: "Username is required.",
  [ResponseCodeEnum.USER_ROLE_REQUIRED]: "User role is required.",
  [ResponseCodeEnum.USER_NAME_MIN_5]: "Username must be at least 5 characters long.",
  [ResponseCodeEnum.USER_NAME_MAX_15]: "Username cannot exceed 15 characters.",
  [ResponseCodeEnum.INVALID_BODY]: "Request body is invalid or missing.",
  [ResponseCodeEnum.ID_IS_REQUIRED]: "Unique identifier (ID) is required.",
  [ResponseCodeEnum.USER_ALREADY_EXIST]: "User already exist.",

  //Prisma messages
  [ResponseCodeEnum.InvalidDatabaseString]: "Invalid database configuration provided.",
  [ResponseCodeEnum.UnderlyingModelDoesNotExist]: "The requested database model does not exist.",
  [ResponseCodeEnum.UnsupportedDatabaseFeatures]: "The database version does not support required features.",
  [ResponseCodeEnum.IncorrectParameterCount]: "Incorrect number of parameters provided for the query.",
  [ResponseCodeEnum.ConnectionClosed]: "Database connection has been closed unexpectedly.",
  [ResponseCodeEnum.ValueTooLong]: "Provided value exceeds the maximum allowed length.",
  [ResponseCodeEnum.RecordNotFound]: "The requested record could not be found.",
  [ResponseCodeEnum.UniqueConstraintFailed]: "A unique constraint violation occurred.",
  [ResponseCodeEnum.ForeignKeyConstraintFailed]: "A foreign key constraint violation occurred.",
  [ResponseCodeEnum.ConstraintFailed]: "A database constraint violation occurred.",
  [ResponseCodeEnum.InvalidStoredValue]: "Invalid value stored in the database for a field.",
  [ResponseCodeEnum.InvalidFieldValue]: "Invalid value provided for a field.",
  [ResponseCodeEnum.DataValidationError]: "Data validation error occurred.",
  [ResponseCodeEnum.QueryParseFailure]: "Failed to parse the provided query.",
  [ResponseCodeEnum.QueryValidationFailure]: "Query validation failed.",
  [ResponseCodeEnum.RawQueryFailed]: "Execution of raw query failed.",
  [ResponseCodeEnum.NullConstraintViolation]: "A null constraint violation occurred.",
  [ResponseCodeEnum.MissingRequiredValue]: "A required value is missing.",
  [ResponseCodeEnum.MissingRequiredArgument]: "A required argument is missing.",
  [ResponseCodeEnum.RelationViolation]: "A relation constraint violation occurred.",
  [ResponseCodeEnum.RelatedRecordNotFound]: "A related record could not be found.",
  [ResponseCodeEnum.QueryInterpretationError]: "Error occurred while interpreting the query.",
  [ResponseCodeEnum.RecordsNotConnected]: "Required records are not connected.",
  [ResponseCodeEnum.RequiredConnectedRecordsNotFound]: "Required connected records were not found.",
  [ResponseCodeEnum.InputError]: "Invalid input provided.",
  [ResponseCodeEnum.ValueOutOfRange]: "Provided value is out of the acceptable range.",
  [ResponseCodeEnum.TableDoesNotExist]: "The specified table does not exist in the database.",
  [ResponseCodeEnum.ColumnDoesNotExist]: "The specified column does not exist in the database.",
  [ResponseCodeEnum.InconsistentColumnData]: "Inconsistent data found in database column.",
  [ResponseCodeEnum.ConnectionPoolTimeout]: "Database connection pool timeout occurred.",
  [ResponseCodeEnum.RecordRequiredButNotFound]: "A required record was not found.",
  [ResponseCodeEnum.UnsupportedFeature]: "The requested feature is not supported by the current database provider.",
  [ResponseCodeEnum.MultipleErrors]: "Multiple errors occurred during query execution.",
  [ResponseCodeEnum.TransactionApiError]: "An error occurred in the transaction API.",
  [ResponseCodeEnum.QueryParameterLimitExceeded]: "Query parameter limit has been exceeded.",
  [ResponseCodeEnum.FullTextIndexNotFound]: "Required full-text index not found.",
  [ResponseCodeEnum.MongoDbReplicaSetRequired]: "MongoDB replica set is required but not configured.",
  [ResponseCodeEnum.NumberOutOfRange]: "Numeric value is out of the supported range.",
  [ResponseCodeEnum.TransactionWriteConflict]: "A write conflict occurred during transaction.",
  [ResponseCodeEnum.AssertionViolation]: "An assertion violation occurred in the database.",
  [ResponseCodeEnum.ExternalConnectorError]: "An error occurred in an external connector.",
  [ResponseCodeEnum.TooManyDatabaseConnections]: "Maximum number of database connections exceeded.",
};
