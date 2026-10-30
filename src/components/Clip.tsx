// One media slot: a looping video or a photo.
// Until the file exists in public/media, it shows a striped placeholder.
import { asset } from "@/lib/site";

// Set to true to show the shot ID labels (e.g. "L1 · The Smash...") on empty slots
// while you're matching footage to the shot list.
const SHOW_SHOT_LABELS = false;

type Props = {
  shot?: string; // shot ID from the shot list, e.g. "L1"
  label?: string; // what the shot is, shown only when SHOW_SHOT_LABELS is true
  video?: string; // e.g. "media/step-1.mp4"
  poster?: string;
  photo?: string; // e.g. "media/photo-e1.jpg"
  alt?: string;
  className?: string;
  // "auto" plays when scrolled into view. "manual" leaves playing to SiteEffects
  // (hover clips, how-it's-made steps).
  play?: "auto" | "manual";
  children?: React.ReactNode;
} & { [key: `data-${string}`]: string | undefined };

export default function Clip({
  shot,
  label,
  video,
  poster,
  photo,
  alt = "",
  className = "",
  play = "auto",
  children,
  ...rest
}: Props) {
  return (
    <figure
      className={`clip clip-stripes group relative m-0 max-w-full overflow-hidden rounded ${className}`}
      data-shot={shot}
      {...rest}
    >
      {photo && (
        <img
          src={asset(photo)}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 z-[1] size-full object-cover"
          data-clip-img=""
        />
      )}
      {video && (
        <video
          muted
          loop
          playsInline
          preload="none"
          poster={asset(poster)}
          data-src={asset(video)}
          data-play={play}
          className="absolute inset-0 z-[2] size-full object-cover"
        />
      )}
      {SHOW_SHOT_LABELS && (
        <figcaption className="absolute right-3 bottom-3 left-3 z-0 w-fit rounded bg-grill px-2.5 py-2 font-mono text-[0.8rem] leading-snug font-semibold text-flame group-[.is-loaded]:hidden">
          {shot} · {label}
        </figcaption>
      )}
      {children}
    </figure>
  );
}
