import { Category, University, AgeRating, CrewMember } from "./masterdata";

export interface MasterDataRepository {
  getCategories(): Promise<Category[]>;
  getUniversities(): Promise<University[]>;
  getAgeRatings(): Promise<AgeRating[]>;
  getCrewMembers(): Promise<CrewMember[]>;
}
