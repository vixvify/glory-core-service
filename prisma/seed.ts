import { PrismaClient } from "@prisma/client";
import { seedMovies, categories, ageRatings, universities } from "./movies.data";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seeding...");
  console.log("Cleaning up database...");
  await prisma.movieCrew.deleteMany();
  await prisma.movieBts.deleteMany();
  await prisma.movie.deleteMany();
  await prisma.crewMember.deleteMany();
  await prisma.category.deleteMany();
  await prisma.university.deleteMany();
  await prisma.ageRating.deleteMany();

  console.log("Seeding master data...");
  await prisma.category.createMany({
    data: categories.map(name => ({ name })),
  });

  await prisma.ageRating.createMany({
    data: ageRatings.map(name => ({ name })),
  });

  await prisma.university.createMany({
    data: universities.map(name => ({ name })),
  });

  console.log("Gathering unique crew members...");
  const uniqueNames = new Set<string>();
  for (const movie of seedMovies) {
    const oldCrew = movie.crew?.create;
    if (oldCrew) {
      const directors = oldCrew.director ? oldCrew.director.split(",").map((s: string) => s.trim()).filter(Boolean) : [];
      const producers = oldCrew.producer ? oldCrew.producer.split(",").map((s: string) => s.trim()).filter(Boolean) : [];
      const writers = oldCrew.writer ? oldCrew.writer.split(",").map((s: string) => s.trim()).filter(Boolean) : [];
      const cast = Array.isArray(oldCrew.cast)
        ? oldCrew.cast.map((s: string) => s.trim()).filter(Boolean)
        : (oldCrew.cast ? oldCrew.cast.split(",").map((s: string) => s.trim()).filter(Boolean) : []);

      for (const name of [...directors, ...producers, ...writers, ...cast]) {
        uniqueNames.add(name);
      }
    }
  }

  console.log(`Found ${uniqueNames.size} unique crew members. Syncing with database in bulk...`);
  const crewData = Array.from(uniqueNames).map(name => ({ name }));
  await prisma.crewMember.createMany({
    data: crewData,
    skipDuplicates: true,
  });

  const allCrewMembers = await prisma.crewMember.findMany();
  const crewMap = new Map<string, string>();
  for (const c of allCrewMembers) {
    crewMap.set(c.name, c.id);
  }

  console.log("Creating mock movies and mapping relations...");
  let count = 0;
  for (const movie of seedMovies) {
    count++;
    console.log(`[${count}/${seedMovies.length}] Seeding movie: "${movie.title}"`);
    const createdMovie = await prisma.movie.create({
      data: {
        title: movie.title,
        description: movie.description,
        thumbnail: movie.thumbnail,
        youtubeUrl: movie.youtubeUrl,
        category: movie.category,
        year: movie.year,
        duration: movie.duration,
        views: movie.views || 0,
        matchRate: movie.matchRate || 100,
        ageRating: movie.ageRating || "PG-13",
        university: movie.university,
      }
    });

    const oldCrew = movie.crew?.create;
    if (oldCrew) {
      const movieCrewData: { movieId: string; crewMemberId: string; role: string }[] = [];

      const addCrewRelations = (names: string[], role: string) => {
        for (const name of names) {
          if (!name) continue;
          const crewMemberId = crewMap.get(name);
          if (crewMemberId) {
            movieCrewData.push({
              movieId: createdMovie.id,
              crewMemberId,
              role,
            });
          }
        }
      };

      const directors = oldCrew.director ? oldCrew.director.split(",").map((s: string) => s.trim()).filter(Boolean) : [];
      const producers = oldCrew.producer ? oldCrew.producer.split(",").map((s: string) => s.trim()).filter(Boolean) : [];
      const writers = oldCrew.writer ? oldCrew.writer.split(",").map((s: string) => s.trim()).filter(Boolean) : [];
      const cast = Array.isArray(oldCrew.cast)
        ? oldCrew.cast.map((s: string) => s.trim()).filter(Boolean)
        : (oldCrew.cast ? oldCrew.cast.split(",").map((s: string) => s.trim()).filter(Boolean) : []);

      addCrewRelations(directors, "DIRECTOR");
      addCrewRelations(producers, "PRODUCER");
      addCrewRelations(writers, "WRITER");
      addCrewRelations(cast, "CAST");

      if (movieCrewData.length > 0) {
        await prisma.movieCrew.createMany({
          data: movieCrewData,
          skipDuplicates: true,
        });
      }

      const btsVideo = oldCrew.btsVideo ? [oldCrew.btsVideo] : [];
      const btsPhotos = Array.isArray(oldCrew.btsPhotos)
        ? oldCrew.btsPhotos
        : (oldCrew.btsPhotos ? oldCrew.btsPhotos.split(",").map((s: string) => s.trim()).filter(Boolean) : []);

      await prisma.movieBts.create({
        data: {
          movieId: createdMovie.id,
          btsVideo,
          btsPhotos,
        }
      });
    }
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
