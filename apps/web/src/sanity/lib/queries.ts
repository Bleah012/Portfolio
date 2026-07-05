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

export const HERO_QUERY = groq`
  *[_id == "hero"][0]{
    eyebrow,
    greeting,
    firstName,
    lastName,
    role,
    tagline,
    typewriterPhrases,
    primaryButton,
    secondaryButton,
    techBadges[]{
      _key,
      label,
      color
    }
  }
`;
