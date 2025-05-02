"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  BookOpen,
  Users,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import FeaturedPosts from "@/components/featured-posts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// 1. Custom hook to detect we’re on the client
function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export default function HomePage() {
  // replace isLoaded with client‑check
  const hasMounted = useHasMounted();
  const featuresRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // 2. Only add scroll listener after mount
  useEffect(() => {
    if (!hasMounted) return;
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMounted]);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl animate-blob animation-delay-400" />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              // 3. animate only after mount
              animate={{ opacity: hasMounted ? 1 : 0, y: hasMounted ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="px-3 py-1 text-sm" variant="default">
                Modern Content Platform
              </Badge>
              <h1 className="font-heading">
                Where ideas <br />
                <span className="text-gradient">come to life</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Discover thought-provoking articles from writers around the
                world. Join our community and share your own stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  variant="default"
                  className="rounded-full group"
                  asChild
                >
                  <Link href="/blog" className="inline-flex items-center">
                    Explore Articles
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                  asChild
                >
                  <Link href="/contact">Join Our Community</Link>
                </Button>
              </div>
              <motion.button
                onClick={scrollToFeatures}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: hasMounted ? 1 : 0 }}
                transition={{ delay: 1.5 }}
                whileHover={{ y: 5 }}
              >
                Scroll to learn more{" "}
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </motion.button>
            </motion.div>

            {/* 4. 3D image stack: only render after mount */}
            {hasMounted && (
              <motion.div
                className="relative h-[500px] lg:h-[600px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="absolute w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      zIndex: 3,
                      transform: `perspective(1000px) rotateY(${
                        scrollY * 0.01
                      }deg) rotateX(${scrollY * -0.005}deg)`,
                    }}
                  >
                    <Image
                      src="/placeholder.svg?height=1000&width=800"
                      alt="Featured article"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  <motion.div
                    className="absolute w-[70%] h-[70%] rounded-2xl overflow-hidden shadow-xl bg-accent/5"
                    style={{
                      zIndex: 2,
                      transform: `perspective(1000px) rotateY(${
                        scrollY * 0.02
                      }deg) rotateX(${
                        scrollY * -0.01
                      }deg) translateX(15%) translateY(-10%)`,
                    }}
                  >
                    <Image
                      src="/placeholder.svg?height=800&width=600"
                      alt="Article preview"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-lg bg-accent/10"
                    style={{
                      zIndex: 1,
                      transform: `perspective(1000px) rotateY(${
                        scrollY * 0.03
                      }deg) rotateX(${
                        scrollY * -0.015
                      }deg) translateX(-20%) translateY(15%)`,
                    }}
                  >
                    <Image
                      src="/placeholder.svg?height=600&width=400"
                      alt="Article thumbnail"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <Badge variant="outline" className="mb-4">
                Featured Content
              </Badge>
              <h2 className="font-heading">Latest Articles</h2>
              <p className="text-muted-foreground mt-3 max-w-md">
                Explore our most popular and thought-provoking content from our
                community of writers.
              </p>
            </div>
            <Button variant="ghost" asChild className="mt-4 md:mt-0 group">
              <Link href="/blog" className="inline-flex items-center">
                View all articles
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <FeaturedPosts />
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">
              Why Choose Prism
            </Badge>
            <h2 className="font-heading">A modern platform for modern ideas</h2>
            <p className="text-muted-foreground mt-4">
              We've built a platform that prioritizes quality content, reader
              experience, and writer support.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={item}>
              <Card className="border-none shadow-lg card-hover bg-background/50 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Quality Content
                  </h3>
                  <p className="text-muted-foreground">
                    We curate and promote thoughtful, well-researched articles
                    that provide genuine value to readers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-none shadow-lg card-hover bg-background/50 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Vibrant Community
                  </h3>
                  <p className="text-muted-foreground">
                    Connect with like-minded readers and writers who share your
                    passion for ideas and knowledge.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-none shadow-lg card-hover bg-background/50 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Beautiful Experience
                  </h3>
                  <p className="text-muted-foreground">
                    Enjoy a clean, distraction-free reading experience designed
                    to highlight what matters most: the content.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="relative bg-accent/5 dark:bg-accent/10 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background blobs now also client-only */}
            {hasMounted && (
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-accent/10 blur-3xl"
                  style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                />
                <div
                  className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-accent/5 blur-3xl"
                  style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
                />
              </div>
            )}

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <motion.h2
                className="font-heading mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to start your writing journey?
              </motion.h2>
              <motion.p
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join thousands of writers who share their ideas, stories, and
                expertise with our global audience.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  size="lg"
                  variant="default"
                  className="rounded-full group"
                  asChild
                >
                  <Link href="/contact" className="inline-flex items-center">
                    Get Started{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                  asChild
                >
                  <Link href="/blog">Explore Content</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
