"use client"

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import Globe only when needed
const Globe = dynamic(() => import("@/components/ui/globe").then(mod => ({ default: mod.Globe })), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-muted-foreground opacity-50">Loading globe...</div>
});

const markers = [
  { location: [22.2707, 113.5767] as [number, number], size: 0.3 }, // Zhuhai - main
  { location: [22.3193, 114.1694] as [number, number], size: 0.06 }, // Hong Kong
  { location: [22.1987, 113.5439] as [number, number], size: 0.05 }, // Macau
  { location: [23.1291, 113.2644] as [number, number], size: 0.05 }, // Guangzhou
  { location: [22.5431, 114.0579] as [number, number], size: 0.05 }, // Shenzhen
  { location: [31.2304, 121.4737] as [number, number], size: 0.04 }, // Shanghai
  { location: [48.5734, 7.7521] as [number, number], size: 0.04 }, // Strasbourg
  { location: [55.6761, 12.5683] as [number, number], size: 0.04 }, // Copenhagen
  { location: [48.8566, 2.3522] as [number, number], size: 0.04 }, // Paris
  { location: [43.6047, 1.4442] as [number, number], size: 0.04 }, // Toulouse
];

export function GlobeSection() {
  const [shouldLoadGlobe, setShouldLoadGlobe] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show Globe on desktop (768px+)
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Start loading Globe when section is 200px away from viewport
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight + 200) {
          setShouldLoadGlobe(true);
          observer.disconnect(); // Stop observing once we've triggered load
        }
      },
      { rootMargin: '200px' } // Load 200px before it comes into view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkDesktop);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card min-h-[325px] md:min-h-[500px] flex items-center justify-center">
          <div className="absolute top-0 left-0 md:top-7 md:left-7 z-20 max-w-sm">
            <div className="backdrop-blur-md bg-background/80 p-6 rounded-xl border border-border/50">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                On-the-ground in the GBA
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Operating through a <span className="text-foreground font-semibold">Mainland-based WFOE</span>. I provide Western-grade Cloud Architecture with deep local expertise in the Zhuhai-Hong Kong-Macau corridor.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-lg font-bold text-primary italic">Hybrid</div>
                  <div className="text-[14px] text-muted-foreground uppercase">On-site or Remote Ready</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary italic">Direct</div>
                  <div className="text-[14px] text-muted-foreground uppercase">Local B2B Invoicing</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent z-0" />
          
          {/* Only load Globe on desktop - completely skip on mobile */}
          {shouldLoadGlobe && isDesktop && (
            <Globe 
              className="opacity-80"
              markers={markers}
            />
          )}
        </div>
      </div>
    </section>
  );
}
