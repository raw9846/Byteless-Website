import { useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface SlideshowProps {
  images: string[]
}

export function Slideshow({ images }: SlideshowProps) {
  const [current, setCurrent] = useState(0)

  const hasMultiple = images.length > 1
  const next = () => setCurrent((prev) => (prev + 1) % images.length)
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="flex flex-col items-center w-full">
      {/* Image Container */}
      <div className="relative w-full max-w-md aspect-square group">
        <Zoom>
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-contain rounded-xl shadow-lg cursor-zoom-in bg-white"
          />
        </Zoom>

        {/* Navigation Arrows */}
        {hasMultiple && (
          <>
            <button
              onClick={prev}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-amber-500 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-amber-600 shadow-lg z-10"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-amber-500 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-amber-600 shadow-lg z-10"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Dots below */}
      {hasMultiple && (
        <div className="flex gap-2 mt-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 w-3 rounded-full transition-all ${
                idx === current ? 'bg-amber-500 scale-125' : 'bg-amber-200'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
