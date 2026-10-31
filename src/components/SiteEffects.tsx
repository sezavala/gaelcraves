"use client";
// Browser-only behavior: lazy videos, the hero playlist, hover clips and scroll steps.
// The page HTML is already built from site.json at build time; this only adds motion.
// It runs again after each page change, and cleans up after itself when you leave a page.
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const MOBILE_BREAKPOINT = 700; // px; below this, the hero uses the vertical "-mobile" cuts

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const cleanups: (() => void)[] = [];
    const on = (el: EventTarget, type: string, fn: EventListener) => {
      el.addEventListener(type, fn);
      cleanups.push(() => el.removeEventListener(type, fn));
    };
    const markLoaded = (el: Element) => el.closest(".clip")?.classList.add("is-loaded");

    // ===== Lazy video loading =====
    // The file is only requested when needed, so the page stays fast on phone data.
    const loadVideo = (video: HTMLVideoElement) => {
      if (video.dataset.loaded || !video.dataset.src) return;
      video.dataset.loaded = "1";
      video.src = video.dataset.src;
      // Hide the placeholder label once real footage is ready. If the file is missing,
      // the plain placeholder stays visible.
      on(video, "loadeddata", () => markLoaded(video));
    };
    const play = (video: HTMLVideoElement) => {
      if (reduceMotion) return; // poster image only
      video.play().catch(() => {}); // autoplay can be refused; the poster still shows
    };

    // Videos with data-play="auto" play while on screen and pause when scrolled away.
    const onScreen = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          const video = target as HTMLVideoElement;
          if (isIntersecting) {
            loadVideo(video);
            play(video);
          } else {
            video.pause();
          }
        }
      },
      { rootMargin: "200px 0px" }
    );
    document.querySelectorAll<HTMLVideoElement>('video[data-play="auto"]').forEach((v) => onScreen.observe(v));
    cleanups.push(() => onScreen.disconnect());

    // ===== Photos: hide the label once loaded, keep the placeholder if missing =====
    document.querySelectorAll<HTMLImageElement>("img[data-clip-img]").forEach((img) => {
      if (img.complete && img.naturalWidth) markLoaded(img);
      else if (img.complete) img.remove(); // already failed before this ran
      on(img, "load", () => markLoaded(img));
      on(img, "error", () => img.remove());
    });

    // ===== Hero playlist: person, food, person, food =====
    // Plays each clip once, then the next. Missing files are skipped, so the hero
    // works with whatever has been shot so far.
    const hero = document.querySelector<HTMLVideoElement>("video[data-hero-playlist]");
    if (hero) {
      const names: string[] = JSON.parse(hero.dataset.heroPlaylist || "[]");
      const fileFor = (name: string) => `${name}${isMobile ? "-mobile" : ""}.mp4`;
      let i = 0;
      let misses = 0;
      const next = () => {
        i = (i + 1) % names.length;
        hero.src = fileFor(names[i]);
        play(hero);
      };
      on(hero, "ended", () => {
        misses = 0;
        next();
      });
      on(hero, "error", () => {
        // Phones fall back to the desktop file if there is no "-mobile" cut.
        if (isMobile && hero.src.endsWith("-mobile.mp4")) {
          hero.src = hero.src.replace("-mobile.mp4", ".mp4");
          play(hero);
        } else if (++misses < names.length) {
          next();
        }
      });
      on(hero, "loadeddata", () => markLoaded(hero));
      if (names.length) {
        hero.src = fileFor(names[0]);
        play(hero);
      }
    }

    // ===== Lineup: clip plays on hover (desktop) or tap (phones) =====
    document.querySelectorAll<HTMLElement>("[data-hover-clip]").forEach((fig) => {
      const video = fig.querySelector("video");
      if (!video) return;
      const start = () => {
        loadVideo(video);
        play(video);
        fig.classList.add("is-playing");
      };
      const stop = () => {
        video.pause();
        fig.classList.remove("is-playing");
      };
      on(fig, "mouseenter", start);
      on(fig, "mouseleave", stop);
      on(fig, "click", () => (fig.classList.contains("is-playing") ? stop() : start()));
    });

    // ===== How it's made: swap the sticky clip as each step reaches the middle of the screen =====
    const steps = document.querySelectorAll<HTMLElement>("#how li[data-step]");
    const stageClips = document.querySelectorAll<HTMLElement>("#how figure[data-step]");
    if (steps.length) {
      const setStep = (n: string) => {
        steps.forEach((li) => li.classList.toggle("is-active", li.dataset.step === n));
        stageClips.forEach((fig) => {
          const active = fig.dataset.step === n;
          fig.classList.toggle("is-active", active);
          const video = fig.querySelector("video");
          if (!video) return;
          if (active) {
            loadVideo(video);
            video.currentTime = 0;
            play(video);
          } else {
            video.pause();
          }
        });
      };
      const middle = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setStep((e.target as HTMLElement).dataset.step!)),
        { rootMargin: "-45% 0px -45% 0px" } // a thin band across the middle of the screen
      );
      steps.forEach((li) => middle.observe(li));
      cleanups.push(() => middle.disconnect());
      setStep("1");
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
