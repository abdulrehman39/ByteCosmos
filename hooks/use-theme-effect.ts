"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { saveThemePreference, getThemePreference } from "@/lib/theme-storage"

export function useThemeEffect() {
  const { setTheme, theme, systemTheme } = useTheme()

  // Load saved theme on mount - only once
  useEffect(() => {
    const savedTheme = getThemePreference()
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [setTheme]) // Only run on mount and if setTheme changes

  // Save theme changes, but only when the theme is actually set (not during initialization)
  useEffect(() => {
    // Only save if theme is explicitly set (not null or undefined)
    if (theme && theme !== "system") {
      saveThemePreference(theme)
    } else if (theme === "system" && systemTheme) {
      // For system theme, we store the actual resolved theme
      saveThemePreference(systemTheme)
    }
  }, [theme, systemTheme]) // Depend on theme and systemTheme

  return { currentTheme: theme }
}
