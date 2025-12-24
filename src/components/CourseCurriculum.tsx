import { useState } from 'react';
import { ChevronDown, PlayCircle, Clock, BookOpen, ChevronUp } from 'lucide-react';

const CourseCurriculum = () => {
    const [openSections, setOpenSections] = useState<number[]>([0]);

    const toggleSection = (index: number) => {
        setOpenSections(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const curriculum = [
        {
            title: "INTRODUCTION",
            lessons: [
                { name: "WELCOME", time: "1:48" },
                { name: "DIFFERENCES BETWEEN GI AND NOGI", time: "6:49" },
                { name: "NOGI MINDSET", time: "8:12" }
            ]
        },
        {
            title: "ESCAPING THE PRESSURE",
            lessons: [
                { name: "MOUNT ESCAPE", time: "13:02" },
                { name: "BACK CONTROL ESCAPE", time: "5:13" },
                { name: "HEADLOCK ESCAPE", time: "6:10" },
                { name: "KNEE ON BELLY ESCAPE", time: "3:39" },
                { name: "SIDE CONTROL ESCAPE (100KG)", time: "4:52" },
                { name: "TURTLE POSITION ESCAPE", time: "5:35" }
            ]
        },
        {
            title: "PLAYING GUARD",
            lessons: [
                { name: "GI VS NOGI DYNAMICS", time: "4:04" },
                { name: "POSITIONING BY DISTANCE", time: "8:22" },
                { name: "GUARD RETENTION - CORE FUNDAMENTAL", time: "0:55" },
                { name: "THE 6 STAGES OF GUARD PASSING", time: "10:04" }
            ]
        },
        {
            title: "GUARD RETENTION MOVEMENTS",
            lessons: [
                { name: "INSIDE FEET POSITIONING", time: "1:08" },
                { name: "CROSS RECOMPOSITION", time: "0:50" },
                { name: "HIGH LEG RECOVERY", time: "1:11" },
                { name: "INVERTED SPIN (NORTH SOUTH)", time: "1:30" },
                { name: "EMERGENCY SPIN", time: "1:59" },
                { name: "SITTING SCISSOR SWEEP MOVEMENT", time: "2:08" },
                { name: "PENDULUM DRILL", time: "1:52" },
                { name: "INWARD ROLL SCISSOR", time: "1:44" },
                { name: "HIP ESCAPE - TRADITIONAL, REVERSE, AND SITTING", time: "3:20" }
            ]
        },
        {
            title: "SPECIFIC PASSING DEFENSE",
            lessons: [
                { name: "OVER-UNDER PASS RETENTION", time: "3:24" },
                { name: "BODY LOCK PASS RETENTION", time: "3:19" }
            ]
        },
        {
            title: "OFFENSIVE GUARD FUNDAMENTALS",
            lessons: [
                { name: "PUSH - PULL (DILEMMA)", time: "3:39" },
                { name: "HEAD HIGH - LOW (DILEMMA)", time: "1:59" },
                { name: "CONTRACTION - EXTENSION (DILEMMA)", time: "3:24" },
                { name: "LOWER LIMBS (DILEMMA)", time: "2:54" },
                { name: "UPPER LIMBS (DILEMMA)", time: "2:02" }
            ]
        },
        {
            title: "SWEEPS AND REVERSALS",
            lessons: [
                { name: "2 PHASES OF REVERSAL", time: "3:27" },
                { name: "REVERSALS 1 - ANKLE PICKS, KNEE PULL, ASHI WAZA", time: "4:26" },
                { name: "REVERSALS 2 - TRIPOD SWEEP", time: "2:52" },
                { name: "REVERSALS 3 - SUMI GAESHI", time: "3:44" }
            ]
        },
        {
            title: "GUARD PASSING",
            lessons: [
                { name: "CONCEPTUAL SOLUTIONS", time: "3:31" },
                { name: "THE PUSH PULL ASYMMETRY", time: "2:14" },
                { name: "THE PUSH - CURL ASYMMETRY", time: "3:08" },
                { name: "LEG VS LEG PASSING", time: "3:54" },
                { name: "TOREANDO PASS", time: "4:16" },
                { name: "FLOATING PASS", time: "4:21" },
                { name: "BODYLOCK PASS", time: "4:28" },
                { name: "HALF GUARD PASS", time: "3:41" },
                { name: "COMPLETING THE PASS - HIPS FIRST, THEN HEAD", time: "5:55" },
                { name: "ALWAYS BE READY FOR THE BACK TAKE", time: "3:10" }
            ]
        },
        {
            title: "TAKEDOWNS",
            lessons: [
                { name: "AVOID CARRYING YOUR OPPONENT'S WEIGHT", time: "3:15" },
                { name: "FOCUS ON HIGH-PERCENTAGE TAKEDOWNS", time: "5:34" },
                { name: "HAND FIGHTING WITH DIRECTION", time: "4:26" },
                { name: "THE CONSEQUENCES OF THE TAKEDOWN", time: "3:44" },
                { name: "DEFENSIVE POSTURE", time: "8:06" },
                { name: "OFFENSIVE POSTURE", time: "5:25" },
                { name: "ELBOW ANGLES (INTERNAL VS EXTERNAL)", time: "4:18" },
                { name: "HEAD POSITIONING", time: "4:46" },
                { name: "THE LAW OF ELBOW EXTENSION", time: "5:22" },
                { name: "CONCLUSION", time: "1:05" }
            ]
        },
        {
            title: "BONUS",
            lessons: [
                { name: "MAXIMIZE YOUR BJJPROTECH EXPERIENCE", time: "12:13" }
            ]
        }
    ];

    return (
        <section className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">Course Curriculum</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic mb-8">
                    What you will <span className="text-zinc-500 font-serif">Learn</span>
                </h3>

                <div className="flex flex-wrap justify-center gap-3">
                    <div className="bg-zinc-900/50 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                        <BookOpen size={14} className="text-red-600" />
                        <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">10 Sections</span>
                    </div>
                    <div className="bg-zinc-900/50 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                        <PlayCircle size={14} className="text-red-600" />
                        <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">54 Lessons</span>
                    </div>
                    <div className="bg-zinc-900/50 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                        <Clock size={14} className="text-red-600" />
                        <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">03:46:29 Total</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {curriculum.map((section, idx) => (
                    <div
                        key={idx}
                        className={`transition-all duration-300 border rounded-2xl overflow-hidden ${openSections.includes(idx)
                                ? "bg-zinc-900/60 border-red-600/40 shadow-[0_0_40px_rgba(220,38,38,0.08)]"
                                : "bg-zinc-900/20 border-white/5 hover:border-white/20"
                            }`}
                    >
                        <button
                            onClick={() => toggleSection(idx)}
                            className="w-full flex items-center justify-between p-6 text-left group cursor-pointer font-[inter] text-white"
                        >
                            <div className="flex items-center gap-5">
                                <span className={`text-xl font-black italic transition-colors ${openSections.includes(idx) ? "text-red-600" : "text-zinc-800"}`}>
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <h4 className={`font-bold uppercase tracking-tight text-sm md:text-base transition-colors ${openSections.includes(idx) ? "text-white" : "text-zinc-400"}`}>
                                    {section.title}
                                </h4>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="hidden sm:block text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                    {section.lessons.length} lessons
                                </span>
                                {openSections.includes(idx) ? <ChevronUp size={18} className="text-red-600" /> : <ChevronDown size={18} className="text-zinc-700" />}
                            </div>
                        </button>

                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openSections.includes(idx) ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"
                            }`}>
                            <div className="px-6 space-y-1">
                                {section.lessons.map((lesson, lIdx) => (
                                    <div
                                        key={lIdx}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group/item"
                                    >
                                        <div className="flex items-center gap-3">
                                            <PlayCircle size={14} className="text-zinc-700 group-hover/item:text-red-600 transition-colors" />
                                            <span className="text-xs font-medium text-zinc-400 group-hover/item:text-zinc-200 transition-colors uppercase">
                                                {lesson.name}
                                            </span>
                                        </div>
                                        <span className="text-[10px] font-mono text-zinc-700">{lesson.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CourseCurriculum;