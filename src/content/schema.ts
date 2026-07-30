import { z } from 'zod';

export const contactSchema = z.object({
  email: z.email().optional(),
  linkedin: z.url().optional(),
  github: z.url().optional(),
  website: z.url().optional(),
});

export const experienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  role: z.string(),
  location: z.string().optional(),
  start: z.string(),
  end: z.string(),
  current: z.boolean().default(false),
  summary: z.string(),
  highlights: z.array(z.string()).default([]),
  technologies: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
});

export const educationSchema = z.object({
  id: z.string(),
  institution: z.string(),
  degree: z.string(),
  field: z.string().optional(),
  location: z.string().optional(),
  start: z.string(),
  end: z.string(),
});

export const certificationSchema = z.object({
  id: z.string(),
  name: z.string(),
  issuer: z.string().optional(),
  year: z.string(),
});

export const skillGroupSchema = z.object({
  id: z.string(),
  title: z.string(),
  items: z.array(z.string()).min(1),
});

export const caseStudySchema = z.object({
  id: z.string(),
  title: z.string(),
  context: z.string(),
  problem: z.string(),
  role: z.string(),
  approach: z.string(),
  outcome: z.string(),
  technologies: z.array(z.string()).default([]),
  confidential: z.boolean().default(true),
});

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: z.enum(['planned', 'active', 'archived']),
  technologies: z.array(z.string()).default([]),
  repository: z.url().optional(),
  demo: z.url().optional(),
});

export const writingItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.enum(['article', 'talk', 'course']),
  date: z.string().optional(),
  url: z.url().optional(),
  summary: z.string().optional(),
});

export const languageSchema = z.object({
  name: z.string(),
  level: z.string(),
});

export const profileSchema = z.object({
  fullName: z.string(),
  shortName: z.string(),
  professionalTitle: z.string(),
  location: z.string(),
  summary: z.string(),
  valueProposition: z.string(),
  about: z.array(z.string()).min(1),
  contact: contactSchema,
  portrait: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
  experience: z.array(experienceSchema).min(1),
  education: z.array(educationSchema),
  certifications: z.array(certificationSchema),
  skills: z.array(skillGroupSchema),
  caseStudies: z.array(caseStudySchema),
  projects: z.array(projectSchema),
  writing: z.array(writingItemSchema),
  languages: z.array(languageSchema),
  features: z.object({
    projects: z.boolean(),
    writing: z.boolean(),
    caseStudies: z.boolean(),
    portrait: z.boolean(),
  }),
});

export type Profile = z.infer<typeof profileSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type CaseStudy = z.infer<typeof caseStudySchema>;
export type Locale = 'en' | 'es';
