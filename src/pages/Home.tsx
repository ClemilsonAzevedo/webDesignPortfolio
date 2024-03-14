import { Project } from "@/components/Project";

export function Home() {

  return (
    <section className="overflow-y-scroll h-full w-full flex flex-col items-center scroll-smooth justify-center text-neutral-950 dark:text-neutral-200 z-20">

      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />

    </section>
  )
}