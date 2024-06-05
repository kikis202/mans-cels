"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import "./carousel.css";

import home from "@/public/images/homepage/home.jpg";
import jurmala from "@/public/images/homepage/jurmala.jpg";
import traffic from "@/public/images/homepage/traffic.jpg";
import parking from "@/public/images/homepage/parking.jpg";
import university from "@/public/images/homepage/university.jpg";
import Link from "next/link";

const carouselItems = [
  {
    src: home,
    alt: "Mājas",
    href: "/posms/home",
  },
  {
    src: jurmala,
    alt: "Jūrmala",
    href: "/posms/jurmala",
  },
  {
    src: traffic,
    alt: "Satiksme",
    href: "/posms/traffic",
  },
  {
    src: parking,
    alt: "Stāvvieta",
    href: "/posms/parking",
  },
  {
    src: university,
    alt: "Universitāte",
    href: "/posms/university",
  },
];

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

const useDotButton = (
  emblaApi: CarouselApi | undefined,
  onButtonClick?: (emblaApi: CarouselApi) => void,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick],
  );

  const onInit = useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export default function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const plugins = useRef([Autoplay({ delay: 5000 }), ClassNames()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  return (
    <div className="image-carousel py-12">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          skipSnaps: true,
        }}
        plugins={plugins.current}
        className="embla my-20"
      >
        <CarouselContent className="embla__container">
          {carouselItems.map((image, index) => (
            <CarouselItem
              key={index}
              className="embla__slide"
              onClick={() => onDotButtonClick(index)}
            >
              <Link
                href={index === selectedIndex ? image.href : {}}
                className="relative"
              >
                <Image
                  className="h-full w-full border-8 border-muted-foreground"
                  alt={image.alt}
                  src={image.src}
                />
                <p className="absolute bottom-[10%] left-1/2 z-10 mx-auto -translate-x-1/2 transform select-none bg-stone-800 bg-opacity-50 p-2 px-8 text-2xl text-slate-100 md:px-12 md:text-4xl lg:px-16 lg:text-6xl xl:text-8xl">
                  {image.alt}
                </p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-8 flex justify-center">
        {scrollSnaps.map((_, index) => (
          <Button
            variant="outline"
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`dot-button ${
              index === selectedIndex ? "bg-muted-foreground" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
