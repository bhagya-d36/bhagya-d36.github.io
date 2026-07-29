import { education, certifications } from "@/content/cv";

export default function Education() {
  const lse = education[0];

  return (
    <div className="mt-12 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:gap-16">
      {lse && (
        <div className="md:w-1/3 md:shrink-0">
          <p className="mono-label mb-2">Education</p>
          <p className="text-sm text-text-secondary">
            <span className="text-text">{lse.school}</span> — {lse.program}
          </p>
          {lse.link && (
            <a
              href={lse.link.href}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block font-mono text-xs text-text-muted transition-colors duration-150 hover:text-accent focus-visible:text-accent"
            >
              {lse.link.label} ↗
            </a>
          )}
        </div>
      )}

      <div className="min-w-0">
        <p className="mono-label mb-2">Certifications</p>
        <p className="flex flex-wrap gap-x-1 gap-y-1 text-sm leading-relaxed">
          {certifications.map((cert, i) => (
            <span key={cert.name}>
              <a
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                title={cert.issuer}
                className="text-text-secondary transition-colors duration-150 hover:text-accent focus-visible:text-accent"
              >
                {cert.name}
              </a>
              {i < certifications.length - 1 && <span className="text-text-muted"> · </span>}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
