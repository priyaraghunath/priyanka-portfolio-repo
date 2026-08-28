export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  profileImage?: string;
  resumePath: string;
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  responsibilities: string[];
  highlights?: string[];
}

export interface Education {
  credential: string;
  institution: string;
  startDate: string;
  endDate: string;
  details?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  contributions: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface Achievement {
  title: string;
  organization?: string;
  description: string;
  date?: string;
  url?: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  overview: string;
  yearsExperience: string;
  strengths: string[];
  highlights: string[];
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
}