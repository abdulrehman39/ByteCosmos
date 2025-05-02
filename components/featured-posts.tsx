"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, ArrowRight } from "lucide-react"
import { getFeaturedPosts } from "@/lib/blog-data"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export default function FeaturedPosts() {
  const featuredPosts = getFeaturedPosts()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="h-[450px] rounded-xl bg-muted animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {featuredPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            className={cn("overflow-hidden border-none shadow-lg card-hover bg-background/50 backdrop-blur-sm h-full")}
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <Badge variant="accent" className="absolute top-4 left-4">
                  {post.category}
                </Badge>
              </div>
            </Link>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                <div className="flex items-center">
                  <CalendarIcon className="mr-1 h-3 w-3" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  {post.readingTime}
                </div>
              </div>
              <Link href={`/blog/${post.slug}`} className="block group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
              </Link>
              <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="border-t pt-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-medium">{post.author.name}</span>
              </div>
              <Button variant="ghost" size="sm" className="group" asChild>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center">
                  Read more
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
