export type Post = Partial<{
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
}>;

/**
 * Use this instead of "any" and fix "any" type later
 * @see https://youtu.be/y7WUsi6NeH8?si=5yV1JJKifFr3iAdb
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TSFixMe = any;
