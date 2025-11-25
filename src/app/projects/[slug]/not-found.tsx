import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';

export default function ProjectNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="mx-auto max-w-md">
        <div className="mb-8">
          <h1 className="text-muted-foreground text-6xl font-bold">404</h1>
          <h2 className="mt-4 text-2xl font-bold">Project Not Found</h2>
          <p className="text-muted-foreground mt-2">
            The project you&apos;re looking for doesn&apos;t exist or may have
            been moved.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/#projects">
              <Icons.grid className="mr-2 size-4" />
              View All Projects
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <Icons.chevronLeft className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
