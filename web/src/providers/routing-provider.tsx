import { AppLayout } from "@/components/app-layout";
import { CreatePost } from "@/pages/create-post";
import { Home } from "@/pages/home";
import { Login } from "@/pages/login";
import { NotFound } from "@/pages/not-found";
import { PostDetail } from "@/pages/post-detail";
import { Register } from "@/pages/register";
import { YourPosts } from "@/pages/your-posts";
import { useAppSelector } from "@/store";
import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
} from "react-router-dom";

// React Protected Routes | Role-Based Authorization | React Router v6
// https://youtu.be/oUZjO00NkhY?si=-AESslJMW4xz-qlu

/** Only authenticated users can access those routes */
function RequiredAuth() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

/** Only unauthenticated users can access those routes */
function NotRequiredAuth() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  return !isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="/posts/:postId" element={<PostDetail />} />
      <Route element={<NotRequiredAuth />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<RequiredAuth />}>
        <Route path="/your-posts" element={<YourPosts />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export function RoutingProvider() {
  return <RouterProvider router={router} />;
}
