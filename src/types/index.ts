export type ScreenId = 'home' | 'projects' | 'disciplines' | 'dispatches' | 'specifications' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: number;
  area: string;
  imageUrl: string;
  series: string;
  hallNumber?: string;
  structuralType: string;
  concreteGrade: string;
  summary: string;
  description: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export interface Discipline {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  active: boolean;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  materials: string[];
}

export interface Article {
  id: string;
  dispatchNumber: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  fullText: string[];
  imageUrl: string;
  author: string;
  readTime: string;
  tags: string[];
}

export interface ClientPartner {
  id: string;
  name: string;
  sub: string;
  accent?: string;
  type: string;
}

export interface InquiryFormState {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  discipline: 'architecture' | 'interior' | 'plannings' | 'all';
  squareMeters: number;
  timeline: string;
  notes: string;
}
