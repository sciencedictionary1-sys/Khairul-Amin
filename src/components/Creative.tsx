import { motion } from 'motion/react';
import { BiographyData } from '../types';
import { ProjectImagePlaceholder, EmptyArtworkPlaceholder } from './Placeholders';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function Skills({ data }: { data: BiographyData }) {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Skills & Interests</h2>
          <p className="text-lg font-semibold text-slate-500 uppercase tracking-widest">Tools and concepts</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.skills.map((skillGroup, index) => {
            const skillColors = [
              'bg-green-50/60 hover:bg-green-100/60 border-green-100 text-green-900',
              'bg-lime-50/60 hover:bg-lime-100/60 border-lime-100 text-lime-900',
              'bg-emerald-50/60 hover:bg-emerald-100/60 border-emerald-100 text-emerald-900',
              'bg-teal-50/60 hover:bg-teal-100/60 border-teal-100 text-teal-900'
            ];
            
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`backdrop-blur-md rounded-[32px] p-8 border shadow-sm transition-colors ${skillColors[index % skillColors.length]}`}
            >
              <h3 className={`text-lg font-black mb-6 pb-4 border-b border-black/5 uppercase tracking-wide`}>
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-sm font-semibold opacity-80">
                    <span className="opacity-50 mr-3 mt-0.5">❖</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Projects({ data }: { data: BiographyData }) {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Things I Create</h2>
          <p className="text-lg font-semibold text-slate-500 uppercase tracking-widest">Featured Projects</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => {
            const projectGradients = [
              'from-purple-600 via-violet-600 to-indigo-700',
              'from-blue-600 via-cyan-600 to-teal-700',
              'from-pink-600 via-rose-600 to-red-700',
              'from-orange-500 via-amber-500 to-yellow-600'
            ];
            
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${projectGradients[index % projectGradients.length]} rounded-[32px] overflow-hidden text-white shadow-xl flex flex-col relative group`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] font-black text-8xl leading-none select-none pointer-events-none transition-transform group-hover:scale-110 duration-500">
                KA
              </div>
              
              <div className="relative overflow-hidden bg-white/5 border-b border-white/10">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.name} className="w-full aspect-video object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                ) : (
                  <div className="w-full aspect-video flex items-center justify-center opacity-50">
                    <div className="text-sm font-bold uppercase tracking-widest bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">Image Coming Soon</div>
                  </div>
                )}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                  {project.status}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1 relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                  <span className="text-[10px] bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest whitespace-nowrap ml-4">
                    {project.category.split('/')[0].trim()}
                  </span>
                </div>
                
                {project.description.startsWith('[') ? (
                  <div className="bg-white/10 rounded-2xl p-4 text-xs text-white/50 border border-dashed border-white/20 mb-6 font-medium uppercase tracking-widest flex-1">
                    [Description pending]
                  </div>
                ) : (
                  <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                )}

                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-white hover:text-cyan-300 transition-colors mt-auto w-fit">
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                )}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Artwork({ data }: { data: BiographyData }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="artwork" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Artistic Expression</h2>
          <p className="text-lg font-semibold text-slate-500 uppercase tracking-widest">My Creative Work</p>
        </div>

        {data.artwork.length === 0 ? (
          <EmptyArtworkPlaceholder />
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {data.artwork.map((art, index) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="break-inside-avoid"
              >
                <div 
                  className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow border border-white/50"
                  onClick={() => openLightbox(index)}
                >
                  <img src={art.imageUrl} alt={art.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h4 className="text-white font-bold text-lg">{art.title}</h4>
                      {art.date && <p className="text-white/70 text-xs mt-1 font-semibold tracking-widest uppercase">{art.date}</p>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && data.artwork.length > 0 && (
        <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center">
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
          
          {data.artwork.length > 1 && (
            <button 
              onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : data.artwork.length - 1))}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div className="max-w-5xl w-full px-12 flex flex-col items-center">
            <img 
              src={data.artwork[currentImageIndex].imageUrl} 
              alt={data.artwork[currentImageIndex].title}
              className="max-h-[75vh] w-auto object-contain mb-6 rounded-2xl shadow-2xl"
            />
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{data.artwork[currentImageIndex].title}</h3>
              {data.artwork[currentImageIndex].description && (
                <p className="text-white/70 max-w-2xl mx-auto text-sm leading-relaxed">{data.artwork[currentImageIndex].description}</p>
              )}
            </div>
          </div>

          {data.artwork.length > 1 && (
            <button 
              onClick={() => setCurrentImageIndex((prev) => (prev < data.artwork.length - 1 ? prev + 1 : 0))}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
