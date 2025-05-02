"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 15
    const particleBaseRadius = 80
    const particleVariance = 50
    const baseHue = isDark ? 240 : 210
    const baseOpacity = isDark ? 0.08 : 0.05

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      radius: number
      xSpeed: number
      ySpeed: number
      hue: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = particleBaseRadius + Math.random() * particleVariance
        this.xSpeed = 0.05 + Math.random() * 0.1 - 0.05
        this.ySpeed = 0.05 + Math.random() * 0.1 - 0.05
        this.hue = baseHue + Math.random() * 30 - 15
        this.opacity = baseOpacity + Math.random() * 0.05
      }

      update() {
        this.x += this.xSpeed
        this.y += this.ySpeed

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.xSpeed *= -1
        if (this.y < 0 || this.y > canvas.height) this.ySpeed *= -1
      }

      draw() {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, ${this.opacity})`)
        gradient.addColorStop(1, `hsla(${this.hue}, 70%, 60%, 0)`)
        ctx.fillStyle = gradient
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full opacity-60 pointer-events-none"
      aria-hidden="true"
    />
  )
}
