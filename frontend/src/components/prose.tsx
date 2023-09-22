import { cn } from '@/utils';

type Props = {
  children: React.ReactNode;
  className: string;
};

export function Prose({ children, className }: Props) {
  return (
    <div
      className={cn(
        'prose dark:prose-invert text-zinc-600 dark:text-zinc-400 leading-7',
        className
      )}
    >
      {children}
    </div>
  );
}
