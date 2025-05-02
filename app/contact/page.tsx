// app/contact/page.tsx
"use client";

import { useEffect, useState, Suspense } from "react";
import ContactForm from "@/components/contact-form";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Users,
  Headphones,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="pt-16">
        <div className="h-40 bg-secondary/30"></div>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-32 rounded-xl bg-muted animate-pulse"
                  />
                ))}
              </div>
              <div className="lg:col-span-2">
                <div className="h-[400px] rounded-xl bg-muted animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have a question, suggestion, or just want to say hello? We'd love
              to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <motion.div
                className="lg:col-span-1 space-y-6"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={item}>
                  <Card className="border-none shadow-lg card-hover bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          contact@prism.io
                        </p>
                        <p className="text-muted-foreground">
                          support@prism.io
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="border-none shadow-lg card-hover bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Phone</h3>
                        <p className="text-muted-foreground">
                          +1 (555) 123-4567
                        </p>
                        <p className="text-muted-foreground">
                          Mon-Fri, 9am-5pm PST
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="border-none shadow-lg card-hover bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Location</h3>
                        <p className="text-muted-foreground">
                          123 Market Street
                        </p>
                        <p className="text-muted-foreground">
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold mb-6">
                      Send us a message
                    </h2>

                    {/* Suspense wrapper for ContactForm */}
                    <Suspense fallback={<div>Loading contact form...</div>}>
                      <ContactForm />
                    </Suspense>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-center mb-12">
              Other Ways to Connect
            </h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={item}>
                <Card className="border-none shadow-lg card-hover bg-background/50 backdrop-blur-sm text-center p-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-4">
                    Get instant answers through our live chat support system.
                  </p>
                  <p className="text-sm text-accent">Available 24/7</p>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="border-none shadow-lg card-hover bg-background/50 backdrop-blur-sm text-center p-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Community Forum</h3>
                  <p className="text-muted-foreground mb-4">
                    Join discussions with other users and our team members.
                  </p>
                  <p className="text-sm text-accent">Active Community</p>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="border-none shadow-lg card-hover bg-background/50 backdrop-blur-sm text-center p-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Headphones className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Support Center</h3>
                  <p className="text-muted-foreground mb-4">
                    Browse our knowledge base for answers to common questions.
                  </p>
                  <p className="text-sm text-accent">Comprehensive Resources</p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
