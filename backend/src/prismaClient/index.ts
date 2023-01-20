import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function main() {
  // Connect the client
  await prismaClient.$connect()
  console.log('prisma conected!');
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prismaClient.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prismaClient.$disconnect()
    process.exit(1)
  })

export { prismaClient };