import { person } from "@/content/cv";
import CopyEmail from "./CopyEmail";
import { GithubIcon, LinkedInIcon, MediumIcon } from "./icons";

export default function Contact() {
  return (
    <div>
      <p className="max-w-[60ch] text-lg leading-relaxed text-text-secondary">
        Open to data science and AI/ML roles, collaborations, and conversations about applied ML systems.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <CopyEmail email={person.email} />
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
        <a href={person.links.espncricinfo} target="_blank" rel="noreferrer" className="transition-colors duration-150 hover:text-text focus-visible:text-text">
          ESPNcricinfo
        </a>
      </div>
    </div>
  );
}
