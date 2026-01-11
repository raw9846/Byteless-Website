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
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full group">
        <Zoom>
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-lg cursor-zoom-in"
          />
        </Zoom>

        {/* Navigation Arrows */}
        {hasMultiple && (
          <>
            <button
              onClick={prev}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-amber-500 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-amber-600 shadow-lg"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-amber-500 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-amber-600 shadow-lg"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Dots below the image */}
      {hasMultiple && (
        <div className="flex gap-2 mt-4">
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
