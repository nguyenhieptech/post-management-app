import { ChevronDownIcon, CloseIcon } from '@/assets/icons';
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@/components/ui';
import { cn } from '@/utils';
import { NavLink, NavLinkProps } from 'react-router-dom';

type MobileNavItemProps = NavLinkProps & {
  children: React.ReactNode;
  to: NavLinkProps['to'];
};

function MobileNavItem({ to, children, ...props }: MobileNavItemProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          'block py-2 text-sm',
          isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400'
        )
      }
      to={to}
      {...props}
    >
      <PopoverClose aria-label="Close">{children}</PopoverClose>
    </NavLink>
  );
}

export function MobileNavigation() {
  return (
    <div className="pointer-events-auto md:hidden">
      <Popover>
        <PopoverTrigger className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
          Menu
          <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
        </PopoverTrigger>

        <PopoverContent className="w-44 fixed top-2 z-50 origin-top rounded-md bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
          <div className="flex flex-row-reverse items-center justify-between">
            <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
            <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
          </div>
          <nav className="mt-6">
            <ul className="divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
              {/* TODO: Add conditional rendering */}
              <MobileNavItem to="/">Home</MobileNavItem>
              <MobileNavItem to="create-post">Create Post</MobileNavItem>
              <MobileNavItem to="login">Login</MobileNavItem>
              <MobileNavItem to="register">Register</MobileNavItem>
            </ul>
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  );
}
