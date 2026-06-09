interface TestimonialCardProps {
  name: string;
  role: string;
  message: string;
}

export function TestimonialCard({ name, role, message }: TestimonialCardProps) {
  return (
    <article className="h-full rounded-[28px] border border-[#efe4de] bg-white p-6 shadow-[0_18px_40px_rgba(122,86,69,0.08)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f8e6df] font-display text-xl text-[#7b4d41]">
        {name.charAt(0)}
      </div>
      <p className="text-sm leading-7 text-[#6f5b54]">“{message}”</p>
      <div className="mt-5">
        <p className="font-semibold text-[#221816]">{name}</p>
        <p className="text-xs uppercase tracking-[0.2em] text-[#b88a7b]">{role}</p>
      </div>
    </article>
  );
}
