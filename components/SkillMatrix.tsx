import { skillMatrix } from "@/content/cv";

export default function SkillMatrix() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse font-mono text-sm">
        <caption className="sr-only">Technical skill domains and associated tools</caption>
        <thead>
          <tr className="border-b border-line-strong text-left">
            <th scope="col" className="w-1/4 py-3 pr-6 font-medium uppercase tracking-[0.08em] text-text-muted">
              Domain
            </th>
            <th scope="col" className="py-3 font-medium uppercase tracking-[0.08em] text-text-muted">
              Tools &amp; methods
            </th>
          </tr>
        </thead>
        <tbody>
          {skillMatrix.map((row) => (
            <tr key={row.domain} className="border-b border-line align-top">
              <th scope="row" className="py-4 pr-6 text-left font-medium text-text">
                {row.domain}
              </th>
              <td className="py-4 leading-relaxed text-text-secondary">{row.tools}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
