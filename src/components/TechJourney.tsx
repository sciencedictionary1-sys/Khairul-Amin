import { motion } from 'motion/react';
import { BiographyData, TechJourneySection } from '../types';

export function TechnologyJourney({ data }: { data: BiographyData }) {
  if (!data.technologyJourney) return null;

  return (
    <section className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4"
          >
            My Technology Journey
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="space-y-16">
          {data.technologyJourney.sections.map((section: TechJourneySection, idx: number) => {
            const sectionColors = [
              'bg-blue-50/60 border-blue-100',
              'bg-purple-50/60 border-purple-100',
              'bg-orange-50/60 border-orange-100',
              'bg-teal-50/60 border-teal-100'
            ];
            const textColors = [
              'text-blue-600',
              'text-purple-600',
              'text-orange-600',
              'text-teal-600'
            ];

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`backdrop-blur-md rounded-[32px] p-8 md:p-12 border shadow-sm ${sectionColors[idx % sectionColors.length]}`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{section.title}</h3>
                
                {section.content && (
                  <div className="space-y-4 mb-6">
                    {section.content.map((text: string, i: number) => (
                      <p key={i} className="text-slate-700 text-lg leading-relaxed">{text}</p>
                    ))}
                  </div>
                )}

                {section.list && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {section.list.map((item: string, i: number) => (
                      <span key={i} className={`px-4 py-2 bg-white/80 rounded-xl font-bold shadow-sm border border-white/50 ${textColors[idx % textColors.length]}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {section.projects && (
                  <div className="grid md:grid-cols-3 gap-6 mb-8 mt-8">
                    {section.projects.map((proj, i) => (
                      <div key={i} className="bg-white/80 rounded-2xl p-6 shadow-sm border border-white/50">
                        <div className="text-4xl mb-4">{proj.icon}</div>
                        <h4 className="font-bold text-slate-900 mb-2">{proj.name}</h4>
                        <p className="text-slate-600 text-sm">{proj.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.quote && (
                  <blockquote className="mt-8 p-6 bg-white/50 rounded-2xl border-l-4 border-slate-900 italic text-slate-800 font-medium">
                    "{section.quote}"
                  </blockquote>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Animated Timeline */}
        <div className="mt-24">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-center text-slate-900 mb-16"
          >
            My Journey From Here
          </motion.h3>
          
          <div className="relative">
            {/* The line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-200 via-purple-200 to-teal-200 rounded-full hidden md:block" />
            
            <div className="space-y-12">
              {data.technologyJourney.timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`relative flex items-center justify-center md:justify-between ${
                    idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="hidden md:block w-5 h-5 absolute left-1/2 -translate-x-1/2 bg-white border-4 border-slate-900 rounded-full z-10" />
                  
                  <div className={`w-full md:w-[calc(50%-3rem)] flex ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/50 flex items-center gap-4 hover:scale-105 transition-transform w-full md:max-w-md">
                      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
