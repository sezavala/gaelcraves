// Every button on the site. variant="hot" is the orange order button.
// order sends it to Square (the item's own page if orderItem is set, otherwise the full menu).
import { site } from "@/lib/site";

type Props = {
  href?: string;
  variant?: "hot" | "ghost" | "dark" | "small";
  size?: "md" | "lg";
  order?: boolean;
  orderItem?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

const styles = {
  hot: "bg-orange border-orange text-text shadow-[4px_4px_0_var(--color-flame)] hover:shadow-[6px_6px_0_var(--color-flame)]",
  ghost: "bg-transparent border-text text-text hover:bg-text hover:text-grill",
  dark: "bg-ink border-ink text-text shadow-[4px_4px_0_var(--color-flame)]",
  small: "bg-ink border-ink text-cream text-[0.8rem] px-3.5 py-2",
};
const sizes = { md: "px-5 py-3 text-[0.95rem]", lg: "px-6 py-4 text-lg" };

export default function Button({ href = "#", variant = "hot", size = "md", order = false, orderItem = "", external = false, className = "", children }: Props) {
  const finalHref = order ? orderItem || site.business.squareOrderUrl : href;
  const newTab = order || external;
  return (
    <a
      href={finalHref}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener" : undefined}
      className={[
        "inline-flex items-center justify-center rounded border-2 font-extrabold uppercase leading-none tracking-wide no-underline transition hover:-translate-y-0.5",
        variant !== "small" ? sizes[size] : "",
        styles[variant],
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}
