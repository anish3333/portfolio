"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Projects } from "@/constants/projects";
import Link from "next/link";

export function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full relative bg-zinc-800 rounded-2xl p-6 h-full">
      <div className="flex items-center justify-between mb-4 bg-zinc-800 rounded-lg">
        <span className="text-2xl font-bold text-zinc-100">
          Featured Projects
        </span>
        <Link href={`/projects/${Projects[currentIndex].id}`} passHref>
          <Button className="px-4 py-2 text-sm font-medium text-zinc-100 bg-purple-600 rounded-lg hover:bg-purple-500 transition-colors">
            Read More
          </Button>
        </Link>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {Projects.map((project, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <ProjectCard
                title={project.id.split("-").join(" ")}
                image={project.pagesInfoArr[0].imgArr[0]}
                description={project.shortDescription}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        
        className="absolute left-[1px] top-1/2 -translate-y-1/2  text-zinc-100 z-10 "
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-5 w-5" /> 
      </button>
      <button
        // size="icon"
        className="absolute right-[1px] top-1/2 -translate-y-1/2  text-zinc-100  z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

