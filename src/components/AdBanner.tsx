import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const AdBanner: React.FC = () => {
  const [countdown, setCountdown] = useState(180)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (countdown <= 0) return
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [countdown])

  if (!isVisible) return null

  const minutes = Math.floor(countdown / 60)
  const seconds = countdown % 60

  return (
    <div className="relative w-full" style={{ background: 'linear-gradient(90deg, #32CD32 0%, #7FFF00 50%, #32CD32 100%)', borderBottom: '4px solid #FF6600' }}>
      {/* Main banner content */}
      <div className="py-3 px-4 text-center relative">
        {/* Tiny close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-2 text-gray-500 hover:text-gray-700 text-xs"
          style={{ fontSize: '10px' }}
        >
          CLOSE X
        </button>

        {/* Rotating sparkles */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="inline-block text-2xl"
          >
            ✨
          </motion.span>
        </div>
        <div className="absolute right-16 top-1/2 -translate-y-1/2">
          <motion.span
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="inline-block text-2xl"
          >
            ⭐
          </motion.span>
        </div>

        {/* Main text */}
        <motion.p
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-black font-bold text-lg md:text-xl leading-tight"
          style={{ fontFamily: 'Comic Sans MS, cursive' }}
        >
          🔥 CONGRATULATIONS!!! You are the 1,000,000th VISITOR! 🎉 Click here to claim your FREE iPhone 15 Pro Max!!! ACT NOW - OFFER EXPIRES IN 3 MINUTES!!! 💰💰💰
        </motion.p>

        {/* Countdown timer */}
        <motion.p
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 0.3, repeat: Infinity }}
          className="text-red-600 font-bold text-2xl mt-2"
          style={{ fontFamily: 'Comic Sans MS, cursive' }}
        >
          ⏰ {minutes}:{seconds.toString().padStart(2, '0')} ⏰
        </motion.p>
      </div>

      {/* Marquee scrolling text */}
      <div className="overflow-hidden bg-yellow-400 py-1">
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap text-black font-bold text-sm"
          style={{ fontFamily: 'Comic Sans MS, cursive' }}
        >
          🏆 WINNER WINNER WINNER CLICK NOW DON'T MISS OUT 🏆 WINNER WINNER WINNER CLICK NOW DON'T MISS OUT 🏆 WINNER WINNER WINNER CLICK NOW DON'T MISS OUT 🏆
        </motion.div>
      </div>
    </div>
  )
}

export default AdBanner
