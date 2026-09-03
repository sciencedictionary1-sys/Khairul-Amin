import { Camera, Sparkles, Image as ImageIcon, Star } from 'lucide-react';

export function ProfilePhotoPlaceholder() {
  return (
    <div className="w-full h-full bg-slate-100 flex items-center justify-center flex-col opacity-60">
      <Camera className="w-12 h-12 text-slate-400 mb-3" />
      <span className="font-bold text-slate-500">[Profile Photo]</span>
    </div>
  );
}

export function StoryPlaceholder() {
  return (
    <div className="w-full rounded-2xl bg-slate-100/50 border-2 border-dashed border-slate-200 p-6 flex flex-col items-center justify-center text-center">
      <Sparkles className="w-6 h-6 text-slate-400 mb-2" />
      <h3 className="text-sm font-bold text-slate-700 mb-1">Story Coming Soon</h3>
      <p className="text-xs text-slate-500">This chapter of my journey will be added soon.</p>
    </div>
  );
}

export function ProjectImagePlaceholder() {
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center text-center p-6 border-b border-white/50">
      <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-3 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        KA
      </div>
      <p className="text-sm font-bold text-slate-600">Project Preview</p>
      <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">Image coming soon</p>
    </div>
  );
}

export function EmptyArtworkPlaceholder() {
  return (
    <div className="w-full rounded-[32px] bg-white/60 backdrop-blur-md border border-white/50 shadow-sm p-12 lg:p-20 flex flex-col items-center justify-center text-center">
      <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-pink-100 to-orange-100 flex items-center justify-center mb-6 border border-white">
        <ImageIcon className="w-8 h-8 text-orange-400" />
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-2">More Artwork Coming Soon</h3>
      <p className="text-slate-500 max-w-md font-medium">"My creative collection will continue to grow."</p>
    </div>
  );
}

export function EmptyAchievementsPlaceholder() {
  return (
    <div className="w-full rounded-[32px] bg-white/60 backdrop-blur-md border border-white/50 shadow-sm p-12 flex flex-col items-center justify-center text-center">
      <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-blue-100 to-purple-100 flex items-center justify-center mb-6 border border-white">
        <Star className="w-8 h-8 text-blue-500" />
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-2">More Milestones Ahead</h3>
      <p className="text-slate-500 max-w-md font-medium">"My journey continues, and more milestones will be added here."</p>
    </div>
  );
}
