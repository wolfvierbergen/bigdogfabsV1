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
    slug: 'wadi-deck',
    image: '/images/wadi-deck-thumbnail.webp',
    title: 'Wooden deck',
    description: 'A custom wooden deck',
    detailedDescription: `
      The customer wanted a deck built over their pond to increase the usable space on the terrace and fill the rounded shape. 
    
      A challenge in this built was the rounded shape of the pond and the presence of water at the bottom of the pond.
      A 3d scan of the area was done and initial CAD drawings were made to get an idea of the final shape.
  
      The deck consists of a sub-frame made from used wood, and decking made from IPE hardwood. Footings are set in concrete and raised off the ground to keep the wood dry.

      The railing is made from stainless steel wiring, to keep the plants visible from the terrace and minimise the visual impact on the area. 

      As this is a custom project, everything in this build was made on-site to perfectly match the surrounding shape.

    `,
    technologies: ['Photogrammetry', 'Carpentry', 'CAD Design'],
    images: {
      hero: '/images/wadi-deck-thumbnail.webp',
      gallery: [
        '/images/wadi-deck/wadi-1.jpg',
        '/images/wadi-deck/wadi-2.jpg',
        '/images/wadi-deck/wadi-3.jpg',
        '/images/wadi-deck/wadi-4.jpg',
        '/images/wadi-deck/wadi-5.jpg',
        '/images/wadi-deck/wadi-6.jpg',
        '/images/wadi-deck/wadi-7.jpg',
        '/images/wadi-deck/wadi-8.jpg',
        '/images/wadi-deck/wadi-9.jpg',
      ],
    },
    specifications: {
      material: 'IPE hardwood',
      dimensions: '5 m2',
      finishType: 'Rubio monocoat: Teak',
    },
    links: {
      preview: '#',
      github: '#',
      githubApi: '#',
    },
  },
  {
    slug: 'architectural-aluminum-piece',
    image: '/images/project-2.webp',
    title: 'Custom Project 2',
    description:
      'An architectural fabrication piece combining form and function with modern materials.',
    detailedDescription: `
      This architectural aluminum piece represents the perfect fusion of form and function, utilizing cutting-edge laser cutting technology and precise 3D modeling. The project showcases our ability to work with modern materials while maintaining the highest standards of craftsmanship.

      Every aspect of this build was carefully planned, from material selection to final assembly, ensuring both structural integrity and visual appeal.
    `,
    technologies: ['Aluminum', 'Laser Cutting', '3D Modeling', 'Assembly'],
    images: {
      hero: '/images/project-2.webp',
      gallery: [
        '/images/project2/gallery1.jpg',
        '/images/project2/gallery2.jpg',
        '/images/project2/gallery3.jpg',
      ],
    },
    specifications: {
      material: 'Marine-grade aluminum',
      dimensions: '3.2m x 2.1m x 1.2m',
      weight: '180kg',
      finishType: 'Anodized finish',
    },
    links: {
      preview: '#',
      github: '#',
      githubApi: '#',
    },
  },
  {
    slug: 'mixed-materials-construction',
    image: '/images/project-3.webp',
    title: 'Custom Project 3',
    description:
      'A specialized construction project demonstrating advanced fabrication techniques and attention to detail.',
    detailedDescription: `
      This specialized construction project challenged our team to combine multiple materials and fabrication techniques in a single build. The result showcases our versatility and attention to detail, demonstrating advanced welding, precision finishing, and professional installation practices.

      The project required innovative solutions and careful coordination between different fabrication processes to achieve the desired outcome.
    `,
    technologies: ['Mixed Materials', 'Welding', 'Finishing', 'Installation'],
    images: {
      hero: '/images/project-3.webp',
      gallery: [
        '/images/project3/gallery1.jpg',
        '/images/project3/gallery2.jpg',
        '/images/project3/gallery3.jpg',
        '/images/project3/gallery4.jpg',
        '/images/project3/gallery5.jpg',
      ],
    },
    specifications: {
      material: 'Steel and aluminum composite',
      dimensions: '4.0m x 2.5m x 1.5m',
      weight: '320kg',
      finishType: 'Multi-stage coating',
    },
    links: {
      preview: '#',
      github: '#',
      githubApi: '#',
    },
  },
];

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
