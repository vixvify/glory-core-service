import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const movies = [
  {
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    imageUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    category: "Action",
    rating: 9.0,
    releaseYear: 2008,
    duration: 152,
  },
  {
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project.",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    category: "Sci-Fi",
    rating: 8.8,
    releaseYear: 2010,
    duration: 148,
  },
  {
    title: "Interstellar",
    description: "When Earth becomes uninhabitable, a team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    category: "Sci-Fi",
    rating: 8.7,
    releaseYear: 2014,
    duration: 169,
  },
  {
    title: "The Godfather",
    description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=UaVTIH8mujA",
    category: "Drama",
    rating: 9.2,
    releaseYear: 1972,
    duration: 175,
  },
  {
    title: "Spirited Away",
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
    category: "Anime",
    rating: 8.6,
    releaseYear: 2001,
    duration: 125,
  },
  {
    title: "La La Land",
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
    category: "Romance",
    rating: 8.0,
    releaseYear: 2016,
    duration: 128,
  },
  {
    title: "Knives Out",
    description: "A detective investigates the death of the patriarch of an eccentric, combative family.",
    imageUrl: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=qGqiHJTsRkQ",
    category: "Comedy",
    rating: 7.9,
    releaseYear: 2019,
    duration: 130,
  },
];

async function main() {
  console.log("🌱 Starting seeding...");
  const count = await prisma.movie.count();
  if (count === 0) {
    console.log("Creating mock movies...");
    for (const movie of movies) {
      await prisma.movie.create({
        data: movie,
      });
    }
    console.log(`✅ Seeded ${movies.length} movies successfully.`);
  } else {
    console.log("⚠️ Database already has movies. Skipping seed.");
  }
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
