import { Category, University, AgeRating } from "./masterdata";

export interface MasterDataRepository {
  getCategories(): Promise<Category[]>;
  getUniversities(): Promise<University[]>;
  getAgeRatings(): Promise<AgeRating[]>;
}
