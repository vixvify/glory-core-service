import { PrismaClient } from "@prisma/client";
import { seedMovies } from "./movies.data";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seeding...");
  console.log("Cleaning up database...");
  await prisma.movie.deleteMany();

  console.log("Creating mock movies...");
  for (const movie of seedMovies) {
    await prisma.movie.create({
      data: movie,
    });
  }
  console.log(`✅ Seeded ${seedMovies.length} movies successfully.`);
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
