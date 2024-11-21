import { defineQuery } from 'groq';

export const STARTUPS_QUERY = defineQuery(
  // la query fonctionne directement sur la section vision de localhost:3000/studio
  `*[_type=="startup" && defined(slug.current)] | order(_createdAt desc) {
  _id,
  title,
  slug, 
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views, 
  description,
  category,
  image
}`
);
