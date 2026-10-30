// Home page: just the sections, in order. Each one lives in src/components.
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Lineup from "@/components/Lineup";
import Collage from "@/components/Collage";
import Swap from "@/components/Swap";
import HowItsMade from "@/components/HowItsMade";
import About from "@/components/About";
import Find from "@/components/Find";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Lineup />
      <Collage />
      <Swap />
      <HowItsMade />
      <About />
      <Find />
    </>
  );
}
