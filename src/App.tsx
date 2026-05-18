import React from 'react'
import AdBanner from './components/AdBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <AdBanner />
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
