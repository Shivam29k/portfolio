"use client";
import { useCallback, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { cn } from "../utils/utils";

interface CarouselProps {
  children: ReactNode;
  delay?: number;
  stopOnInteraction?: boolean;
  stopOnMouseEnter?: boolean;
  loop?: boolean;
  className?: string;
  autoPlay?: boolean;
}

export default function Carousel({ children, delay = 2000, stopOnInteraction = false, stopOnMouseEnter = true, loop = true, className, autoPlay = true }: CarouselProps) {
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: loop }, 
    autoPlay ? [
      Autoplay({
        delay: delay,
        stopOnInteraction: stopOnInteraction,
        stopOnMouseEnter: stopOnMouseEnter,
      }),
    ] : []
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={cn("mx-auto relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children}
        </div>
      </div>

      {/* Carousel Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-background-secondary text-foreground hover:bg-accent/10 transition-colors"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-background-secondary text-foreground hover:bg-accent/10 transition-colors"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <FiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}