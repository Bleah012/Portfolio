export type SiteSettings = {
  siteTitle?: string;
  fullName?: string;
  role?: string;
  shortBio?: string;
  email?: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  resumeUrl?: string;
};

export type Hero = {
  eyebrow?: string;
  greeting?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  tagline?: string;
  typewriterPhrases?: string[];
  primaryButton?: {
    label?: string;
    href?: string;
  };
  secondaryButton?: {
    label?: string;
    href?: string;
  };
  techBadges?: {
    _key: string;
    label?: string;
    color?: string;
  }[];
};

export type Stats = {
  items?: {
    _key: string;
    value?: number;
    suffix?: string;
    label?: string;
    description?: string;
  }[];
};

export type About = {
  eyebrow?: string;
  heading?: string;
  highlight?: string;
  body?: string[];
  timeline?: {
    _key: string;
    year?: string;
    title?: string;
    description?: string;
  }[];
  values?: {
    _key: string;
    title?: string;
    description?: string;
  }[];
};
export type Skills = {
  eyebrow?: string;
  heading?: string;
  categories?: {
    _key: string;
    title?: string;
    description?: string;
    skills?: {
      _key: string;
      name?: string;
      level?: number;
    }[];
  }[];
  technologies?: {
    _key: string;
    name?: string;
    group?: string;
  }[];
};
export type ProjectsSection = {
  eyebrow?: string;
  heading?: string;
  description?: string;
};

export type Project = {
  _id: string;
  title?: string;
  slug?: string;
  summary?: string;
  description?: string;
  category?: string;
  status?: string;
  featured?: boolean;
  order?: number;
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  accentColor?: string;
};
export type ExperienceSection = {
  eyebrow?: string;
  heading?: string;
  description?: string;
};

export type Experience = {
  _id: string;
  title?: string;
  organization?: string;
  location?: string;
  period?: string;
  type?: string;
  description?: string;
  highlights?: string[];
  tools?: string[];
  order?: number;
};
export type CertificationsSection = {
  eyebrow?: string;
  heading?: string;
  description?: string;
};

export type Certification = {
  _id: string;
  title?: string;
  issuer?: string;
  date?: string;
  category?: string;
  description?: string;
  credentialUrl?: string;
  featured?: boolean;
  order?: number;
  accentColor?: string;
};
export type BlogSection = {
  eyebrow?: string;
  heading?: string;
  description?: string;
};

export type Post = {
  _id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  publishedAt?: string;
  featured?: boolean;
  order?: number;
  tags?: string[];
  externalUrl?: string;
  accentColor?: string;
};
