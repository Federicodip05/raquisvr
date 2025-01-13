'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, Info } from 'lucide-react'

interface ImageInfo {
  src: string
  title: string
  description: string
}

interface ImageModalProps {
  images: ImageInfo[]
  initialIndex: number
  onClose: () => void
}

export function ImageModal({ images, initialIndex, onClose }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [showInfo, setShowInfo] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const [imageWidth, setImageWidth] = useState(0)

  const navigateImages = useCallback((direction: 'prev' | 'next') => {
    setShowInfo(false)
    setCurrentIndex((prev) => {
      if (direction === 'prev') {
        return prev > 0 ? prev - 1 : images.length - 1
      } else {
        return prev < images.length - 1 ? prev + 1 : 0
      }
    })
  }, [images.length])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') navigateImages('prev')
      if (event.key === 'ArrowRight') navigateImages('next')
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, navigateImages])

  useEffect(() => {
    const updateImageWidth = () => {
      if (imageRef.current) {
        setImageWidth(imageRef.current.width)
      }
    }

    updateImageWidth()
    window.addEventListener('resize', updateImageWidth)
    return () => window.removeEventListener('resize', updateImageWidth)
  }, [currentIndex])


  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={onClose}>
      <div className="relative max-w-4xl w-full h-full" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X size={24} />
        </button>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            ref={imageRef}
            src={currentImage.src}
            alt={currentImage.title}
            layout="fill"
            objectFit="contain"
            onLoad={() => {
              if (imageRef.current) {
                setImageWidth(imageRef.current.width)
              }
            }}
          />
          {showInfo && (
            <div 
              className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4"
              style={{ width: `${imageWidth}px`, maxWidth: '100%' }}
            >
              <button
                className="absolute top-2 left-2 text-white hover:text-gray-300"
                onClick={toggleInfo}
                aria-label="Cerrar información"
              >
                <X size={20} />
              </button>
              <h3 className="text-xl font-bold mb-2 mt-6">{currentImage.title}</h3>
              <p>{currentImage.description}</p>
            </div>
          )}
        </div>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
          onClick={() => navigateImages('prev')}
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={36} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
          onClick={() => navigateImages('next')}
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={36} />
        </button>
        {!showInfo && (
          <button
            className="absolute bottom-4 left-4 text-white hover:text-gray-300 bg-black bg-opacity-50 p-2 rounded-full"
            onClick={toggleInfo}
            aria-label="Mostrar información"
          >
            <Info size={24} />
          </button>
        )}
      </div>
    </div>
  )
}

