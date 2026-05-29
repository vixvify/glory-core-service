import { prisma } from "../../lib/prisma";
import { MasterDataRepository } from "../../modules/masterdata/domain/masterdata.repository";
import { Category, University, AgeRating, CrewMember } from "../../modules/masterdata/domain/masterdata";

export class MasterDataRepositoryImpl implements MasterDataRepository {
  async getCategories(): Promise<Category[]> {
    return prisma.category.findMany({
      orderBy: { name: "asc" },
    });
  }

  async getUniversities(): Promise<University[]> {
    return prisma.university.findMany({
      orderBy: { name: "asc" },
    });
  }

  async getAgeRatings(): Promise<AgeRating[]> {
    return prisma.ageRating.findMany({
      orderBy: { name: "asc" },
    });
  }

  async getCrewMembers(): Promise<CrewMember[]> {
    return prisma.crewMember.findMany({
      orderBy: { name: "asc" },
    });
  }
}
