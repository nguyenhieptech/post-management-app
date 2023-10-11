import { PostPreview, SimpleLayout } from '@/components';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { useGetPostsQuery } from '@/store/api';
import { useEffect, useState } from 'react';

/** Mock tag data, we can replace this by fetching tags from an API for example */
export const tags = ['React', 'Vue', 'NodeJS', 'Language'];

export function Home() {
  const postsQuery = useGetPostsQuery();
  const [tagList, setTagList] = useState('React');
  const [postsFilteredByTag, setPostsFilteredByTag] = useState(() => {
    return postsQuery.data;
  });

  useEffect(() => {
    const newPostsFiltered = postsQuery.data?.filter(
      (post) => post.tag === tagList
    );
    setPostsFilteredByTag(newPostsFiltered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tagList]);

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
          {postsFilteredByTag?.map((post) => (
            <PostPreview key={post.id} post={post} />
          ))}
          {/* TODO: Add Skeleton UI */}
          {postsQuery.isLoading ? <div>Loading...</div> : null}
          {postsQuery.isError ? <div>There were some errors...</div> : null}
        </div>
      </div>
    </SimpleLayout>
  );
}
