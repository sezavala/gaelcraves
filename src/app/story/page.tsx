import type { Metadata } from "next";
import Chapter from "@/components/Chapter";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our story | Gaelcraves",
  description:
    "How Christian Gael Morones Segovia turned his own fitness journey into Gaelcraves: high-protein, lower-calorie versions of the food everybody craves, in Soledad, CA.",
};

export default function StoryPage() {
  return (
    <Chapter story={site.story}>
      <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Button order size="lg">Order for pickup</Button>
        <Button href="/#menu" variant="link">See the menu</Button>
      </div>
    </Chapter>
  );
}
