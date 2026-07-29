import { experience } from "@/content/cv";

export default function Experience() {
  return (
    <div className="flex flex-col gap-12">
      {experience.map((entry) => (
        <div key={entry.org}>
          <h3 className="text-lg font-medium text-text">{entry.org}</h3>
          <div className="mt-4 flex flex-col gap-6 border-l border-line pl-6">
            {entry.roles.map((role) => (
              <div key={role.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-medium text-text-secondary">{role.title}</p>
                  <p className="mono-label tabular-nums">
                    {role.start} — {role.end}
                  </p>
                </div>
                {role.bullets.length > 0 && (
                  <ul className="mt-3 flex flex-col gap-2">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="max-w-[68ch] text-[15px] leading-relaxed text-text-secondary">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
