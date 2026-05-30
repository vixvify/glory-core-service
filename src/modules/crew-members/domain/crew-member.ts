import { t, Static } from "elysia";

export interface CrewMember {
  id: string;
  name: string;
  photoUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export const createCrewMemberSchema = t.Object({
  name: t.String({ minLength: 1 }),
  photo: t.Optional(t.File()),
});
export type CreateCrewMemberInput = Static<typeof createCrewMemberSchema>;

export const updateCrewMemberParamsSchema = t.Object({
  id: t.String({ format: "uuid" }),
});
export type UpdateCrewMemberParamsInput = Static<
  typeof updateCrewMemberParamsSchema
>;

export const updateCrewMemberBodySchema = t.Object({
  name: t.String({ minLength: 1 }),
  photo: t.Optional(t.Union([t.File(), t.String()])),
});
export type UpdateCrewMemberBodyInput = Static<
  typeof updateCrewMemberBodySchema
>;

export const getCrewMemberByIdParamsSchema = t.Object({
  id: t.String({ format: "uuid" }),
});
export type GetCrewMemberByIdParamsInput = Static<
  typeof getCrewMemberByIdParamsSchema
>;

export const deleteCrewMemberParamsSchema = t.Object({
  id: t.String({ format: "uuid" }),
});
export type DeleteCrewMemberParamsInput = Static<
  typeof deleteCrewMemberParamsSchema
>;

export const searchCrewMembersQuerySchema = t.Object({
  q: t.Optional(t.String()),
});
export type SearchCrewMembersQueryInput = Static<
  typeof searchCrewMembersQuerySchema
>;
