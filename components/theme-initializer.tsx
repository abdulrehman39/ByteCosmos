"use client"

import { useThemeEffect } from "@/hooks/use-theme-effect"

export function ThemeInitializer() {
  // This hook handles theme persistence
  // We don't need to do anything with the return value
  useThemeEffect()

  // This component doesn't render anything
  return null
}
