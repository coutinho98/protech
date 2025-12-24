import { Check, Star, Smartphone, Globe, ShieldCheck, Infinity as InfinityIcon } from 'lucide-react';

const PricingCards = () => {
    return (
        <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 font-[inter]">
            <div className="grid md:grid-cols-2 gap-8">
                
                <div className="relative group bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl flex flex-col justify-between hover:border-red-500/30 transition-all duration-500">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                For BJJPro Members
                            </span>
                            <div className="flex items-center gap-1 text-yellow-500">
                                <Star size={14} fill="currentColor" />
                                <span className="text-sm font-bold text-white">4.6</span>
                                <span className="text-zinc-500 text-xs">(45 reviews)</span>
                            </div>
                        </div>
                        
                        <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2">Subscriber Access</h3>
                        <p className="text-zinc-400 text-sm mb-8">Full access included in your current active subscription plan.</p>
                        
                        <div className="mb-8">
                            <div className="text-4xl font-black text-white italic">FREE</div>
                            <div className="text-zinc-500 line-through text-sm">USD 27.00</div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-zinc-400 text-sm">
                                <Check size={18} className="text-red-600" /> Included in all plans
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400 text-sm">
                                <Smartphone size={18} className="text-red-600" /> Mobile & Tablet Access
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400 text-sm">
                                <Globe size={18} className="text-red-600" /> Language: Portuguese
                            </li>
                        </ul>
                    </div>

                    <button className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white cursor-pointer font-bold rounded-xl transition-all uppercase text-xs tracking-widest">
                        Check My Plan
                    </button>
                </div>

                <div className="relative group bg-white p-0.5 rounded-3xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(220,38,38,0.15)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 rounded-3xl opacity-100"></div>
                    
                    <div className="relative bg-zinc-950 h-full w-full rounded-[1.4rem] p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    One-time purchase
                                </span>
                                <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                                    <InfinityIcon size={14} className="text-red-600" /> Lifetime
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2">Lifetime Access</h3>
                            <p className="text-zinc-400 text-sm mb-8">Own this course forever with a single payment. No subscriptions needed.</p>

                            <div className="mb-8">
                                <div className="text-4xl font-black text-white italic">USD 27.00</div>
                                <div className="text-zinc-500 text-sm italic font-medium">Full Course + All Modules</div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-zinc-300 text-sm">
                                    <Check size={18} className="text-red-600" /> 03:46:29 of High-Quality Video
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300 text-sm">
                                    <ShieldCheck size={18} className="text-red-600" /> 7-Day Money Back Guarantee
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300 text-sm">
                                    <Check size={18} className="text-red-600" /> 54 Comprehensive Lessons
                                </li>
                            </ul>
                        </div>

                        <button className="w-full py-4 bg-red-700 hover:bg-red-600 text-white font-black cursor-pointer rounded-xl transition-all uppercase text-xs tracking-widest shadow-lg shadow-red-900/20">
                            Buy Lifetime Access Now
                        </button>
                    </div>
                </div>

            </div>

            <div className="mt-16 text-center">
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Focus Areas & Categories</p>
                <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                    {["Turtle Position", "General Concepts", "Back Control", "Knee on Belly", "Stand-up", "Open Guard", "Side Control", "Mount", "Fundamentals"].map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-zinc-900/50 border border-white/5 rounded-lg text-zinc-500 text-[10px] font-bold uppercase tracking-widest hover:text-red-500 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingCards;