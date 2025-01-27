import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany();
  prismaDisconnect();
  return allUsers;
};

export const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  prismaDisconnect();
  return user;
};

//TODO: This does not work!!!??? should in a then after the functions above ???
const prismaDisconnect = async () => {
  try {
    await prisma.$disconnect();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};
