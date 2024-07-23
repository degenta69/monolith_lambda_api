import { ICryptographic } from "./iCryptographic"
import { IDatabaseClient } from "./iDatabaseClient"
import { ILogger } from "./iLogger"

export interface IDependencyContainer {
  logger: ILogger,
  KMS: ICryptographic,
  db_client: IDatabaseClient
}