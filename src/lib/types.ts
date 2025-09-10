import { links, projectsData } from '@/lib/data';

export type SectionName = (typeof links)[number]['name'];

export type ProjectData = (typeof projectsData)[number];

export type ProjectImages = {
  hero: string;
  gallery: string[];
};

export type ProjectSpecifications = {
  material: string;
  dimensions: string;
  weight: string;
  finishType: string;
};
