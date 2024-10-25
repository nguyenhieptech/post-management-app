import { Container } from "@/components/container";
import React from "react";

type Props = {
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function SimpleLayout({ title, intro, children }: Props) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-4xl">
        <h1 className="text-4xl font-bold tracking-normal text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-8 text-base text-zinc-600 dark:text-zinc-400">{intro}</p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  );
}
