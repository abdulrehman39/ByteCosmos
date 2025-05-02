"use client";

import { ThemeProvider } from "next-themes";
import type React from "react";
import dynamic from "next/dynamic";
import { Cursor } from "@/components/cursor";

const Analytics = dynamic(
  () => import("@/components/analytics").then((mod) => mod.Analytics),
  {
    ssr: false,
  }
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="prism-theme"
    >
      {children}
      <Analytics />
      <Cursor />
    </ThemeProvider>
  );
}
