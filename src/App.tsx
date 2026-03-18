import { motion } from 'framer-motion'

const CATEGORIES = ['Food', 'Housing', 'Transport', 'Skills', 'Emotional Support']

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 text-white px-6 py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Mutual Aid Board</h1>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="bg-indigo-600 hover:bg-indigo-500 rounded-xl p-4 text-lg font-medium">I Need Help</button>
          <button className="bg-emerald-600 hover:bg-emerald-500 rounded-xl p-4 text-lg font-medium">I Can Help</button>
        </div>
        <div className="flex gap-2 mb-6">
          {CATEGORIES.map(c => <span key={c} className="px-3 py-1 bg-slate-800 rounded-full text-sm">{c}</span>)}
        </div>
        <p className="text-slate-400">No posts yet. Be the first to share a request or offer.</p>
      </motion.div>
    </main>
  )
}