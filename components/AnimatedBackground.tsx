'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

interface Particle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  opacity: number
  targetOpacity: number
  pulsePhase: number
  pulseSpeed: number
  twinklePhase: number
  twinkleSpeed: number
  size: number
  fadePhase: number
  fadeSpeed: number
}

interface MousePosition {
  x: number
  y: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosRef = useRef<MousePosition>({ x: -1000, y: -1000 })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mousePosRef.current = { x: -1000, y: -1000 }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    let width = 0
    let height = 0
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      
      particles.forEach(particle => {
        if (particle.x > width) particle.x = width
        if (particle.y > height) particle.y = height
      })
    }
    
    const particles: Particle[] = []
    const getParticleCount = () => Math.floor((width * height) / 60000)
    
    const initParticles = () => {
      particles.length = 0
      const particleCount = getParticleCount()
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          vx: 0,
          vy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.6 + 0.2,
          targetOpacity: Math.random() * 0.6 + 0.2,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.005 + 0.003,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.012 + 0.008,
          size: Math.random() * 1.5 + 1,
          fadePhase: Math.random() * Math.PI * 2,
          fadeSpeed: Math.random() * 0.008 + 0.005,
        })
      }
    }
    
    setCanvasSize()
    initParticles()
    window.addEventListener('resize', () => {
      setCanvasSize()
      const newCount = getParticleCount()
      if (newCount > particles.length) {
        for (let i = particles.length; i < newCount; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            vx: 0,
            vy: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.6 + 0.2,
            targetOpacity: Math.random() * 0.6 + 0.2,
            pulsePhase: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.005 + 0.003,
            twinklePhase: Math.random() * Math.PI * 2,
            twinkleSpeed: Math.random() * 0.012 + 0.008,
            fadePhase: Math.random() * Math.PI * 2,
            fadeSpeed: Math.random() * 0.008 + 0.005,
            size: Math.random() * 1.5 + 1,
          })
        }
      }
    })

    const drawStar = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      opacity: number,
      isDark: boolean
    ) => {
      const glowRadius = size * 3
      const gradient = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        glowRadius
      )

      if (isDark) {
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
        gradient.addColorStop(0.4, `rgba(255, 255, 255, ${opacity * 0.6})`)
        gradient.addColorStop(0.7, `rgba(255, 255, 255, ${opacity * 0.2})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      } else {
        gradient.addColorStop(0, `rgba(0, 0, 0, ${opacity * 0.9})`)
        gradient.addColorStop(0.4, `rgba(0, 0, 0, ${opacity * 0.5})`)
        gradient.addColorStop(0.7, `rgba(0, 0, 0, ${opacity * 0.15})`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      }

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, glowRadius, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = isDark
        ? `rgba(255, 255, 255, ${opacity * 1.2})`
        : `rgba(0, 0, 0, ${opacity * 1.1})`
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }

    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      if (isDark) {
        const mousePos = mousePosRef.current
        if (mousePos.x >= -50 && mousePos.y >= -50 && mousePos.x <= width + 50 && mousePos.y <= height + 50) {
          const lightRadius = 200
          const lightGradient = ctx.createRadialGradient(
            mousePos.x,
            mousePos.y,
            0,
            mousePos.x,
            mousePos.y,
            lightRadius
          )
          
          lightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)')
          lightGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.08)')
          lightGradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.03)')
          lightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
          
          ctx.fillStyle = lightGradient
          ctx.beginPath()
          ctx.arc(mousePos.x, mousePos.y, lightRadius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      particles.forEach((particle) => {
        particle.y += particle.vy

        if (particle.y < 0) {
          particle.y = height
          particle.x = Math.random() * width
        }
        if (particle.y > height) {
          particle.y = 0
          particle.x = Math.random() * width
        }

        particle.fadePhase += particle.fadeSpeed
        const fade = (Math.sin(particle.fadePhase) + 1) / 2
        
        particle.twinklePhase += particle.twinkleSpeed
        const twinkle = Math.sin(particle.twinklePhase) * 0.15 + 0.85
        
        particle.pulsePhase += particle.pulseSpeed
        const pulse = Math.sin(particle.pulsePhase) * 0.08 + 1

        const baseOpacity = particle.opacity * fade
        const finalOpacity = baseOpacity * twinkle

        if (finalOpacity > 0.05) {
          drawStar(ctx, particle.x, particle.y, particle.size * pulse, finalOpacity, isDark)
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-500">
      <div className={`absolute inset-0 transition-colors duration-500 ${
        isDark ? 'bg-black' : 'bg-white'
      }`} />
      
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          isDark ? 'opacity-[0.15]' : 'opacity-[0.08]'
        }`}
        style={{
          backgroundImage: isDark
            ? `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `
            : `
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
          backgroundSize: '50px 50px',
        }}
      />
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ 
          mixBlendMode: isDark ? 'screen' : 'multiply',
        }}
      />
      
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent transition-opacity duration-500 ${
        isDark ? 'to-black/30' : 'to-white/20'
      }`} />
    </div>
  )
}

