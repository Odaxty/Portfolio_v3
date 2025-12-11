"use client";
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay' 
import Image from 'next/image'

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ])

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden bg-neutral-900" ref={emblaRef}>
      <div className="flex h-full"> 
        {images.map((src, index) => (
          <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
            <Image 
              src={src} 
              alt={`Slide ${index + 1}`} 
              fill 
              className="object-cover" 
              priority={index === 0} 
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>
    </div>
  )
}