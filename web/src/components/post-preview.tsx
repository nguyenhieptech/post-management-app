import { Card } from "@/components/card";
import { Post } from "@/types";
import { formatDate } from "@/utils";

type Props = {
  post: Post;
};

export function PostPreview({ post }: Props) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title to={`/posts/${post.id}`}>{post.title}</Card.Title>
        <Card.Eyebrow as="time" dateTime={post.created_at} className="md:hidden" decorate>
          {formatDate(post.created_at)}
        </Card.Eyebrow>
        <Card.Description>{post.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow as="time" dateTime={post.created_at} className="mt-1 hidden md:block">
        {formatDate(post.created_at)}
      </Card.Eyebrow>
    </article>
  );
}
