'use client'

import { useState, useEffect } from 'react'

export default function ReadingProgress() {
  const [width, setWidth] = useState(0)


  const updateProgress = () => {
    const scrollPx = document.documentElement.scrollTop
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolledPercentage = (scrollPx / winHeightPx) * 100
    setWidth(scrolledPercentage)
  }

  useEffect(() => {
    window.addEventListener('scroll', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        style={{ width: `${width}%` }}
        className="h-full bg-primary transition-all duration-300 ease-out"
      ></div>
    </div>
  )
}

