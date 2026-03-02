import { defineQuery } from "next-sanity";

export const THREE_RANDOM_STYLES_QUERY = defineQuery(`
  *[_type == "style"] | order(_createdAt desc) [0..2] {
    _id,
    name,
    image
  }
`);

export const ALL_STYLES_QUERY = defineQuery(`
  *[_type == "style"] | order(_createdAt desc) {
    _id,
    name,
    description,
    styleType,
    image
  }
`);
