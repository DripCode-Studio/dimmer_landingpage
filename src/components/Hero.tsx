import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, Music, Headphones } from "lucide-react";
import gsap from "gsap";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const floatingIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!waveRef.current || !floatingIconsRef.current) return;

    // Animated background waves
    gsap.to(waveRef.current.children, {
      duration: 6,
      rotation: 360,
      repeat: -1,
      ease: "none",
      stagger: 0.5,
    });

    // Floating icons animation
    gsap.to(floatingIconsRef.current.children, {
      duration: 8,
      y: -100,
      rotation: 360,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 1,
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#483d8b] via-[#483d8b]/60 to-[#483d8b]/80"></div>
        <div ref={waveRef} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </div>
      </div>
      {/* Floating icons */}
      <div
        ref={floatingIconsRef}
        className="absolute inset-0 pointer-events-none"
      >
        <Music className="absolute top-1/4 left-1/6 w-6 h-6 text-purple-400/20" />
        <Headphones className="absolute top-1/3 right-1/5 w-8 h-8 text-pink-400/20" />
        <Music className="absolute bottom-1/3 left-1/4 w-5 h-5 text-blue-400/20" />
        <Headphones className="absolute bottom-1/4 right-1/3 w-7 h-7 text-cyan-400/20" />
      </div>
      {/* Hero Content */}
      <div className="relative z-90 text-center max-w-6xl mx-auto px-6">
        <p className="hero-subtitle text-3xl md:text-6xl text-gray-200 font-semibold mb-6  mx-auto leading-relaxed ">
          Dimmer: Your Music, <br /> Your Stats, Your Way
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            asChild={true}
            className=" text-white px-10 py-6  text-xl font-bold rounded-lg  hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-lg min-w-[280px]"
          >
            <a
              href="https://github.com/YBTopaz8/Dimmer-MAUI/releases"
              target="_blank"
            >
              <Download className="w-6 h-6 mr-3" />
              <span>Download App</span>
            </a>
          </Button>

          {/* <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white hover:text-black px-10 py-6 rounded-full text-xl font-bold backdrop-blur-sm min-w-[280px] hover:border-white transition-all duration-300"
          >
            <Download className="w-6 h-6 mr-3" />
            Download for Windows
          </Button> */}
        </div>
        {/* <div className="relative flex justify-center items-center w-full">
          <div className="  p-4 md:p-8 flex flex-col items-center w-full max-w-md mx-auto">
            <img
              src="/hero-image.jpeg"
              alt="App preview on all devices"
              className="w-full h-auto  object-cover"
            />
          </div>
        </div> */}
      </div>
      <div className="absolute -bottom-20 md:-bottom-30 ">
        <img src="/hero-image.jpeg" alt="App preview on all devices" />
      </div>
    </section>
  );
};

export default Hero;
