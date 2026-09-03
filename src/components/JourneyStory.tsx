import { motion } from 'motion/react';
import { BiographyData } from '../types';
import { StoryPlaceholder } from './Placeholders';

export function Story({ data }: { data: BiographyData }) {
  return (
    <section id="story" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">My Story</h2>
          <p className="text-lg font-semibold text-slate-500 uppercase tracking-widest">The chapters of my life</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.story.map((chapter, index) => {
            const cardColors = [
              'bg-blue-50/50 hover:bg-blue-100/50 border-blue-100',
              'bg-purple-50/50 hover:bg-purple-100/50 border-purple-100',
              'bg-pink-50/50 hover:bg-pink-100/50 border-pink-100',
              'bg-orange-50/50 hover:bg-orange-100/50 border-orange-100',
              'bg-teal-50/50 hover:bg-teal-100/50 border-teal-100'
            ];
            const iconColors = ['bg-blue-100 text-blue-600', 'bg-purple-100 text-purple-600', 'bg-pink-100 text-pink-600', 'bg-orange-100 text-orange-600', 'bg-teal-100 text-teal-600'];
            
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`backdrop-blur-md rounded-[32px] p-8 border shadow-sm flex flex-col transition-colors ${cardColors[index % cardColors.length]}`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs font-black uppercase tracking-tighter ${iconColors[index % iconColors.length].split(' ')[1]}`}>Chapter {chapter.chapter}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${iconColors[index % iconColors.length]}`}>✨</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{chapter.title}</h3>
              
              {chapter.content.startsWith('[') ? (
                <div className="mt-auto pt-4">
                  <StoryPlaceholder />
                </div>
              ) : (
                <p className="text-slate-500 text-sm flex-1 leading-relaxed">
                  {chapter.content}
                </p>
              )}
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Journey({ data }: { data: BiographyData }) {
  return (
    <section id="journey" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">My Journey</h2>
          <p className="text-lg font-semibold text-slate-500 uppercase tracking-widest">A timeline of milestones</p>
        </div>

        <div className="relative">
          <div className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {data.journey.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col sm:flex-row items-start ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-0 sm:left-1/2 top-1 w-14 h-14 sm:-translate-x-1/2 flex items-center justify-center">
                  <div className={`w-5 h-5 rounded-full bg-white border-[4px] shadow-md z-10 ${
                    index % 3 === 0 ? 'border-purple-500' : index % 3 === 1 ? 'border-pink-500' : 'border-blue-500'
                  }`} />
                </div>

                <div className={`ml-16 sm:ml-0 w-full sm:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12 sm:text-right'}`}>
                  <div className={`backdrop-blur-md p-6 rounded-[32px] border shadow-sm hover:shadow-md transition-shadow ${
                    index % 3 === 0 ? 'bg-purple-50/40 hover:bg-purple-100/40 border-purple-100' : 
                    index % 3 === 1 ? 'bg-pink-50/40 hover:bg-pink-100/40 border-pink-100' : 
                    'bg-blue-50/40 hover:bg-blue-100/40 border-blue-100'
                  }`}>
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4 shadow-sm">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Education({ data }: { data: BiographyData }) {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">My Education</h2>
          <p className="text-lg font-semibold text-slate-500 uppercase tracking-widest">The journey of knowledge</p>
        </div>

        <div className="space-y-6">
          {data.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`backdrop-blur-md rounded-[32px] p-6 sm:p-8 border shadow-sm flex flex-col sm:flex-row sm:items-center gap-6 group transition-colors ${
                index % 2 === 0 ? 'bg-blue-50/40 hover:bg-blue-100/40 border-blue-100' : 'bg-purple-50/40 hover:bg-purple-100/40 border-purple-100'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform ${
                index % 2 === 0 ? 'bg-gradient-to-br from-blue-500 to-cyan-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'
              }`}>
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{edu.institution}</h3>
                  <span className="text-xs font-bold text-slate-500 mt-1 sm:mt-0 bg-slate-100 px-3 py-1.5 rounded-full w-fit uppercase tracking-widest border border-slate-200">
                    {edu.period}
                  </span>
                </div>
                <p className="text-blue-600 font-bold text-sm mb-3 uppercase tracking-wide">{edu.level}</p>
                
                {edu.description.startsWith('[') ? (
                  <div className="bg-slate-100/50 rounded-xl p-4 text-sm font-medium text-slate-400 border border-dashed border-slate-200">
                    [Add verified education information here]
                  </div>
                ) : (
                  <p className="text-slate-500 text-sm leading-relaxed">{edu.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
