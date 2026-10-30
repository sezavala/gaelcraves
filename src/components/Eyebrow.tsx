export default function Eyebrow({ className = "text-flame", children }: { className?: string; children: React.ReactNode }) {
  return <p className={`font-mono text-[0.78rem] leading-snug font-semibold tracking-[0.14em] uppercase ${className}`}>{children}</p>;
}
