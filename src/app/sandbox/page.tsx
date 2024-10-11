// SANDBOX PAGE (page.tsx)

"use client";

// Component imports
import PlaceholderSection from "@components/section-placeholder";
import Circle from "@components/temp-circle";

// GSAP imports
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// React imports
import { useRef } from "react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Sandbox2() {
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

      // Circle Animation

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#circle1",
          start: "top 45%",
          end: "top 80px",
          scrub: true,
          markers: false,
          once: false,
        },
      });

      t1.to("#circle1", { rotation: 360, ease: "none" });

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-section",
          start: "10% top",
          end: "20% top",
          scrub: true,
          markers: true,
          once: false,
        },
      });

      // GSAP timeline to change header color to white on scroll
      t2.to("header", {
        backgroundColor: "white",
        color: "black",
      });
    },
    { scope: gsapScope },
  );

  return (
    <main>
      {/* Header */}
      <div ref={gsapScope} id="smooth-wrapper">
        {/* Fixed elements go here */}
        <header className="fixed left-0 top-0 flex h-20 w-full items-center justify-center text-white">
          <h1 className="text-2xl">Sandbox</h1>
        </header>
        <div id="smooth-content">
          <section
            id="hero-section"
            className="flex min-h-screen w-full flex-col items-center justify-center"
          >
            <Circle id="circle1" name="Circle 1" />
          </section>
          <PlaceholderSection />
        </div>
      </div>
    </main>
  );
}
