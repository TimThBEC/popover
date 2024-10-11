// Radix page (page.tsx)

"use client";

// Component imports
import Menu from "@components/menu";

// GSAP imports
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Radix imports
import * as Popover from "@radix-ui/react-popover";

// React imports
import { useRef } from "react";

// Shadcn imports
import { Button } from "@/components/ui/button";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Radix() {
  // GSAP

  const gsapScope = useRef(null); // Ref for GSAP scope
  const smoother = useRef<ScrollSmoother | null>(null); // Ref for ScrollSmoother instance

  useGSAP(
    () => {
      // SmoothScroller (create first)

      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
      });
    },
    { scope: gsapScope },
  );

  return (
    <div ref={gsapScope} id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <Menu />
          <section className="flex min-h-[200vh] w-full flex-col items-center justify-between bg-gray-950 p-32">
            <div className=" text-white text-2xl text-center">
              <p>Radix Popover With ScrollSmoother</p>
              <p className="mt-2 text-base text-gray-400">
                &#45;&#45; Unexpected Behavior &#45;&#45;
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Scroll to the bottom of this section to click the popover
                trigger
              </p>
            </div>
            <p className="text-white text-2xl">
              This is the middle of the section
            </p>
            <Popover.Root>
              <Popover.Trigger asChild>
                <Button variant="outline">Open popover</Button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="w-80 flex justify-center bg-indigo-900 text-center text-white border-indigo-500">
                  Opening this popover made the section scroll up, didn't it?
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>{" "}
          </section>
        </main>
      </div>
    </div>
  );
}
