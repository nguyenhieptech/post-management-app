import { Footer, Header } from '@/components';
import { cn } from '@/utils';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <>
      <div
        className={cn(
          'fixed inset-0 flex justify-center sm:px-8',
          process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
        )}
      >
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
