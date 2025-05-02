"use client";

import { getPostBySlug } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  CalendarIcon,
  Clock,
  ChevronLeft,
  Share2,
  Bookmark,
  Heart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const post = getPostBySlug(params.slug);

  if (!mounted) {
    return (
      <div className="pt-16">
        <div className="h-40 bg-secondary/30"></div>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="h-[400px] rounded-xl bg-muted animate-pulse mb-8" />
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-6 bg-muted animate-pulse rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-16">
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-accent z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <div className="bg-secondary/30 py-12 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" size="sm" asChild className="mb-6 group">
              <Link href="/blog" className="inline-flex items-center">
                <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to all posts
              </Link>
            </Button>

            <motion.h1
              className="font-heading mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {post.title}
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-medium">{post.author.name}</span>
              </div>

              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-1 h-4 w-4" />
                {post.date}
              </div>

              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {post.readingTime}
              </div>

              <Badge variant="default">{post.category}</Badge>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-16 mb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Social sharing sidebar */}
          <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full ${liked ? "text-red-500" : ""}`}
              onClick={() => setLiked(!liked)}
            >
              <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
              <span className="sr-only">Like</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full ${bookmarked ? "text-accent" : ""}`}
              onClick={() => setBookmarked(!bookmarked)}
            >
              <Bookmark
                className={`h-5 w-5 ${bookmarked ? "fill-current" : ""}`}
              />
              <span className="sr-only">Bookmark</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
          </div>

          <div className="prose prose-lg dark:prose-invert">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <motion.h1
                    key={index}
                    className="text-3xl font-bold mt-8 mb-4 font-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {paragraph.substring(2)}
                  </motion.h1>
                );
              } else if (paragraph.startsWith("## ")) {
                return (
                  <motion.h2
                    key={index}
                    className="text-2xl font-bold mt-6 mb-3 font-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {paragraph.substring(3)}
                  </motion.h2>
                );
              } else if (paragraph.startsWith("### ")) {
                return (
                  <motion.h3
                    key={index}
                    className="text-xl font-bold mt-5 mb-2 font-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {paragraph.substring(4)}
                  </motion.h3>
                );
              } else if (paragraph.startsWith("- ")) {
                return (
                  <motion.li
                    key={index}
                    className="ml-6 mb-1"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {paragraph.substring(2)}
                  </motion.li>
                );
              } else if (paragraph.trim() === "") {
                return <br key={index} />;
              } else {
                return (
                  <motion.p
                    key={index}
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {paragraph}
                  </motion.p>
                );
              }
            })}
          </div>

          {/* Mobile social actions */}
          <div className="flex justify-center gap-4 mt-8 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full ${liked ? "text-red-500" : ""}`}
              onClick={() => setLiked(!liked)}
            >
              <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
              <span className="sr-only">Like</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full ${bookmarked ? "text-accent" : ""}`}
              onClick={() => setBookmarked(!bookmarked)}
            >
              <Bookmark
                className={`h-5 w-5 ${bookmarked ? "fill-current" : ""}`}
              />
              <span className="sr-only">Bookmark</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
          </div>

          {/* Author Bio */}
          <motion.div
            className="mt-16 p-8 bg-secondary/30 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{post.author.name}</h3>
                <p className="text-muted-foreground">
                  Writer and content creator passionate about{" "}
                  {post.category.toLowerCase()} topics.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Share and Navigation */}
          <motion.div
            className="mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
              Share this article
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                asChild
              >
                <Link href="/blog">More articles</Link>
              </Button>
              <Button
                size="sm"
                variant="default"
                className="rounded-full"
                asChild
              >
                <Link href="/contact">Contact author</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
