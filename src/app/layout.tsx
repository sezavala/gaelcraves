import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

// Default <head> info. Each page can override title and description.
export const metadata: Metadata = {
  // Change to the real address once the site is live (used for link previews).
  metadataBase: new URL("https://example.com"),
  title: "Gaelcraves",
  description:
    "High-protein, lower-calorie smash burgers, chicken sandwiches, loaded fries and nachos from the kitchen in the back of Cruz de Madera Taproom, 148 Main St, Soledad, CA.",
  icons: { icon: "/media/logo.png" },
  openGraph: { images: ["/media/og-image.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#110c0a",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bowlby+One&family=Archivo:wght@400;600;800&display=swap"
        />
      </head>
      <body>
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
