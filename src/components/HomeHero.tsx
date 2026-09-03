import { useState } from 'react';
import { motion } from 'motion/react';
import { ProfilePhotoPlaceholder } from './Placeholders';
import { BiographyData } from '../types';

export function Hero({ data }: { data: BiographyData }) {
  const [imgError, setImgError] = useState(false);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center space-y-8 relative z-20 text-center lg:text-left"
          >
            <h2 className="text-xs font-black tracking-widest text-blue-500 uppercase">
              {data.identity.name}
            </h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              {data.identity.tagline.split(' • ').map((part, i) => (
                <span key={i} className={`block lg:inline-block ${i === 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' : ''}`}>
                  {part}
                  {i < 2 && <span className="hidden lg:inline-block text-slate-300 mx-4 font-normal tracking-normal">•</span>}
                </span>
              ))}
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {data.identity.introduction}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollTo('#about')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold tracking-wide hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore My Story
              </button>
              <button 
                onClick={() => scrollTo('#journey')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-700 font-bold tracking-wide border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 hover:text-purple-700 transition-all duration-300"
              >
                View My Journey
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center relative"
          >
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[35rem] max-w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl h-full w-full">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 relative z-10 flex items-center justify-center">
                  {data.identity.profilePhotoUrl && !imgError ? (
                    <img 
                      src={data.identity.profilePhotoUrl} 
                      alt={data.identity.name} 
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ProfilePhotoPlaceholder />
                  )}
                </div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-right-8 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-2 z-20"
              >
                <span className="text-blue-500 text-xl">🎨</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-700">Artist</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-6 sm:-left-12 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-2 z-20"
              >
                <span className="text-purple-500 text-xl">💻</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-700">Creator</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export function QuickFacts({ data }: { data: BiographyData }) {
  const bgColors = [
    'bg-blue-50/80 hover:bg-blue-100/80 border-blue-100',
    'bg-purple-50/80 hover:bg-purple-100/80 border-purple-100',
    'bg-pink-50/80 hover:bg-pink-100/80 border-pink-100',
    'bg-orange-50/80 hover:bg-orange-100/80 border-orange-100'
  ];
  const textColors = ['text-blue-600', 'text-purple-600', 'text-pink-600', 'text-orange-600'];

  return (
    <section className="py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.quickFacts.map((fact, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`backdrop-blur-md rounded-[32px] p-8 border shadow-sm flex flex-col items-center justify-center text-center transition-colors ${bgColors[index % bgColors.length]}`}
            >
              <p className={`text-xs font-black uppercase tracking-tighter mb-2 ${textColors[index % textColors.length]}`}>{fact.label}</p>
              <p className="text-slate-900 font-bold text-lg">{fact.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About({ data }: { data: BiographyData }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">About Me</h2>
          <p className="text-lg font-semibold text-slate-500 uppercase tracking-widest">A little about who I am</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden bg-white/60 backdrop-blur-md p-4 border border-white/50 shadow-sm relative z-10">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                {data.identity.profilePhotoUrl && !imgError ? (
                  <img 
                    src={data.identity.profilePhotoUrl} 
                    alt={`${data.identity.name} portrait`}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 text-center p-8">
                     <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4 opacity-50">KA</div>
                     <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Portrait Photo</p>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-purple-200 rounded-[40px] -z-10 opacity-30 blur-xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="text-slate-600 text-lg leading-relaxed mb-10 space-y-6">
              <p>{data.about.text1}</p>
              <p>{data.about.text2}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               <div className="bg-blue-50/60 backdrop-blur-md rounded-3xl p-6 border border-blue-100 shadow-sm transition-colors hover:bg-blue-100/60">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center mb-4 text-white shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">My Focus</h4>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Learning • Creating</p>
               </div>
               <div className="bg-purple-50/60 backdrop-blur-md rounded-3xl p-6 border border-purple-100 shadow-sm transition-colors hover:bg-purple-100/60">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-400 flex items-center justify-center mb-4 text-white shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">My Passion</h4>
                  <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest">Tech + Creativity</p>
               </div>
               <div className="bg-orange-50/60 backdrop-blur-md rounded-3xl p-6 border border-orange-100 shadow-sm transition-colors hover:bg-orange-100/60">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-yellow-400 flex items-center justify-center mb-4 text-white shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">My Vision</h4>
                  <p className="text-xs font-semibold text-orange-600 uppercase tracking-widest">Building the Future</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
