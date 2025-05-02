"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "./ui/input"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    handleResize()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "md:bg-transparent bg-background border-b",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-heading font-bold flex items-center gap-2">
            <motion.div
              className="w-8 h-8 rounded-full bg-accent"
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
            <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              Prism
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover-underline-animation",
                isActive("/") ? "text-foreground" : "text-muted-foreground",
              )}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={cn(
                "text-sm font-medium transition-colors hover-underline-animation",
                isActive("/blog") ? "text-foreground" : "text-muted-foreground",
              )}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover-underline-animation",
                isActive("/contact") ? "text-foreground" : "text-muted-foreground",
              )}
            >
              Contact
            </Link>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <ModeToggle />
              <Button variant="accent" size="sm" className="rounded-full" asChild>
                <Link href="/contact">Subscribe</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="rounded-full">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && !isMobile && (
            <motion.div
              className="py-4 border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search articles..." className="pl-10 rounded-full" autoFocus />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={cn(
                    "text-sm font-medium transition-colors px-2 py-1 rounded-md",
                    isActive("/") ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/10",
                  )}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className={cn(
                    "text-sm font-medium transition-colors px-2 py-1 rounded-md",
                    isActive("/blog") ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/10",
                  )}
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "text-sm font-medium transition-colors px-2 py-1 rounded-md",
                    isActive("/contact")
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/10",
                  )}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <Button variant="accent" size="sm" className="rounded-full mt-2" asChild>
                  <Link href="/contact">Subscribe</Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
