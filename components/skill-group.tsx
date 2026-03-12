export function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-slate-500">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
