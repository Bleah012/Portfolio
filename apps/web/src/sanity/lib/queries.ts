import { groq } from "next-sanity";

export const SITE_SETTINGS_QUERY = groq`
  *[_id == "siteSettings"][0]{
    siteTitle,
    fullName,
    role,
    shortBio,
    email,
    location,
    githubUrl,
    linkedinUrl,
    resumeUrl
  }
`;
