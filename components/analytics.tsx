"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This would be where you'd add your analytics tracking code
    // For example, with Google Analytics:
    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`
    console.log(`Page view: ${url}`)

    // In a real implementation, you would call your analytics service here
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: url })
  }, [pathname, searchParams])

  return null
}
