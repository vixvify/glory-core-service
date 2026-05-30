import {
  AppError,
  NotFoundError,
  BadRequestError,
  ConflictError,
} from "../../core/error";
import { CrewMember } from "./domain/crew-member";
import { CrewMemberRepository } from "./domain/crew-member.repository";
import { uploadToSupabase } from "../../lib/supabase";

export class CrewMemberService {
  constructor(private repo: CrewMemberRepository) {}

  async getAllCrewMembers(): Promise<CrewMember[]> {
    try {
      return await this.repo.findAll();
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to get crew members";
      throw new BadRequestError(message, error);
    }
  }

  async searchCrewMembers(q: string): Promise<CrewMember[]> {
    try {
      return await this.repo.search(q);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error
          ? error.message
          : "Failed to search crew members";
      throw new BadRequestError(message, error);
    }
  }

  async getCrewMemberById(id: string): Promise<CrewMember> {
    try {
      const crewMember = await this.repo.findById(id);
      if (!crewMember) {
        throw new NotFoundError(`Crew member with id ${id} not found`);
      }
      return crewMember;
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to get crew member";
      throw new BadRequestError(message, error);
    }
  }

  async createCrewMember(name: string, photo?: File): Promise<CrewMember> {
    try {
      const trimmedName = name.trim();
      const existing = await this.repo.findByName(trimmedName);
      if (existing) {
        throw new ConflictError(
          `Crew member with name "${trimmedName}" already exists`,
        );
      }

      let photoUrl: string | undefined = undefined;
      if (photo) {
        photoUrl = await uploadToSupabase(photo, "crews");
      }

      return await this.repo.create(trimmedName, photoUrl);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to create crew member";
      throw new BadRequestError(message, error);
    }
  }

  async updateCrewMember(
    id: string,
    name: string,
    photo?: File | string,
  ): Promise<CrewMember> {
    try {
      const existingById = await this.repo.findById(id);
      if (!existingById) {
        throw new NotFoundError(`Crew member with id ${id} not found`);
      }

      const trimmedName = name.trim();
      if (trimmedName.toLowerCase() !== existingById.name.toLowerCase()) {
        const existingByName = await this.repo.findByName(trimmedName);
        if (existingByName) {
          throw new ConflictError(
            `Crew member with name "${trimmedName}" already exists`,
          );
        }
      }

      let photoUrl: string | undefined = undefined;
      if (photo instanceof File) {
        photoUrl = await uploadToSupabase(photo, "crews");
      } else if (typeof photo === "string") {
        photoUrl = photo;
      }

      return await this.repo.update(id, trimmedName, photoUrl);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to update crew member";
      throw new BadRequestError(message, error);
    }
  }

  async deleteCrewMember(id: string): Promise<CrewMember> {
    try {
      const existing = await this.repo.findById(id);
      if (!existing) {
        throw new NotFoundError(`Crew member with id ${id} not found`);
      }
      return await this.repo.delete(id);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to delete crew member";
      throw new BadRequestError(message, error);
    }
  }
}
