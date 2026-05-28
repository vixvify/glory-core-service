/*
  Warnings:

  - You are about to drop the column `comment` on the `ratings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "university" TEXT;

-- AlterTable
ALTER TABLE "ratings" DROP COLUMN "comment";

-- CreateTable
CREATE TABLE "movie_crews" (
    "id" UUID NOT NULL,
    "movieId" UUID NOT NULL,
    "director" TEXT,
    "producer" TEXT,
    "writer" TEXT,
    "cast" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "btsVideo" TEXT,
    "btsPhotos" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movie_crews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movie_crews_movieId_key" ON "movie_crews"("movieId");

-- AddForeignKey
ALTER TABLE "movie_crews" ADD CONSTRAINT "movie_crews_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
