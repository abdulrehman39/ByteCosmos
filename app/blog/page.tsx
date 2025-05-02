"use client";

import { getAllPosts } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, ArrowRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function BlogPage() {
  const allPosts = getAllPosts();
  const [posts, setPosts] = useState(allPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Get unique categories
  const categories = Array.from(new Set(allPosts.map((post) => post.category)));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let filtered = allPosts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    setPosts(filtered);
  }, [searchTerm, selectedCategory, allPosts]);

  if (!mounted) {
    return (
      <div className="pt-16">
        <div className="h-40 bg-secondary/30"></div>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-[200px] rounded-xl bg-muted animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-secondary/30 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              className="font-heading mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Blog
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover thought-provoking articles on technology, lifestyle,
              productivity, and more.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-full">
                    <Filter className="h-4 w-4 mr-2" />
                    {selectedCategory || "All Categories"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => setSelectedCategory(null)}
                    className={
                      !selectedCategory
                        ? "bg-accent text-accent-foreground"
                        : ""
                    }
                  >
                    All Categories
                  </DropdownMenuItem>
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={
                        selectedCategory === category
                          ? "bg-accent text-accent-foreground"
                          : ""
                      }
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No posts found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                >
                  Reset filters
                </Button>
              </div>
            ) : (
              <div className="space-y-12">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden border-none shadow-lg card-hover bg-background/50 backdrop-blur-sm">
                      <div className="md:flex">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="block md:w-2/5"
                        >
                          <div className="relative h-56 md:h-full w-full">
                            <Image
                              src={post.coverImage || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          </div>
                        </Link>
                        <div className="md:w-3/5">
                          <CardContent className="pt-6">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <Badge variant="default">{post.category}</Badge>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <CalendarIcon className="mr-1 h-3 w-3" />
                                {post.date}
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="mr-1 h-3 w-3" />
                                {post.readingTime}
                              </div>
                            </div>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="block group"
                            >
                              <h2 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                                {post.title}
                              </h2>
                            </Link>
                            <p className="text-muted-foreground mb-4">
                              {post.excerpt}
                            </p>
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
                              <span className="text-sm font-medium">
                                {post.author.name}
                              </span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="group"
                              asChild
                            >
                              <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center"
                              >
                                Read more
                                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
