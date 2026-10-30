import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain HTML files in out/ so the site can be hosted for free anywhere.
  output: "export",
  // Pages become folders (story/index.html), which every static host understands.
  trailingSlash: true,
  // On GitHub Pages without a custom domain, uncomment and use your repo name:
  // basePath: "/repo-name",
};

export default nextConfig;
