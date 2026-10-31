// Every button on the site.
// "hot" is the orange order button, "dark" is the black one for orange backgrounds,
// and "link" is plain underlined text for anything that isn't the main action.
// order sends it to Square (the item's own page if orderItem is set, otherwise the full menu).
import { site } from "@/lib/site";

type Props = {
  href?: string;
  variant?: "hot" | "dark" | "link";
  size?: "md" | "lg";
  order?: boolean;
  orderItem?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

const styles = {
  hot: "bg-orange text-text hover:bg-flame hover:text-ink",
  dark: "bg-ink text-cream hover:bg-grill-2",
  link: "",
};
const sizes = { md: "px-5 py-3 text-base", lg: "px-7 py-4 text-xl" };

export default function Button({ href = "#", variant = "hot", size = "md", order = false, orderItem = "", external = false, className = "", children }: Props) {
  const finalHref = order ? orderItem || site.business.squareOrderUrl : href;
  const newTab = order || external;
  const look =
    variant === "link"
      ? "font-semibold underline decoration-2 underline-offset-4 hover:text-flame"
      : `inline-block rounded-sm font-display uppercase leading-none no-underline transition-colors ${sizes[size]} ${styles[variant]}`;
  return (
    <a href={finalHref} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener" : undefined} className={`${look} ${className}`}>
      {children}
    </a>
  );
}
