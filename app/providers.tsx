"use client"

import { ThemeProvider } from "next-themes"
import type React from "react"
import { Analytics } from "@/components/analytics"
import { Cursor } from "@/components/cursor"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="prism-theme">
      {children}
      <Analytics />
      <Cursor />
    </ThemeProvider>
  )
}
