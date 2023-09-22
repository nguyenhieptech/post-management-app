import { Card, SimpleLayout } from '@/components';
import { Post } from '@/types';
import { formatDate } from '@/utils';

export const posts: Post[] = [
  {
    id: '1',
    title: 'Crafting a design system for a multiplanetary future',
    description:
      'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
    content:
      'Ungues fistula annoso, ille addit linoque motatque uberior verso rubuerunt confine desuetaque. Sanguine anteit emerguntque expugnacior est pennas iniqui ecce haeret genus: peiora imagine fossas Cephisos formosa! Refugitque amata refelli supplex. Summa brevis vetuere tenebas, hostes vetantis, suppressit, arreptum regna. Postquam conpescit iuvenis habet corpus, et erratica, perdere, tot mota ars talis',
    date: '2023-09-15',
  },
  {
    id: '2',
    title: 'Introducing Animaginary: High performance web animations',
    description:
      'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
    content:
      'Deus feram verumque, fecit, ira tamen, terras per alienae victum. Mutantur levitate quas ubi arcum ripas oculos abest. Adest commissaque victae in gemitus nectareis ire diva dotibus ora, et findi huic invenit; fatis? Fractaque dare superinposita nimiumque simulatoremque sanguine, at voce aestibus diu! Quid veterum hausit tu nil utinam paternos ima, commentaque.',
    date: '2023-09-09',
  },
  {
    id: '3',
    title: 'Introducing Flexbox: CSS Flexbox',
    description:
      'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
    content:
      'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.',
    date: '2023-09-09',
  },
  {
    id: '4',
    title: 'Introducing Animaginary: High performance web animations',
    description:
      'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
    content:
      'Deus feram verumque, fecit, ira tamen, terras per alienae victum. Mutantur levitate quas ubi arcum ripas oculos abest. Adest commissaque victae in gemitus nectareis ire diva dotibus ora, et findi huic invenit; fatis? Fractaque dare superinposita nimiumque simulatoremque sanguine, at voce aestibus diu! Quid veterum hausit tu nil utinam paternos ima, commentaque.',
    date: '2023-09-09',
  },
];

type Props = {
  post: Post;
};

function PostPreview({ post }: Props) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title to={`/posts/${post.id}`}>{post.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={post.date}
          className="md:hidden"
          decorate
        >
          {formatDate(post.date)}
        </Card.Eyebrow>
        <Card.Description>{post.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={post.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(post.date)}
      </Card.Eyebrow>
    </article>
  );
}

export function Home() {
  return (
    <SimpleLayout
      title="Being up-to-date with software design, start-up ideas and the software industry generally. Yeah yeah I know, it sounds boring."
      intro="This is an application that allows users to create, view, and manage posts."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {posts.map((post) => (
            <PostPreview key={post.id} post={post} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
