import { motion } from 'framer-motion';
import thiago from '../assets/img/thiago.webp';
import guilhermo from '../assets/img/guilhermo.webp';
import paulo from '../assets/img/pedro.webp';
import narcisio from '../assets/img/narcisio.webp';

const Testimonials = () => {
    const baseReviews = [
        {
            name: "Paulo Alexandre Prado",
            text: "Excellent. A tremendous amount of knowledge shared.",
            img: paulo
        },
        {
            name: "Thiago Cota Regis",
            text: "Content with excellent fundamentals.",
            img: thiago
        },
        {
            name: "Guillermo Rosillo Rey",
            text: "Magnificent course and instructor, the classes are very well explained!",
            img: guilhermo
        },
        {
            name: "Narcisio Sampaio",
            text: "The positions are top-notch, but what really keeps me engaged is the quality of the lessons. I'm extremely satisfied.",
            img: narcisio
        }
    ];

    const reviews = [...baseReviews, ...baseReviews];

    return (
        <section className="font-[inter] relative z-10 w-full py-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">Testimonials</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-none">
                    What Students <span className="text-zinc-500 font-serif text-3xl md:text-4xl">Are Saying</span>
                </h3>
            </div>

            <div className="flex overflow-hidden relative">
                <motion.div
                    className="flex space-x-8"
                    style={{ width: "max-content" }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity
                    }}
                >
                    {reviews.map((rev, index) => (
                        <div
                            key={index}
                            className="w-[450px] min-h-[250px] flex flex-col justify-between flex-shrink-0 bg-zinc-900/30 backdrop-blur-md border border-white/5 p-10 rounded-2xl relative group hover:bg-zinc-900/50 transition-colors"
                        >
                            <p className="text-white text-xl font-light italic leading-relaxed whitespace-normal mb-8 relative z-10">
                                "{rev.text}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="h-14 w-14 rounded-full border-2 border-red-600 overflow-hidden shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                                    <img
                                        src={rev.img}
                                        alt={rev.name}
                                        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div>
                                    <p className="text-white font-black tracking-tight text-sm uppercase italic">{rev.name}</p>
                                    <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Student / Verified</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black via-black/90 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />
        </section>
    );
};

export default Testimonials;