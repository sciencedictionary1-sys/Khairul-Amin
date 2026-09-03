export interface Project {
  name: string;
  category: string;
  description: string;
  status: string;
  link?: string;
  imageUrl?: string;
}

export interface Artwork {
  id: string;
  title: string;
  description?: string;
  date?: string;
  imageUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  icon?: string;
}

export interface GalleryImage {
  id: string;
  category: string;
  caption?: string;
  imageUrl?: string;
}

export interface TechJourneySection {
  title: string;
  content?: string[];
  list?: string[];
  projects?: { icon: string; name: string; desc: string }[];
  quote?: string;
}

export interface TechTimelineItem {
  icon: string;
  title: string;
}

export interface Experience {
  id: string;
  icon: string;
  title: string;
  description: string;
  period?: string;
  learned?: string[];
  skills?: string[];
  link?: string;
}

export interface BiographyData {
  identity: {
    name: string;
    tagline: string;
    introduction: string;
    profilePhotoUrl?: string;
    logoUrl?: string;
  };
  quickFacts: { label: string; value: string }[];
  about: {
    text1: string;
    text2: string;
  };
  story: { chapter: string; title: string; content: string }[];
  journey: { year: string; title: string; description: string }[];
  experience?: Experience[];
  education: { institution: string; level: string; period: string; description: string }[];
  technologyJourney?: {
    sections: TechJourneySection[];
    timeline: TechTimelineItem[];
  };
  skills: { category: string; items: string[] }[];
  projects: Project[];
  artwork: Artwork[];
  achievements: Achievement[];
  gallery: GalleryImage[];
  vision: string[];
  contactInformation?: {
    email?: string;
    phone?: string;
    whatsapp?: string;
    facebook?: string;
    youtube?: string;
    instagram?: string;
    github?: string;
    website?: string;
    other?: string;
  };
  socialLinks: {
    facebook?: string;
    youtube?: string;
    instagram?: string;
    github?: string;
    linkedin?: string;
  };
}
