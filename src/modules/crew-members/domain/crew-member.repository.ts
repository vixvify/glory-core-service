import { CrewMember } from "./crew-member";

export interface CrewMemberRepository {
  findAll(): Promise<CrewMember[]>;
  search(q: string): Promise<CrewMember[]>;
  findById(id: string): Promise<CrewMember | null>;
  findByName(name: string): Promise<CrewMember | null>;
  create(name: string, photoUrl?: string): Promise<CrewMember>;
  update(id: string, name: string, photoUrl?: string): Promise<CrewMember>;
  delete(id: string): Promise<CrewMember>;
}
