"use client"

import React, { useEffect, useState } from "react"
import { FlickeringGrid } from "@/components/ui/flickering-grid"

export const ThemeAwareFlickeringGrid = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <FlickeringGrid
      className="fixed inset-0 z-0"
      squareSize={2}
      gridGap={10}
      color={isDark ? "#ffffff" : "#000000"}
      maxOpacity={isDark ? 0.08 : 0.2}
      flickerChance={0.4}
    />
  )
}