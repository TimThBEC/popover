// No Smoother page (page.tsx)

"use client";

// Component imports
import Menu from "@components/menu";

// React imports
import { useRef } from "react";

// Shadcn imports
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function NoSmoother() {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <Menu />
          <section className="flex min-h-[200vh] w-full flex-col items-center justify-between bg-gray-950 p-32">
            <div className=" text-white text-2xl text-center">
              <p>Shadcn Popover With No ScrollSmoother</p>
              <p className="mt-2 text-base text-gray-400">
                &#45;&#45; Expected Behavior &#45;&#45;
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Scroll to the bottom of this section to click the popover
                trigger
              </p>
            </div>
            <p className="text-white text-2xl">
              This is the middle of the section
            </p>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 flex justify-center bg-indigo-900 text-center text-white border-indigo-500">
                Opening this popover didn't make the section scroll up, did it?
              </PopoverContent>
            </Popover>{" "}
          </section>
        </main>
      </div>
    </div>
  );
}
