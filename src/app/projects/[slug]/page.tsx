import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { projectsData } from '@/lib/data';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all projects (optional - enables pre-rendering)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Big Dog Fabrications',
    };
  }

  return {
    title: `${project.title} | Big Dog Fabrications`,
    description: project.description,
    keywords: [
      'Big Dog Fabrications',
      'Wolf Vierbergen',
      ...project.technologies,
      'fabrication',
      'custom builds',
    ],
  };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8 text-sm">
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
          </li>
          <Icons.chevronRight className="text-muted-foreground size-4" />
          <li>
            <Link
              href="/#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
          </li>
          <Icons.chevronRight className="text-muted-foreground size-4" />
          <li className="text-foreground font-medium">{project.title}</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={project.images.hero}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
        </div>
      </section>

      {/* Project Header */}
      <section className="mb-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="font-heading mb-4 text-4xl font-bold lg:text-5xl">
              {project.title}
            </h1>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Specifications */}
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="mb-4 text-lg font-semibold">Specifications</h3>
            <dl className="space-y-3">
              <div>
                <dt className="text-muted-foreground text-sm font-medium">
                  Material
                </dt>
                <dd className="text-sm">{project.specifications.material}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-sm font-medium">
                  Dimensions
                </dt>
                <dd className="text-sm">{project.specifications.dimensions}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-sm font-medium">
                  Weight
                </dt>
                <dd className="text-sm">{project.specifications.weight}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-sm font-medium">
                  Finish
                </dt>
                <dd className="text-sm">{project.specifications.finishType}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="mb-12">
        <SectionHeading heading="Project Details" />
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
            {project.detailedDescription}
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="mb-12">
        <SectionHeading heading="Gallery" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project.images.gallery.map((image, index) => (
            <div
              key={image}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover transition-transform hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted/50 rounded-lg p-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">Interested in Similar Work?</h3>
        <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
          Have a project in mind that requires similar expertise? Let&apos;s
          discuss how Big Dog Fabrications can bring your vision to life with
          the same attention to detail and quality craftsmanship.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" asChild>
            <Link href="#contact">
              Get In Touch <Icons.arrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/#projects">
              View All Projects <Icons.grid className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="mt-12 border-t pt-8">
        <ProjectNavigation currentSlug={project.slug} />
      </section>
    </div>
  );
};

// Component for navigating between projects
const ProjectNavigation = ({ currentSlug }: { currentSlug: string }) => {
  const currentIndex = projectsData.findIndex((p) => p.slug === currentSlug);
  const previousProject =
    currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsData.length - 1
      ? projectsData[currentIndex + 1]
      : null;

  return (
    <nav className="flex justify-between">
      <div className="flex-1">
        {previousProject && (
          <Link
            href={`/projects/${previousProject.slug}`}
            className="hover:bg-muted/50 group flex items-center space-x-3 rounded-lg border p-4 transition-colors"
          >
            <Icons.chevronLeft className="text-muted-foreground group-hover:text-foreground size-5" />
            <div>
              <p className="text-muted-foreground text-sm">Previous Project</p>
              <p className="font-medium">{previousProject.title}</p>
            </div>
          </Link>
        )}
      </div>
      <div className="flex-1 text-right">
        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="hover:bg-muted/50 group flex items-center justify-end space-x-3 rounded-lg border p-4 transition-colors"
          >
            <div>
              <p className="text-muted-foreground text-sm">Next Project</p>
              <p className="font-medium">{nextProject.title}</p>
            </div>
            <Icons.chevronRight className="text-muted-foreground group-hover:text-foreground size-5" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default ProjectPage;
