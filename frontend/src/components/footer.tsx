import { Container } from '@/components';
import { useAppSelector } from '@/store';
import { NavLink } from 'react-router-dom';

export function Footer() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <footer className="mt-32">
      <Container>
        <div className="border-t border-zinc-100 py-10 dark:border-zinc-700/40">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <NavLink className="transition hover:text-teal-500 dark:hover:text-teal-400" to="/">
                Home
              </NavLink>
              {isLoggedIn ? (
                <>
                  <NavLink
                    className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    to="/your-posts"
                  >
                    Your posts
                  </NavLink>
                  <NavLink
                    className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    to="/create-post"
                  >
                    Create post
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    to="/login"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Hiep Nguyen.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
