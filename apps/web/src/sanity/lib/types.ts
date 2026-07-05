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
