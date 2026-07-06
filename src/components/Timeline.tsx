import { motion } from "motion/react";
import { Calendar, Clock, AlertCircle } from "lucide-react";
import { TIMELINE_EVENTS } from "../data";

export default function Timeline() {
  const currentDate = new Date();

  // Helper to parse dates like "October 16, 2026" or "October 23-28, 2026"
  const parseEventDate = (dateStr: string) => {
    let normalizedDate = dateStr;
    if (dateStr.includes("-")) {
      const parts = dateStr.split("-");
      const monthAndStartDay = parts[0]; 
      const yearPart = dateStr.substring(dateStr.length - 4); 
      normalizedDate = `${monthAndStartDay}, ${yearPart}`;
    }
    const d = new Date(normalizedDate);
    d.setHours(23, 59, 59, 999); // End of the day
    return d;
  };

  let foundNextEvent = false;
  const eventsWithState = TIMELINE_EVENTS.map(event => {
    const eventDate = parseEventDate(event.date);
    const isPast = currentDate > eventDate;
    
    let isActive = false;
    if (!isPast && !foundNextEvent) {
      isActive = true;
      foundNextEvent = true;
    }

    return { ...event, isPast, isActive };
  });

  return (
    <section id="timeline" className="py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (35% / 4 cols) - Header & Static Badge */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28" id="timeline-header-col">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary font-semibold text-xs rounded-full uppercase tracking-wider mb-4">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span>Deadlines & Dates</span>
            </div>
            
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark tracking-tight leading-tight mb-4">
              Submission Timeline
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Please keep track of these important milestones to ensure your manuscripts, review responses, and delegate registrations are processed in time.
            </p>

            {/* Note on publication */}
            <div className="mt-6 flex items-start gap-2.5 p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-800 text-xs leading-relaxed max-w-sm">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Submission Policy:</strong> Full manuscripts must follow the Wiley paper format. All submitted papers are subjected to dual peer-reviews.
              </span>
            </div>
          </div>

          {/* Right Column (65% / 7 cols) - Timeline List */}
          <div className="lg:col-span-7" id="timeline-list-col">
            <div className="space-y-0 relative pl-4 md:pl-6 border-l-2 border-slate-100" id="timeline-rows-container">
              {eventsWithState.map((event, idx) => {
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="relative pb-10 last:pb-0"
                  >
                    {/* Circle Node Indicator */}
                    <div className={`absolute -left-[25px] md:-left-[33px] top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                      event.isPast 
                        ? "border-rose-500 bg-rose-500 scale-110" 
                        : event.isActive 
                          ? "border-primary bg-white ring-4 ring-primary/30 scale-125 animate-pulse" 
                          : "border-slate-300 bg-white"
                    }`}>
                      {event.isPast && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      )}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8 bg-slate-50/50 hover:bg-slate-50 p-5 rounded-2xl border border-transparent hover:border-slate-100 transition-all">
                      {/* Left: Milestone Title & Description */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1.5">
                          <h3 className="font-semibold text-base text-brand-dark">
                            {event.title}
                          </h3>
                          {event.isPast && (
                            <span className="px-2 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-bold uppercase tracking-wider rounded-md">
                              Passed
                            </span>
                          )}
                          {event.isActive && (
                            <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-md">
                              Current Phase
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-lg">
                          {event.description}
                        </p>
                      </div>

                      {/* Right: Date block with aesthetic styling */}
                      <div className="flex items-center gap-2 md:self-center bg-white px-4 py-2.5 rounded-xl border border-slate-100 flex-shrink-0 shadow-sm">
                        <Clock className={`w-4 h-4 ${event.isActive ? "text-primary animate-pulse" : "text-slate-400"}`} />
                        <span className={`text-xs font-mono font-semibold ${event.isActive ? "text-primary" : "text-brand-dark"}`}>
                          {event.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
