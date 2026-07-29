import { person } from "@/content/cv";
import { GithubIcon, LinkedInIcon, MediumIcon } from "./icons";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pb-32 md:pt-24">
      <p className="mono-label mb-6 text-sm font-medium text-text-secondary">Data Scientist · AI/ML Engineer</p>
      <h1 className="max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-text">
        {person.name}
      </h1>
      <p className="mt-8 max-w-[38rem] text-lg leading-relaxed text-text-secondary md:text-xl">
        Delivering analytics and predictive intelligence (AI/ML) solutions — currently an Analyst in ITSM (Analytics &amp;
        AI/ML) at{" "}
        <span className="text-text">Sysco LABS Sri Lanka</span>.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${person.email}`}
          className="rounded-md bg-accent px-5 py-3 font-medium text-bg transition-colors duration-150 hover:bg-accent-hover focus-visible:bg-accent-hover active:scale-[0.98]"
        >
          Email me
        </a>
        <a
          href={person.cvFile}
          download
          className="rounded-md border border-line px-5 py-3 font-medium text-text transition-colors duration-150 hover:border-line-strong hover:bg-surface-1 focus-visible:border-line-strong focus-visible:bg-surface-1 active:scale-[0.98]"
        >
          Download CV
        </a>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm text-text-muted">
        <a href={person.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors duration-150 hover:text-text focus-visible:text-text">
          <LinkedInIcon /> LinkedIn
        </a>
        <a href={person.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors duration-150 hover:text-text focus-visible:text-text">
          <GithubIcon /> GitHub
        </a>
        <a href={person.links.medium} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors duration-150 hover:text-text focus-visible:text-text">
          <MediumIcon /> Medium
        </a>
      </div>
    </section>
  );
}
