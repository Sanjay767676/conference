import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { CONFERENCE_TRACKS } from "../data";

export default function Tracks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />;
    }
    return <Icons.Cpu className="w-6 h-6" />;
  };

  return (
    <section id="tracks" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="tracks-header">

          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark tracking-tight leading-tight mb-4">
            <span className="font-gambetta tracking-wide font-bold text-brand-dark">Call For Papers</span>
          </h2>
          <p className="text-lg text-brand-dark max-w-2xl mx-auto">
            <span className="font-gambetta tracking-wide font-semibold text-brand-dark">ICAIDIET'26</span> welcomes original research papers, reviews, and case study submissions covering technical frameworks and foundational theory across eight core tracks.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="tracks-grid">
          {CONFERENCE_TRACKS.map((track, idx) => {
            const isHovered = hoveredIndex === idx;
            const isSelected = selectedTrackId === track.id;

            return (
              <div key={track.id} className="h-full">
                <div className="w-full h-full bg-[#ffbf00] rounded-2xl shadow-sm transition-transform hover:-translate-y-1">
                  <motion.div
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedTrackId(isSelected ? null : track.id)}
                    className={`group cursor-pointer p-6 bg-transparent transition-all duration-300 flex flex-col justify-between gap-4 select-none relative h-full w-full text-left`}
                    layout
                  >
                    {/* Core Details */}
                    <div className="flex flex-col items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isSelected || isHovered
                        ? "bg-primary text-white"
                        : "bg-primary-light text-primary"
                        }`}>
                        {renderIcon(track.iconName)}
                      </div>

                      <h3 className="text-lg font-semibold text-brand-dark group-hover:text-primary transition-colors">
                        {track.title}
                      </h3>

                      <ul className="text-sm text-slate-950 font-medium leading-relaxed text-left list-disc pl-5 space-y-1">
                        {track.details?.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Sub-topics list */}

                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
