import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-1.webp',
    title: 'Custom Project 1',
    description:
      'A custom fabrication project showcasing precision engineering and innovative design solutions.',
    technologies: ['Steel', 'Welding', 'CAD Design', 'CNC Machining'],
    links: {
      preview: '#',
      github: '#',
      githubApi: '#',
    },
  },
  {
    image: '/images/project-2.webp',
    title: 'Custom Project 2',
    description:
      'An architectural fabrication piece combining form and function with modern materials.',
    technologies: ['Aluminum', 'Laser Cutting', '3D Modeling', 'Assembly'],
    links: {
      preview: '#',
      github: '#',
      githubApi: '#',
    },
  },
  {
    image: '/images/project-3.webp',
    title: 'Custom Project 3',
    description:
      'A specialized construction project demonstrating advanced fabrication techniques and attention to detail.',
    technologies: ['Mixed Materials', 'Welding', 'Finishing', 'Installation'],
    links: {
      preview: '#',
      github: '#',
      githubApi: '#',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Web developer intern',
    company: 'WEB-BOX, Tarnobrzeg PL',
    description:
      'During this internship, I focused on two key areas: creating Wordpress plugins and managing website content, plugins, and settings.',
    period: '2023',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
  },
  {
    title: 'Frontend developer & UI designer',
    company: 'Freelancing, remote',
    description:
      'As a freelancer, I specialized in graphic design using Figma and website development using Next.js with Sanity CMS. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
    period: '2023 - 2024',
    technologies: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind'],
  },
  {
    title: 'Frontend developer intern',
    company: 'Chop-chop, remote',
    description:
      'During my internship at Chop-Chop, I collaborated with an experienced IT team, focusing on tasks in Next.js. This experience provided valuable insights into teamwork and advanced my proficiency in Next.js.',
    period: '2024',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Frontend developer & UI designer',
    company: 'GeoScan, remote',
    description: (
      <>
        At GeoScan, I collaborate with frontend, backend, and GIS specialists to
        build{' '}
        <Link
          className={cn(
            buttonVariants({ variant: 'link' }),
            'm-0 h-fit p-0 text-base'
          )}
          href="https://geoscan-app.com"
          target="_blank"
        >
          geoscan-app.com
        </Link>{' '}
        — a platform for generating real estate reports. I’m responsible for
        developing and maintaining the frontend, as well as designing UI/UX to
        ensure a clear and intuitive user experience.
      </>
    ),
    period: '2024 - present',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Leaflet'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
