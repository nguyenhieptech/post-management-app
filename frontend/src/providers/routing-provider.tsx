import { AppLayout } from '@/components';
import {
  CreatePost,
  Home,
  Login,
  NotFound,
  PostDetail,
  Register,
} from '@/pages';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/posts/:postId" element={<PostDetail />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export function RoutingProvider() {
  return <RouterProvider router={router} />;
}
