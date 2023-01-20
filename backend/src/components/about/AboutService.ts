import { prismaClient } from "../../prismaClient"

interface About {
  title: string
  description: string
  cv: string
  slug: string
}

const listService = async ({ title, description, cv, slug }: About) => {
  const list = await prismaClient.about.findFirst({
    where: {
      slug: {
        startsWith: 'about',
      }
    }
  });

  return list;
}

export { listService }