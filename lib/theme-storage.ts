"use client"

const THEME_KEY = "inkwell-theme-preference"

export function saveThemePreference(theme: string): void {
  try {
    if (typeof window !== "undefined") {
      // Check if we're actually changing the value to avoid unnecessary updates
      const currentValue = localStorage.getItem(THEME_KEY)
      if (currentValue !== theme) {
        localStorage.setItem(THEME_KEY, theme)
      }
    }
  } catch (error) {
    console.error("Failed to save theme preference:", error)
  }
}

export function getThemePreference(): string | null {
  try {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY)
    }
    return null
  } catch (error) {
    console.error("Failed to get theme preference:", error)
    return null
  }
}
