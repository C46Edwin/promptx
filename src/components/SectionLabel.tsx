export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-tech text-[0.7rem] uppercase tracking-[0.35em] text-crimson-bright sm:text-xs">
        {children}
      </span>
      <span className="draw-line max-w-[8rem] flex-1" aria-hidden="true" />
    </div>
  );
}
