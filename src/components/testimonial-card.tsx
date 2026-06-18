import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  message: string;
}

export function TestimonialCard({ name, role, message }: TestimonialCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[28px] border border-[#efe4de] bg-white p-6 shadow-[0_18px_40px_rgba(122,86,69,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e4cfc6] hover:shadow-[0_28px_64px_rgba(122,86,69,0.16)]">
      <Quote className="absolute -right-2 -top-2 h-20 w-20 text-[#f6e6df] transition-transform duration-500 group-hover:scale-110" />
      <div className="relative">
        <div className="mb-4 flex items-center gap-1 text-[#e0a04f]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="text-sm leading-7 text-[#6f5b54]">“{message}”</p>
        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#f8e6df] to-[#f0cfc2] font-display text-xl text-[#7b4d41] shadow-[0_8px_18px_rgba(157,111,120,0.18)] ring-1 ring-white/60">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-[#8b5a62]">{name}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#b88a7b]">{role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
