import { motion } from 'motion/react';
import { BiographyData } from '../types';
import { EmptyAchievementsPlaceholder } from './Placeholders';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Facebook, Youtube, Instagram, Github, Globe } from 'lucide-react';

export function Achievements({ data }: { data: BiographyData }) {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Achievements</h2>
          <p className="text-lg font-semibold text-slate-500 uppercase tracking-widest">Milestones of recognition</p>
        </div>

        {data.achievements.length === 0 ? (
          <div className="max-w-3xl mx-auto">
            <EmptyAchievementsPlaceholder />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.achievements.map((achievement, index) => {
              const bgColors = [
                'bg-blue-50/60 hover:bg-blue-100/60 border-blue-100',
                'bg-purple-50/60 hover:bg-purple-100/60 border-purple-100',
                'bg-pink-50/60 hover:bg-pink-100/60 border-pink-100',
                'bg-orange-50/60 hover:bg-orange-100/60 border-orange-100',
                'bg-teal-50/60 hover:bg-teal-100/60 border-teal-100'
              ];
              const iconColors = [
                'from-blue-500 to-cyan-400',
                'from-purple-500 to-indigo-400',
                'from-pink-500 to-rose-400',
                'from-orange-500 to-amber-400',
                'from-teal-500 to-emerald-400'
              ];
              
              return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`backdrop-blur-md rounded-[32px] p-8 border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden ${bgColors[index % bgColors.length]}`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr text-white flex items-center justify-center mb-6 shadow-md ${iconColors[index % iconColors.length]}`}>
                  {achievement.icon ? (
                    <span className="text-xl">{achievement.icon}</span>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{achievement.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">{achievement.date}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export function Gallery({ data }: { data: BiographyData }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', ...Array.from(new Set(data.gallery.map(img => img.category)))];
  
  const filteredImages = activeCategory === 'All' 
    ? data.gallery 
    : data.gallery.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  if (data.gallery.length === 0) return null;

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">Gallery</h2>
            <p className="text-lg font-semibold text-slate-500 uppercase tracking-widest">Visual memories</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === category 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white/60 text-slate-500 hover:bg-white hover:text-slate-900 border border-white/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid group relative rounded-[32px] overflow-hidden cursor-pointer border border-white/50 shadow-sm hover:shadow-xl transition-shadow"
              onClick={() => openLightbox(index)}
            >
              <img src={img.imageUrl} alt={img.caption || ''} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-bold uppercase tracking-widest px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && filteredImages.length > 0 && (
        <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center">
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
          
          {filteredImages.length > 1 && (
            <button 
              onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1))}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div className="max-w-5xl w-full px-12 flex flex-col items-center">
            <img 
              src={filteredImages[currentImageIndex].imageUrl} 
              alt={filteredImages[currentImageIndex].caption || ''}
              className="max-h-[80vh] w-auto object-contain mb-6 rounded-2xl shadow-2xl"
            />
            {filteredImages[currentImageIndex].caption && (
              <p className="text-white/70 text-center font-medium">{filteredImages[currentImageIndex].caption}</p>
            )}
          </div>

          {filteredImages.length > 1 && (
            <button 
              onClick={() => setCurrentImageIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0))}
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

export function Vision({ data }: { data: BiographyData }) {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="vision" className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-[48px] p-12 md:p-20 text-white shadow-2xl flex flex-col justify-center items-center text-center relative overflow-hidden"
        >
          {/* Decorative blurred shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-300/30 rounded-full blur-3xl mix-blend-overlay"></div>

          <span className="text-5xl mb-6 relative z-10">🚀</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight relative z-10">
            Future Vision
          </h2>
          
          <div className="space-y-6 max-w-2xl mx-auto relative z-10">
            {data.vision.map((paragraph, index) => (
              <p key={index} className="text-lg md:text-xl text-white/90 font-medium leading-relaxed italic">
                "{paragraph}"
              </p>
            ))}
          </div>

          <button 
            onClick={() => scrollTo('#home')}
            className="mt-12 px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-widest border border-white/30 transition-all relative z-10 hover:scale-105"
          >
            Explore the Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer({ data }: { data: BiographyData }) {
  const currentYear = new Date().getFullYear();
  const contact = data.contactInformation;
  
  const socialPlatforms = [
    { id: 'facebook', name: 'Facebook', url: contact?.facebook, icon: Facebook },
    { id: 'youtube', name: 'YouTube', url: contact?.youtube, icon: Youtube },
    { id: 'instagram', name: 'Instagram', url: contact?.instagram, icon: Instagram },
    { id: 'github', name: 'GitHub', url: contact?.github, icon: Github },
    { id: 'website', name: 'Website', url: contact?.website, icon: Globe },
  ].filter(platform => platform.url);
  
  return (
    <footer className="py-12 px-6 lg:px-10 relative z-10 border-t border-slate-200/50 mt-12 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {data.identity.logoUrl ? (
            <img src={data.identity.logoUrl} alt={`${data.identity.name} Logo`} className="h-10 mb-3 object-contain" />
          ) : (
            <div className="h-10 w-32 bg-slate-200/50 rounded flex items-center justify-center mb-3 text-xs text-slate-400 font-medium">Logo Placeholder</div>
          )}
          <h4 className="text-xl font-black text-slate-900 tracking-tight mb-1">{data.identity.name}</h4>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{data.identity.tagline}</p>
        </div>

        {socialPlatforms.length > 0 && (
          <div className="flex space-x-3">
            {socialPlatforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <a 
                  key={platform.id} 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/60 hover:bg-slate-900 hover:text-white flex items-center justify-center text-slate-600 transition-colors shadow-sm border border-slate-200"
                  aria-label={`Visit my ${platform.name} profile`}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        )}
        
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          © {currentYear} {data.identity.name}. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}
