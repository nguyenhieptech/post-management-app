/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { mutationPostFormSchema } from "@/app/create-post";
import { ArrowLeftIcon } from "@/assets/icons";
import { Container } from "@/components/container";
import { Prose } from "@/components/prose";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";
import { useAppSelector } from "@/store";
import {
  useDeletePostMutation,
  useGetPostByIdQuery,
  useUpdatePostMutation,
} from "@/store/api";
import { formatDate } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DotsHorizontalIcon,
  Pencil2Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as z from "zod";

type EditPostForm = z.infer<typeof mutationPostFormSchema>;

export function PostDetail() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const post = useGetPostByIdQuery(postId!);
  const authorId = useAppSelector((state) => state.auth.userInfo?.id);

  const [isEditDialogOpen, setIsEditDialogConfirmOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogConfirmOpen] = useState(false);

  const editForm = useForm<EditPostForm>({
    resolver: zodResolver(mutationPostFormSchema),
    defaultValues: {
      title: post.data?.title,
      description: post.data?.description,
      content: post.data?.content,
    },
  });

  // Set default form values
  useEffect(() => {
    if (isEditDialogOpen) {
      editForm.setValue("title", post.data?.title!);
      editForm.setValue("description", post.data?.description!);
      editForm.setValue("content", post.data?.content!);
      editForm.clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditDialogOpen]);

  const [updatePostMutation] = useUpdatePostMutation();

  async function onSubmit(editPostValues: EditPostForm) {
    try {
      await updatePostMutation({ ...editPostValues, id: postId }).unwrap();
      toast({
        title: "Update post successfully",
      });
      setIsEditDialogConfirmOpen(false);
      navigate("/");
    } catch (error) {
      toast({
        title: "Update post failed. Please try again",
      });
    }
  }

  const [deletePostMutation] = useDeletePostMutation();
  async function deletePost() {
    try {
      await deletePostMutation(postId!).unwrap();
      toast({
        title: "Delete post successfully",
      });
      setIsDeleteDialogConfirmOpen(false);
      navigate("/");
    } catch (error) {
      toast({
        title: "Delete post failed. Please try again",
      });
    }
  }

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back to posts"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
          </button>

          <article>
            <header className="flex flex-col">
              <div className="flex justify-between">
                <time
                  dateTime={post.data?.created_at}
                  className="flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">
                    {formatDate(post.data?.created_at)}
                  </span>
                </time>

                {/* Users can only delete their own posts */}
                {authorId === post.data?.author_id && (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="flex items-center justify-between rounded-md px-4 py-2 hover:cursor-pointer dark:bg-zinc-800">
                        <DotsHorizontalIcon className="h-4 w-4" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-40 bg-white dark:bg-zinc-900"
                      align="end"
                    >
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        className="flex justify-between"
                        onClick={() => setIsEditDialogConfirmOpen(true)}
                      >
                        <p>Edit</p>
                        <Pencil2Icon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        className="flex justify-between"
                        onClick={() => setIsDeleteDialogConfirmOpen(true)}
                      >
                        <p>Delete</p>
                        <TrashIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-normal text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {post.data?.title}
              </h1>
            </header>
            <Prose className="mt-8">{post.data?.content}</Prose>
          </article>

          {post.isLoading ? (
            <article>
              <p>Loading...</p>
            </article>
          ) : null}
        </div>
      </div>

      {/* Edit dialog */}
      {/* This form should look exactly like form in pages/create-post */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogConfirmOpen}>
        <DialogContent className="dark:bg-zinc-900">
          <DialogHeader>
            <DialogTitle>Edit Post</DialogTitle>
          </DialogHeader>
          <Separator className="my-2" />
          <Form {...editForm}>
            <form
              className="space-y-4"
              onSubmit={editForm.handleSubmit(onSubmit)}
            >
              <FormField
                control={editForm.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Post title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Post description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Post content" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <Button className="md:w-1/2" type="submit">
                  Edit post
                </Button>
                <Button
                  className="md:w-1/2"
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditDialogConfirmOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Confirm delete post dialog */}
      {/* https://github.com/radix-ui/primitives/discussions/1436 */}
      <Dialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogConfirmOpen}
      >
        <DialogContent className="h-60 dark:bg-zinc-900 sm:h-48">
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to delete this post?
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              post.
            </DialogDescription>
          </DialogHeader>
          <Separator className="my-2" />
          <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Button
              className="md:w-1/2"
              variant="destructive"
              onClick={deletePost}
            >
              Yes, delete this post
            </Button>
            <Button className="md:w-1/2" variant="secondary">
              No
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Container>
  );
}
