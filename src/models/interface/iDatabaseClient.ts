import * as Prisma from "@prisma/client";
import * as PrismaType from "@prisma/client/runtime/library";

export interface IDatabaseClient
  extends Prisma.PrismaClient<
    { datasourceUrl: string | undefined },
    never,
    PrismaType.DefaultArgs
  > {}
