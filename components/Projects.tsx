import { featuredProjects, compactProjects, type FeaturedProject } from "@/content/cv";

function FeaturedCard({ project }: { project: FeaturedProject }) {
  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noreferrer"
      className={`group flex flex-col justify-between rounded-lg border border-line bg-surface-1 p-6 transition-colors duration-150 hover:border-line-strong focus-visible:border-line-strong ${
        project.size === "full" ? "md:col-span-2" : ""
      }`}
    >
      <div>
        <h3 className="text-lg font-medium text-text">{project.title}</h3>
        <p className="mt-3 max-w-[65ch] text-[15px] leading-relaxed text-text-secondary">{project.summary}</p>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-text-muted">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <span className="mono-label text-text-muted transition-colors duration-150 group-hover:text-accent">
          View repo →
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <FeaturedCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-12">
        <p className="mono-label mb-4">More</p>
        <ul className="flex flex-col divide-y divide-line border-t border-line">
          {compactProjects.map((project) =>
            project.repo ? (
              <li key={project.title}>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 py-4 text-text-secondary transition-colors duration-150 hover:text-text focus-visible:text-text"
                >
                  <span>{project.title}</span>
                  <span className="mono-label shrink-0">↗</span>
                </a>
              </li>
            ) : (
              <li key={project.title} className="py-4 text-text-secondary">
                {project.title}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
