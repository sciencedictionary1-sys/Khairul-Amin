import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BiographyData, Experience } from '../types';

const cardGradients = [
  {
    from: 'from-blue-500/10',
    to: 'to-cyan-500/10',
    border: 'border-blue-200/50',
    glow: 'group-hover:shadow-blue-500/20',
    iconBg: 'bg-gradient-to-br from-blue-100 to-cyan-100',
    iconText: 'text-blue-600',
    number: 'from-blue-600/20 to-cyan-600/20',
    modalAccent: 'text-blue-600'
  },
  {
    from: 'from-purple-500/10',
    to: 'to-blue-500/10',
    border: 'border-purple-200/50',
    glow: 'group-hover:shadow-purple-500/20',
    iconBg: 'bg-gradient-to-br from-purple-100 to-blue-100',
    iconText: 'text-purple-600',
    number: 'from-purple-600/20 to-blue-600/20',
    modalAccent: 'text-purple-600'
  },
  {
    from: 'from-emerald-500/10',
    to: 'to-cyan-500/10',
    border: 'border-emerald-200/50',
    glow: 'group-hover:shadow-emerald-500/20',
    iconBg: 'bg-gradient-to-br from-emerald-100 to-cyan-100',
    iconText: 'text-emerald-600',
    number: 'from-emerald-600/20 to-cyan-600/20',
    modalAccent: 'text-emerald-600'
  },
  {
    from: 'from-pink-500/10',
    to: 'to-orange-500/10',
    border: 'border-pink-200/50',
    glow: 'group-hover:shadow-pink-500/20',
    iconBg: 'bg-gradient-to-br from-pink-100 to-orange-100',
    iconText: 'text-pink-600',
    number: 'from-pink-600/20 to-orange-600/20',
    modalAccent: 'text-pink-600'
  },
  // Fallbacks for future cards
  {
    from: 'from-amber-500/10',
    to: 'to-red-500/10',
    border: 'border-amber-200/50',
    glow: 'group-hover:shadow-amber-500/20',
    iconBg: 'bg-gradient-to-br from-amber-100 to-red-100',
    iconText: 'text-amber-600',
    number: 'from-amber-600/20 to-red-600/20',
    modalAccent: 'text-amber-600'
  },
  {
    from: 'from-indigo-500/10',
    to: 'to-violet-500/10',
    border: 'border-indigo-200/50',
    glow: 'group-hover:shadow-indigo-500/20',
    iconBg: 'bg-gradient-to-br from-indigo-100 to-violet-100',
    iconText: 'text-indigo-600',
    number: 'from-indigo-600/20 to-violet-600/20',
    modalAccent: 'text-indigo-600'
  }
];

export function ExperienceSection({ data }: { data: BiographyData }) {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background styling as requested */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tl from-cyan-300/20 to-emerald-300/20 rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-20 text-center relative z-10">
          <span className="inline-block text-sm font-black text-blue-600 bg-blue-50 px-4 py-2 rounded-full uppercase tracking-[0.2em] mb-6 shadow-sm border border-blue-100">
            CHAPTER 04
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            My Experience
          </h2>
          <p className="text-xl font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Every experience has taught me something and helped shape the person I am becoming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {data.experience && data.experience.length > 0 ? (
            data.experience.map((exp, index) => {
              const theme = cardGradients[index % cardGradients.length];
              const displayNum = String(index + 1).padStart(2, '0');

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedExp(exp)}
                  className={`group relative overflow-hidden backdrop-blur-xl rounded-[40px] p-8 sm:p-10 cursor-pointer bg-gradient-to-br ${theme.from} ${theme.to} border-2 ${theme.border} hover:-translate-y-2 transition-all duration-500 shadow-lg ${theme.glow} bg-white/40`}
                >
                  {/* Decorative subtle background shape */}
                  <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                  
                  {/* Big Number */}
                  <div className={`absolute top-6 right-8 text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b ${theme.number} opacity-60 select-none pointer-events-none`}>
                    {displayNum}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 ${theme.iconBg} ${theme.iconText} border border-white/50`}>
                      {exp.icon}
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-slate-800 transition-colors pr-12">
                      {exp.title}
                    </h3>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-10 flex-grow font-medium">
                      {exp.description}
                    </p>
                    
                    <div className="flex items-center text-sm font-bold uppercase tracking-widest text-slate-900 group-hover:text-blue-600 transition-colors mt-auto">
                      View Experience
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500 bg-white/50 backdrop-blur-sm rounded-[40px] border border-slate-200/60 shadow-sm">
              <p className="text-lg font-medium">More experiences will be added as my journey continues.</p>
            </div>
          )}
        </div>

        {/* Bottom Message */}
        <div className="mt-24 text-center relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          </div>
          <h4 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
            My Journey Continues
          </h4>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            These experiences are only some of the steps in my journey. There is still much more to learn, create, and discover.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[40px] p-8 sm:p-12 shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedExp(null)}
                className="absolute top-6 right-6 sm:top-8 sm:right-8 p-3 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="mb-10 pr-16 relative">
                <div className="text-4xl mb-6">{selectedExp.icon}</div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                  {selectedExp.title}
                </h3>
                {selectedExp.period && (
                  <span className="inline-block text-sm font-bold text-slate-500 bg-slate-100 px-4 py-2 rounded-full uppercase tracking-widest">
                    {selectedExp.period}
                  </span>
                )}
              </div>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Overview</h4>
                  <p className="text-slate-600 leading-relaxed text-lg sm:text-xl font-medium">
                    {selectedExp.description}
                  </p>
                </div>
                
                {selectedExp.learned && selectedExp.learned.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-5">What I Learned</h4>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {selectedExp.learned.map((learnedItem, i) => (
                        <li key={i} className="flex items-start bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <span className="text-blue-500 mr-3 text-xl leading-none mt-0.5">•</span>
                          <span className="text-slate-700 font-medium">{learnedItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedExp.skills && selectedExp.skills.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-5">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.skills.map((skill, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold border border-slate-200/60">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
