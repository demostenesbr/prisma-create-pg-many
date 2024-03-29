// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.article.upsert({
    where: { names: 'Support for PostgresSQL' },
    update: {},
    create: {
      names: 'Support for PostgresSQL',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: true,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { names: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      names: "What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: false,
    },
  });
  
  const post3 = await prisma.article.upsert({
    where: { names: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      names: "What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  const post4= await prisma.article.upsert({
    where: { names: 'Under Control' },
    update: {},
    create: {
      names: 'Under Control',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: true,
    },
  });

  console.log({ post1, post2, post3, post4 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });