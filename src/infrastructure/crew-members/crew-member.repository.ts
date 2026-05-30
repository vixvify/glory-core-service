import { prisma } from "../../lib/prisma";
import { CrewMemberRepository } from "../../modules/crew-members/domain/crew-member.repository";
import { CrewMember } from "../../modules/crew-members/domain/crew-member";

export class CrewMemberRepositoryImpl implements CrewMemberRepository {
  async findAll(): Promise<CrewMember[]> {
    return prisma.crewMember.findMany({
      orderBy: { name: "asc" },
    });
  }

  async search(q: string): Promise<CrewMember[]> {
    return prisma.crewMember.findMany({
      where: {
        name: {
          contains: q,
          mode: "insensitive",
        },
      },
      orderBy: { name: "asc" },
    });
  }

  async findById(id: string): Promise<CrewMember | null> {
    return prisma.crewMember.findUnique({
      where: { id },
    });
  }

  async findByName(name: string): Promise<CrewMember | null> {
    return prisma.crewMember.findUnique({
      where: { name },
    });
  }

  async create(name: string, photoUrl?: string): Promise<CrewMember> {
    return prisma.crewMember.create({
      data: { name, photoUrl },
    });
  }

  async update(
    id: string,
    name: string,
    photoUrl?: string,
  ): Promise<CrewMember> {
    return prisma.crewMember.update({
      where: { id },
      data: {
        name,
        ...(photoUrl !== undefined ? { photoUrl } : {}),
      },
    });
  }

  async delete(id: string): Promise<CrewMember> {
    return prisma.crewMember.delete({
      where: { id },
    });
  }
}
