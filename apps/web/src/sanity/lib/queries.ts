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

export const STATS_QUERY = groq`
  *[_id == "stats"][0]{
    items[]{
      _key,
      value,
      suffix,
      label,
      description
    }
  }
`;

export const ABOUT_QUERY = groq`
  *[_id == "about"][0]{
    eyebrow,
    heading,
    highlight,
    body,
    timeline[]{
      _key,
      year,
      title,
      description
    },
    values[]{
      _key,
      title,
      description
    }
  }
`;
export const SKILLS_QUERY = groq`
  *[_id == "skills"][0]{
    eyebrow,
    heading,
    categories[]{
      _key,
      title,
      description,
      skills[]{
        _key,
        name,
        level
      }
    },
    technologies[]{
      _key,
      name,
      group
    }
  }
`;
