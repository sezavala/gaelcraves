// All content comes from src/data/site.json. Import it from here so every component
// gets the same typed object.
import data from "@/data/site.json";

export const site = data;
export type Site = typeof data;
export type MenuItem = Site["menu"]["items"][number];
export type Story = Site["story"];

// Media files live in public/media and are served from /media/...
// If you set basePath in next.config.ts, set NEXT_PUBLIC_BASE_PATH to the same value.
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (path?: string) => (path ? `${base}/${path.replace(/^\//, "")}` : undefined);
