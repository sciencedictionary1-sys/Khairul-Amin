import { useState } from 'react';
import { motion } from 'motion/react';
import { BiographyData } from '../types';
import { Mail, Facebook, Youtube, Instagram, Github, Globe, Link as LinkIcon, Phone, MessageCircle, Copy, Check } from 'lucide-react';

export function Contact({ data }: { data: BiographyData }) {
  const contact = data.contactInformation;
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  
  const handleCopy = (text: string, id: string) => {
    if (text) {
      navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [id]: false }));
      }, 2000);
    }
  };
  
  // If contact info is missing or completely empty, we can still show the section 
  // but maybe it just shows the message if no links are provided.
  
  const hasSocials = contact && (contact.facebook || contact.youtube || contact.instagram || contact.github || contact.website || contact.whatsapp || contact.other);
  const hasEmail = contact && contact.email;
  const hasPhone = contact && contact.phone;
  
  const socialPlatforms = [
    { id: 'facebook', name: 'Facebook', url: contact?.facebook, icon: Facebook, desc: 'Connect and follow my updates.', color: 'from-blue-600 to-blue-500' },
    { id: 'youtube', name: 'YouTube', url: contact?.youtube, icon: Youtube, desc: 'Watch my videos and creative work.', color: 'from-red-600 to-red-500' },
    { id: 'instagram', name: 'Instagram', url: contact?.instagram, icon: Instagram, desc: 'See my latest visual content.', color: 'from-pink-600 to-purple-600' },
    { id: 'whatsapp', name: 'WhatsApp', url: contact?.whatsapp ? `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}` : '', icon: MessageCircle, desc: 'Send me a direct message.', color: 'from-green-500 to-emerald-500' },
    { id: 'github', name: 'GitHub', url: contact?.github, icon: Github, desc: 'Explore my code and projects.', color: 'from-slate-800 to-slate-700' },
    { id: 'website', name: 'Personal Website', url: contact?.website, icon: Globe, desc: 'Visit my other online spaces.', color: 'from-teal-500 to-emerald-500' },
    { id: 'other', name: 'Other', url: contact?.other, icon: LinkIcon, desc: 'Discover more about my work.', color: 'from-orange-500 to-amber-500' }
  ].filter(platform => platform.url); // Only keep platforms with a URL

  return (
    <section id="contact" className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4"
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Want to know more about my journey, my work, or my projects? Connect with me.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Visual Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-[32px] p-10 text-white shadow-xl relative overflow-hidden h-full flex flex-col justify-center min-h-[400px]"
          >
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-400/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="relative z-10 space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                  Connect With Me
                </span>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                  {data.identity.name}
                </h3>
                <p className="text-white/80 font-medium text-lg">
                  {data.identity.tagline}
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-2xl font-bold italic opacity-90">
                  "Thank you for visiting my story."
                </p>
                <p className="text-white/80 leading-relaxed">
                  This website represents my journey, my creativity, my projects, and my dreams. If you'd like to connect with me or learn more about my work, you can find me through the links below.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Links */}
          <div className="lg:col-span-7 space-y-6">
            
            {hasEmail && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 border border-white/50 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-1">Email Me</h4>
                    <p className="text-slate-500">{contact.email}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleCopy(contact.email || '', 'email')}
                    className="inline-flex items-center justify-center p-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors"
                    title="Copy Email"
                  >
                    {copiedStates['email'] ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                  </button>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors whitespace-nowrap"
                  >
                    Send Email
                  </a>
                </div>
              </motion.div>
            )}

            {hasPhone && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 border border-white/50 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-green-500 to-emerald-400 text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-1">Call Me</h4>
                    <p className="text-slate-500">{contact.phone}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleCopy(contact.phone || '', 'phone')}
                    className="inline-flex items-center justify-center p-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedStates['phone'] ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                  </button>
                  <a 
                    href={`tel:${contact.phone}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors whitespace-nowrap"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>
            )}

            {hasSocials && (
              <div className="grid sm:grid-cols-2 gap-6">
                {socialPlatforms.map((platform, idx) => {
                  const Icon = platform.icon;
                  return (
                    <motion.div
                      key={platform.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-all group relative overflow-hidden flex flex-col h-full"
                    >
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${platform.color} opacity-50`} />
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${platform.color} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                          <Icon size={24} />
                        </div>
                        <h4 className="font-bold text-lg text-slate-900">{platform.name}</h4>
                      </div>
                      
                      <p className="text-slate-600 text-sm mb-6 flex-grow">{platform.desc}</p>
                      
                      <div className="flex gap-2 w-full mt-auto">
                        <button 
                          onClick={() => handleCopy(platform.url || '', platform.id)}
                          className="flex items-center justify-center p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                          title={`Copy ${platform.name} Link`}
                        >
                          {copiedStates[platform.id] ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                        </button>
                        <a 
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-grow items-center justify-between px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-semibold text-sm transition-colors"
                          aria-label={`Visit my ${platform.name} profile`}
                        >
                          Visit Profile
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
            
            {!hasEmail && !hasSocials && !hasPhone && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/40 backdrop-blur-md rounded-[32px] p-8 border border-slate-200/50 flex flex-col items-center justify-center text-center h-full min-h-[300px]"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4">
                  <Mail size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Check Back Later</h4>
                <p className="text-slate-500 max-w-sm">Contact information and social links will be available soon.</p>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
