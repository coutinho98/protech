import { useState } from 'react';
import { ShieldAlert, Swords, DoorOpen, Target, Lock, ArrowDownCircle } from 'lucide-react';
import introductionImage from '../assets/img/introduction.jpg';
import escape from '../assets/img/escape.jpg';
import guard from '../assets/img/howtoguard.jpg';
import offensive from '../assets/img/offensive.jpg';
import guardpassing from '../assets/img/guardpassing.jpg';
import takedowns from '../assets/img/takedowns.jpg';

const CourseOverview = () => {
    const [activeTab, setActiveTab] = useState(0);

    const modules = [
        {
            title: "Introduction",
            desc: "Solve the biggest problems in NoGi through basic concepts applied to the most challenging situations.",
            icon: <DoorOpen size={24} />,
            image: introductionImage
        },
        {
            title: "Escape from the Pressure",
            desc: "Learn how to escape unfavorable positions with calmness and technical knowledge during the fight.",
            icon: <ShieldAlert size={24} />,
            image: escape
        },
        {
            title: "The NoGi Guard",
            desc: "Understand the core differences between Gi and NoGi. See how simple shifts in mindset lead to remarkable results.",
            icon: <Swords size={24} />,
            image: guard
        },
        {
            title: "Offensive Guard",
            desc: "Master guard retention and create dilemmas for your opponent. Explore high-percentage NoGi attacks.",
            icon: <Target size={24} />,
            image: offensive
        },
        {
            title: "Guard Passing",
            desc: "Position yourself so dominantly that your opponent feels frustrated. Learn the signature Pirâmide passes.",
            icon: <Lock size={24} />,
            image: guardpassing
        },
        {
            title: "Takedowns",
            desc: "Lose the fear of starting on your feet. Drastically reduce injury risks through proper technical mechanics.",
            icon: <ArrowDownCircle size={24} />,
            image: takedowns
        }
    ];

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="absolute inset-0 opacity-30 z-0"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
                    backgroundSize: "30px 30px",
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
                }}
            />
            <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
                <div className="max-w-2xl mb-10">
                    <h2 className="font-[inter] text-red-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">Course Overview</h2>
                    <h3 className="font-[inter] text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
                        The <span className="text-zinc-500">Masterclass</span>
                    </h3>
                    <p className="font-[inter] text-zinc-400 mt-6 text-lg leading-relaxed font-light">
                        Master the core principles of NoGi grappling by tackling the most common challenges faced by everyone from beginners to seasoned black belts. This course bridges the gap between Gi and NoGi, revealing the unique mindset and technical edge of <span className="text-white font-medium italic">Pirâmide Grappling</span>.
                    </p>
                    <p className="font-[inter] text-zinc-400 mt-4 text-lg leading-relaxed font-light">
                        Structured into 9 comprehensive modules—from <span className="text-white italic">Escapes</span> to <span className="text-white italic">Takedowns</span>—this program provides the essential tools to remarkably transform your fighting style through the expert guidance of <span className="text-white font-semibold">Marco Aurellio de Queiroz</span>.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="flex flex-col space-y-4">
                        {modules.map((mod, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`group cursor-pointer p-6 rounded-xl border transition-all duration-500 overflow-hidden ${activeTab === index
                                    ? "bg-zinc-900/80  shadow-[0_0_30px_rgba(220,38,38,0.1)]"
                                    : "bg-transparent border-white/5 hover:bg-zinc-900/80"
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <span className={`transition-colors duration-500 ${activeTab === index ? "text-red-500" : "text-zinc-500"}`}>
                                            {mod.icon}
                                        </span>
                                        <div>
                                            <h4 className={`font-[inter] text-xl font-bold uppercase tracking-tight transition-colors ${activeTab === index ? "text-white" : "text-zinc-400"}`}>
                                                {mod.title}
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                <div className={`transition-all duration-500 ease-in-out ${activeTab === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                                    }`}>
                                    <p className="font-[inter] text-left text-white text-sm leading-relaxed">
                                        {mod.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative sticky top-24 group">
                        <div className="absolute -inset-2 bg-red-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                        <div className="relative aspect-[4/5] lg:aspect-square w-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                            {modules.map((mod, index) => (
                                <img
                                    key={index}
                                    src={mod.image}
                                    alt={mod.title}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform ${activeTab === index
                                        ? "opacity-100 scale-100 rotate-0"
                                        : "opacity-0 scale-110 rotate-1"
                                        }`}
                                />
                            ))}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-px w-8 bg-red-600" />
                                    <span className="text-red-500 font-black italic uppercase tracking-widest text-xs">Module 0{activeTab + 1}</span>
                                </div>
                                <h5 className="text-2xl font-black text-white uppercase tracking-tighter italic">
                                    {modules[activeTab].title}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex justify-center">
                    <button className="bg-red-700 hover:bg-red-600 text-white font-black py-4 px-12 rounded-sm transition-all shadow-[0_0_30px_rgba(185,28,28,0.3)] uppercase text-sm tracking-widest cursor-pointer">
                        Enroll Now and Transform Your Game
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CourseOverview;