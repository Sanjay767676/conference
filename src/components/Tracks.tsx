import React, { useState } from "react";
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
    <section id="tracks" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="tracks-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary font-semibold text-xs rounded-full uppercase tracking-wider mb-4">
            <Icons.Cpu className="w-3.5 h-3.5 text-primary" />
            <span>Academic Frontiers</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight mb-4">
            Conference Tracks
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            AIET 2026 welcomes original research papers, reviews, and case study submissions covering technical frameworks and foundational theory across eight core tracks.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="tracks-grid">
          {CONFERENCE_TRACKS.map((track, idx) => {
            const isHovered = hoveredIndex === idx;
            const isSelected = selectedTrackId === track.id;

            return (
              <motion.div
                key={track.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedTrackId(isSelected ? null : track.id)}
                className={`group cursor-pointer p-6 bg-white border rounded-2xl transition-all duration-300 flex flex-col justify-between gap-4 select-none relative ${
                  isSelected
                    ? "border-primary ring-2 ring-primary/10 shadow-lg"
                    : "border-slate-100 hover:border-primary/30 hover:shadow-xl hover:shadow-slate-100/80"
                }`}
                layout
              >
                {/* Core Details */}
                <div className="flex flex-col items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected || isHovered 
                      ? "bg-primary text-white" 
                      : "bg-primary-light text-primary"
                  }`}>
                    {renderIcon(track.iconName)}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-brand-dark group-hover:text-primary transition-colors">
                    {track.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Sub-topics list */}
                <div className="mt-2 pt-4 border-t border-slate-50">
                  <div className="flex items-center justify-between text-xs font-semibold text-primary">
                    <span>{isSelected ? "Hide Topics" : "View Sub-topics"}</span>
                    <Icons.ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                      isSelected ? "rotate-90 text-primary" : "text-slate-400 group-hover:text-primary"
                    }`} />
                  </div>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden mt-3 space-y-2"
                      >
                        {track.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600">
                            <Icons.Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
