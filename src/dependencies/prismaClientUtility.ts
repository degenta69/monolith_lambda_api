import * as Prisma from '@prisma/client';
import { IDependencyContainer } from 'models/interface';


/**
 * instantiates prisma client with the given database url
 */
let prisma = new Prisma.PrismaClient({
  datasourceUrl: process.env.MONGO_DB_URI
})

/**
 * applies database dependency to the given dependency container
 *
 * @param {Omit<IDependencyContainer, 'db_client'>} DC
 * @returns {IDependencyContainer}
 */
export const apply_prisma = (
  DC: Omit<IDependencyContainer, "db_client">
): IDependencyContainer => {
  console.log("prisma client instantiated");
  return { ...DC, db_client: prisma };
};