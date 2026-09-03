import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Story', href: '#story' },
  { name: 'Journey', href: '#journey' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Artwork', href: '#artwork' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Vision', href: '#vision' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

import { BiographyData } from '../types';

export function Navigation({ data }: { data?: BiographyData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-white/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleClick('#home'); }}
              className="flex items-center space-x-3 group"
            >
              {data?.identity.logoUrl ? (
                <img src={data.identity.logoUrl} alt="Logo" className="h-10 w-auto object-contain" />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform">
                  KA
                </div>
              )}
              <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block group-hover:text-blue-600 transition-colors">Khairul Amin</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6 text-sm font-semibold text-slate-500 uppercase tracking-widest">
            {navItems.slice(0, 6).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
                className="hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={() => handleClick('#story')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              My Story
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 bg-white/95 backdrop-blur-xl shadow-xl' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
              className="block px-3 py-3 rounded-md text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50/50 transition-colors uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
