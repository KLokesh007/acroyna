'use client'

import dynamic from 'next/dynamic'
import "./ch.css"

// Dynamically import LottieAnimation to avoid SSR issues
const LottieAnimation = dynamic(() => import('@/components/Lottie/LottieAnimation'), {
  ssr: false, // Disable server-side rendering
})

export default function CHeroSection() {
  return (
    <section className="chero-container">
      <div className="chero-content">
        <div className="chero-image">
          <LottieAnimation
            animationPath="/lottie/Career1.json" // Animation for another use
            loop={true}
            autoplay={true}
          />
        </div>
        <div className="chero-text">
          <h1 className="chero-title">Come work at Acroyna.</h1>
          <p className="chero-quote">
            "We're more than just colleagues — we're a unified team, fueled by transparency, opportunities, and mutual success!"
          </p>
          <button 
            className="cta-button" 
            onClick={() => window.location.href = "#career-opening"}
          >
            EXPLORE JOB OPENINGS →
          </button>
        </div>
      </div>
    </section>
  )
}
