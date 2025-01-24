"use client"

import React, { useEffect, useRef, useState, memo } from "react"
import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"
import { cn } from "@/lib/utils"

// Move Stars to a separate client component to avoid hydration issues
const Stars = () => {
  const [stars, setStars] = useState<Array<{ top: number; left: number; opacity: number }>>([])
  
  useEffect(() => {
    // Generate stars only on the client side
    setStars(
      Array.from({ length: 80 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        opacity: Math.random(),
      }))
    )
  }, [])

  return (
    <div className="absolute inset-0">
      {stars.map((star, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${star.top}% + ${Math.random() * 4 - 2}px)`,
            left: `calc(${star.left}% + ${Math.random() * 4 - 2}px)`,
            opacity: star.opacity,
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="inline-block absolute"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: "2px",
            height: "2px",
            backgroundColor: "#14213d",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />
      ))}
    </div>
  )
}

// Memoize the Stars component to prevent unnecessary re-renders
const MemoizedStars = memo(Stars)

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string
  revealText: string
  children?: React.ReactNode
  className?: string
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0)
  const [left, setLeft] = useState(0)
  const [localWidth, setLocalWidth] = useState(0)
  const [isMouseOver, setIsMouseOver] = useState(false)
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } = cardRef.current.getBoundingClientRect()
      setLeft(left)
      setLocalWidth(localWidth)
    }
  }, [])

  const mouseMoveHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    const { clientX } = event
    if (cardRef.current) {
      const relativeX = clientX - left
      setWidthPercentage((relativeX / localWidth) * 100)
    }
  }

  const mouseLeaveHandler = () => {
    setIsMouseOver(false)
    setWidthPercentage(0)
  }

  const mouseEnterHandler = () => {
    setIsMouseOver(true)
  }

  const touchMoveHandler = (event: React.TouchEvent) => {
    event.preventDefault()
    const clientX = event.touches[0]!.clientX
    if (cardRef.current) {
      const relativeX = clientX - left
      setWidthPercentage((relativeX / localWidth) * 100)
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "relative w-[100%] overflow-hidden rounded-lg border-transparent bg-transparent",
        className
      )}
    >
      {children}
      <div className="relative flex items-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.2 }}
          className="absolute z-20 bg-white will-change-transform"
        >
          <p className="bg-clip-text py-10 text-base font-bold text-navy sm:text-[3rem]">
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.2 }}
          className="absolute z-50 h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent will-change-transform"
        />
        <div className="overflow-hidden text-navy">
          <p className="text-nowrap bg-clip-text py-10 text-base font-bold text-[#181c31] md:text-[3.3rem] lg:text-[2.5rem] xl:text-[3.5rem]">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  )
}

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <h2 className={twMerge("mb-1 text-navy", className)}>{children}</h2>
}

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <p className={twMerge("text-lg text-navy", className)}>{children}</p>
}

