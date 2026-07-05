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
export const PROJECTS_SECTION_QUERY = groq`
  *[_id == "projectsSection"][0]{
    eyebrow,
    heading,
    description
  }
`;

export const FEATURED_PROJECTS_QUERY = groq`
  *[_type == "project" && featured == true]
  | order(order asc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    description,
    category,
    status,
    featured,
    order,
    techStack,
    githubUrl,
    liveUrl,
    accentColor
  }
`;
export const EXPERIENCE_SECTION_QUERY = groq`
  *[_id == "experienceSection"][0]{
    eyebrow,
    heading,
    description
  }
`;

export const EXPERIENCE_QUERY = groq`
  *[_type == "experience"]
  | order(order asc, _createdAt desc) {
    _id,
    title,
    organization,
    location,
    period,
    type,
    description,
    highlights,
    tools,
    order
  }
`;
export const CERTIFICATIONS_SECTION_QUERY = groq`
  *[_id == "certificationsSection"][0]{
    eyebrow,
    heading,
    description
  }
`;

export const CERTIFICATIONS_QUERY = groq`
  *[_type == "certification" && featured == true]
  | order(order asc, _createdAt desc) {
    _id,
    title,
    issuer,
    date,
    category,
    description,
    credentialUrl,
    featured,
    order,
    accentColor
  }
`;
export const BLOG_SECTION_QUERY = groq`
  *[_id == "blogSection"][0] {
    eyebrow,
    heading,
    description
  }
`;

export const POSTS_QUERY = groq`
  *[_type == "post" && featured == true] | order(order asc, publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    readTime,
    publishedAt,
    featured,
    order,
    tags,
    externalUrl,
    accentColor
  }
`;
