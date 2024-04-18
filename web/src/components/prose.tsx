import { cn } from "@/utils";

type Props = {
  children: React.ReactNode;
  className: string;
};

export function Prose({ children, className }: Props) {
  return (
    <div
      className={cn(
        "prose leading-7 text-zinc-600 dark:prose-invert dark:text-zinc-400",
        className
      )}
    >
      {children}
    </div>
  );
}
