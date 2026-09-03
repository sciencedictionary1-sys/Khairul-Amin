import { biographyData } from './data';
import { Navigation } from './components/Navigation';
import { Hero, QuickFacts, About } from './components/HomeHero';
import { Story, Journey, Education } from './components/JourneyStory';
import { ExperienceSection } from './components/ExperienceSection';
import { TechnologyJourney } from './components/TechJourney';
import { Skills, Projects, Artwork } from './components/Creative';
import { Achievements, Gallery, Vision, Footer } from './components/Milestones';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="bg-[#FDFCFB] text-slate-800 min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900 relative overflow-x-hidden">
      {/* Global abstract background blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tl from-pink-200/40 to-orange-200/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <Navigation data={biographyData} />
      <main className="relative z-10">
        <Hero data={biographyData} />
        <QuickFacts data={biographyData} />
        <About data={biographyData} />
        <Story data={biographyData} />
        <Journey data={biographyData} />
        <ExperienceSection data={biographyData} />
        <Education data={biographyData} />
        <TechnologyJourney data={biographyData} />
        <Skills data={biographyData} />
        <Projects data={biographyData} />
        <Artwork data={biographyData} />
        <Achievements data={biographyData} />
        <Gallery data={biographyData} />
        <Vision data={biographyData} />
        <Contact data={biographyData} />
      </main>
      <Footer data={biographyData} />
    </div>
  );
}
