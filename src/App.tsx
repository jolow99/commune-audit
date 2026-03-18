import { motion } from 'framer-motion'

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 text-white flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-6xl font-bold tracking-tight mb-6">
          Build together.<br />Govern together.
        </h1>
        <p className="text-xl text-indigo-300 mb-10">
          A living platform owned by the movement. Every line of this page was voted in by the community.
        </p>
        <motion.a
          href="#join"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-colors"
        >
          Join the experiment
        </motion.a>
      </motion.div>
    </main>
  )
}