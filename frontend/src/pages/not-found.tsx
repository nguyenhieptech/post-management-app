import { Container } from '@/components';
import { Button } from '@/components/ui';
import { NavLink } from 'react-router-dom';

export function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Um, yeah. This is awkward. We couldn&#39;t find the page you&#39;re
          looking for.
        </p>
        <Button variant="secondary" className="mt-6">
          <NavLink to="/">Go back home</NavLink>
        </Button>
      </div>
    </Container>
  );
}
