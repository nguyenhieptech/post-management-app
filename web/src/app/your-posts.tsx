import { PostPreview } from "@/components/post-preview";
import { SimpleLayout } from "@/components/simple-layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppSelector } from "@/store";
import { useGetPostsByAuthorQuery } from "@/store/api";
import { useState } from "react";
import { tags } from "./home";

export function YourPosts() {
  const authorId = useAppSelector((state) => state.auth.userInfo?.id);
  const postsByAuthorQuery = useGetPostsByAuthorQuery(authorId!);
  const [tagList, setTagList] = useState("React");

  // https://react.dev/learn/you-might-not-need-an-effect#caching-expensive-calculations
  const filteredPostsByTag = postsByAuthorQuery.data?.filter(
    (post) => post.tag === tagList
  );

  return (
    <SimpleLayout
      title="Being up-to-date with software design, start-up ideas and the software industry generally. Yeah yeah I know, it sounds boring."
      intro="This is an application that allows users to create, view, and manage posts."
    >
      <div className="mb-6 flex justify-end">
        <Select onValueChange={(value) => setTagList(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Tag" />
          </SelectTrigger>
          <SelectContent>
            {tags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {filteredPostsByTag?.map((post) => (
            <PostPreview key={post.id} post={post} />
          ))}
          {/* TODO: Add Skeleton UI */}
          {postsByAuthorQuery.isLoading ? <div>Loading...</div> : null}
          {postsByAuthorQuery.isError ? (
            <div>There were some errors...</div>
          ) : null}
        </div>
      </div>
    </SimpleLayout>
  );
}
