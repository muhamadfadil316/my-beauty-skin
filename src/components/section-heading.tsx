import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        {eyebrow ? (
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.34em] text-[#b57f73]">
            <span className="h-px w-6 bg-linear-to-r from-[#d6b7ab] to-transparent" />
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-3xl leading-tight text-gradient md:text-4xl">{title}</h2>
        {description ? <p className="text-sm leading-7 text-[#6d5b55] md:text-base">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
