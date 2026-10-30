# Gaelcraves website (Next.js + Tailwind)

The Gaelcraves site built with [Next.js](https://nextjs.org) (React) and [Tailwind CSS](https://tailwindcss.com).
It's set up as a static export: `npm run build` writes plain HTML files to `out/`, so hosting is free and Google can read the menu.

## Start

You need [Node.js](https://nodejs.org) 22 or newer.

```
cd ~/Desktop/gaelcraves-next
npm install        # first time only
npm run dev        # open http://localhost:3000, the page reloads as you save
```

`npm run build` writes the finished site to `out/`. `npm start` serves that folder so you can check it.

## Where things live

```
src/data/site.json          ALL the content: text, menu, prices, macros, swaps, hours, photos, links
src/app/layout.tsx          the <head>, header and footer shared by every page
src/app/page.tsx            home page: just a list of sections in order
src/app/story/page.tsx      Our Story page (URL: /story/)
src/app/globals.css         brand colors and fonts (the @theme block) and a few custom styles
src/components/             one React component per section (Hero, Lineup, Collage, Swap, HowItsMade, About, Find)
                            plus small pieces they share (Button, Clip, Eyebrow, SectionHead, MenuItem, Chapter)
src/components/SiteEffects.tsx  browser behavior: lazy videos, hero playlist, hover clips, scroll steps
src/lib/site.ts             loads site.json with types, plus asset() for media paths
public/media/               videos, photos and the logo, served at /media/...
docs/SHOT-PLAN.html         shot list and camera settings (open it in a browser)
```

Every component is a server component (rendered at build time) except `NavLinks` and `SiteEffects`, which start with `"use client"` because they need the browser.

## Changing content

Edit `src/data/site.json`. The dev server updates the page as soon as you save.

1. Paste the Square Online link into `business.squareOrderUrl`.
2. Fill in each menu item's `price` and `macros`, and paste its Square item page into `squareUrl` so "Order this" opens that item. Empty values show as "—".
3. Fill in `swap.rows`, `find.hours` and everything under `story` (TODO lines are placeholders).
4. To add a menu item, photo, step or chapter, copy one entry in its list and edit it.

JSON is strict: double quotes everywhere, commas between items, none after the last. Because `site.json` is imported with types, TypeScript will also tell you if a field name is misspelled.

## Changing the look with Tailwind

Tailwind styles are classes on the elements: `className="bg-orange px-5 font-display"` means orange background, padding, display font.
The brand colors are defined once in `src/app/globals.css`:

```css
@theme {
  --color-orange: #d8590d;   /* gives you bg-orange, text-orange, border-orange ... */
}
```

Change a value there and every class that uses it updates. `md:` in front of a class means "on screens 768px and wider", which is how the layout switches between phone and desktop.
Install the "Tailwind CSS IntelliSense" extension in VS Code for autocomplete and color previews.

## Media files

Put files in `public/media/` with these names. Until a file exists, its slot shows a striped placeholder with the shot ID from the shot list.

| Shot | File | Shape |
|---|---|---|
| H1–H4 | `hero-1-bite.mp4`, `hero-2-smash.mp4`, `hero-3-reaction.mp4`, `hero-4-burger.mp4` (+ `-mobile` vertical cuts, + a `.jpg` poster for H1) | 16:9 (mobile 9:16), 2–4 s each |
| L1–L4 | `lineup-smash.png`, `lineup-chicken.png`, `lineup-fries.png`, `lineup-nachos.png` | square, transparent background |
| M1–M4 | `menu-burger.mp4`, `menu-chicken.mp4`, `menu-fries.mp4`, `menu-nachos.mp4` | square, 4–6 s, plays on hover |
| E1–D3 | `photo-e1.jpg` … `photo-d3.jpg` | photos for the collage |
| W1–W2 | `swap-side-by-side.mp4`, `swap-scale.mp4` | square, 4–6 s |
| S1–S5 | `step-1.mp4` … `step-5.mp4` | square, 3–5 s |
| G1 | `gael-portrait.mp4` | 3:4, 5–8 s |
| F1 | `find-walkin.mp4` | 16:9, 8–12 s |
| J1–J3, G2 | `story-training.mp4`, `story-testing.mp4`, `story-regulars.mp4`, `interview.mp4` | 16:9 |
| P6–P8 | `story-before.jpg`, `story-after.jpg`, `story-early.jpg` | photos |
| — | `og-image.jpg` | 1200×630 link preview |

Every video should have a matching `.jpg` poster (a still frame). File paths for most media are set in `site.json`, so you can rename files there.

### Shrink clips before adding them

The camera shoots 60p. Clips below are exported at 30 fps; slow-motion shots use `setpts=2*PTS` to play at half speed. Web clips should be **under 3 MB each** (hero under 6 MB). With [ffmpeg](https://ffmpeg.org/) (`brew install ffmpeg`):

```
# 16:9 clip, no audio
ffmpeg -i C0001.MP4 -ss 00:00:02 -t 4 -vf "scale=1920:-2,fps=30" \
  -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -an -movflags +faststart public/media/hero-2-smash.mp4

# Vertical cut from a horizontal clip (center crop to 9:16)
ffmpeg -i C0001.MP4 -ss 00:00:02 -t 4 -vf "crop=ih*9/16:ih,scale=1080:1920,fps=30" \
  -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p -an -movflags +faststart public/media/hero-2-smash-mobile.mp4

# Square cut
ffmpeg -i C0001.MP4 -ss 00:00:02 -t 5 -vf "crop=ih:ih,scale=1080:1080,fps=30" \
  -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -an -movflags +faststart public/media/step-1.mp4

# Half-speed slow motion from a 60p clip (smash, cheese pull, sauce pour)
ffmpeg -i C0002.MP4 -ss 00:00:01 -t 3 -vf "setpts=2*PTS,scale=1920:-2,fps=30" \
  -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -an -movflags +faststart public/media/hero-2-smash.mp4

# Poster still
ffmpeg -i public/media/hero-2-smash.mp4 -ss 1 -frames:v 1 -q:v 3 public/media/hero-2-smash.jpg
```

## Ordering

The site has no cart. Every order button sends people to the Square Online site to add items and pay.
Prices in `site.json` are typed by hand, so when one changes in Square, change it here too.

Later project: pull prices automatically from Square's Catalog API. The API needs a secret key, so it can't run in the browser. With a static export, the way to do it is to fetch the catalog at build time (a server component can `await fetch(...)` with the key from `.env.local`, which is never committed) and rebuild when the menu changes.

## Free hosting

Push this folder to a GitHub repo first (`git init`, commit, push). `node_modules/`, `.next/` and `out/` are already in `.gitignore`.

- **Vercel** (made by the Next.js team): import the repo and it detects everything. Free for personal projects.
- **Netlify** or **Cloudflare Pages**: build command `npm run build`, output folder `out`.
- **GitHub Pages**: without a custom domain, set `basePath: "/repo-name"` in `next.config.ts` and `NEXT_PUBLIC_BASE_PATH=/repo-name` when building.

Set `metadataBase` in `src/app/layout.tsx` to the real address once you have it. A custom domain like `gaelcraves.com` is about $10–12 a year.

## Ideas to learn on later

- Add a sound toggle on the hero (a small client component with `useState`).
- Split `SiteEffects` into hooks like `useHeroPlaylist()` and `useLazyVideos()`.
- Run Lighthouse in Chrome DevTools and get the Performance score above 90.
# gaelcraves
