import React from "react";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function About() {
  const carouselItems = [
    {
      src: "/screenshots/mobile/mobile-1.jpg",
      alt: "About Dimmer",
    },
    {
      src: "/screenshots/mobile/mobile-2.png",
      alt: "About Dimmer",
    },
    {
      src: "/screenshots/mobile/mobile-3.jpg",
      alt: "About Dimmer",
    },
    {
      src: "/screenshots/mobile/mobile-4.jpg",
      alt: "About Dimmer",
    },
    {
      src: "/screenshots/mobile/mobile-5.jpg",
      alt: "About Dimmer",
    },
    {
      src: "/screenshots/mobile/mobile-6.png",
      alt: "About Dimmer",
    },
    {
      src: "/screenshots/mobile/mobile-7.png",
      alt: "About Dimmer",
    },
    {
      src: "/screenshots/mobile/mobile-8.png",
      alt: "About Dimmer",
    },
    {
      src: "/screenshots/mobile/mobile-9.png",
      alt: "About Dimmer",
    },
  ];
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row gap-x-6"
    >
      <div className="w-full md:w-[50%] flex flex-col gap-4 justify-center">
        <h1 className="scroll-m-20  text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
          What is Dimmer?
        </h1>
        <p>
          Dimmer is a revolutionary platform that allows users to manage and
          enhance their local music libraries with ease.
        </p>
        <Button
          size="lg"
          asChild={true}
          className="hidden md:flex text-white px-5 py-6 w-1/2 text-lg font-bold rounded-lg  hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-lg "
        >
          <a
            href="https://github.com/YBTopaz8/Dimmer-MAUI/releases"
            target="_blank"
          >
            <Download className="w-6 h-6 mr-3" />
            <span>Download App</span>
          </a>
        </Button>
      </div>
      <div className="w-full md:w-[50%] p-8 md:p-0">
        <Carousel
          className="w-full max-w-xs"
          opts={{ loop: true, duration: 30 }}
        >
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex aspect-square items-center justify-center p-6">
                  <img className="w-auto h-130" src={item.src} alt={item.alt} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hover:cursor-pointer" />
          <CarouselNext className="hover:cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
}

export default About;
