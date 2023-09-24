import { useAppDispatch, useAppSelector } from '@/store';
import { baseApi } from '@/store/api';
import { logout } from '@/store/slices';
import { cn } from '@/utils';
import { NavLink, NavLinkProps } from 'react-router-dom';

type DesktopNavItemProps = NavLinkProps & {
  children: React.ReactNode;
  to: NavLinkProps['to'];
};

function DesktopNavItem({ to, children, ...props }: DesktopNavItemProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400'
        )
      }
      to={to}
      {...props}
    >
      {children}
    </NavLink>
  );
}

export function DesktopNavigation() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  function logoutUser() {
    dispatch(logout());
    dispatch(baseApi.util.resetApiState());
  }

  return (
    <nav className="pointer-events-auto hidden md:block">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <DesktopNavItem to="/">Home</DesktopNavItem>
        {isLoggedIn ? (
          <>
            <DesktopNavItem to="your-posts">Your Posts</DesktopNavItem>
            <DesktopNavItem to="create-post">Create Post</DesktopNavItem>
            <div
              onClick={logoutUser}
              className="hover:cursor-pointer relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            >
              Logout
            </div>
          </>
        ) : (
          <>
            <DesktopNavItem to="login">Login</DesktopNavItem>
            <DesktopNavItem to="register">Register</DesktopNavItem>
          </>
        )}
      </ul>
    </nav>
  );
}
