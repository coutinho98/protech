import { useState } from 'react';
import videoChamada from '../assets/videos/eng.mov';
import InstructorProfile from './InstructorProfile';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen w-full bg-black relative overflow-hidden flex items-center font-[inter] pt-20">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000",
                }}
            />
            <main className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="flex flex-col space-y-6 lg:col-span-5">
                        <div className="inline-block">
                            <span className="bg-red-600/20 border border-red-500/50 text-red-500 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
                                NoGi Masterclass
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
                            Fundamental <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                                NoGi Concepts
                            </span>
                        </h1>
                        <p className="text-xl text-zinc-400 font-light max-w-xl">
                            Master the art of grappling with <span className="text-white font-semibold font-serif italic">Marco Aurellio de Queiroz</span>.
                            A technical submission-focused immersion built on control, pressure, and pure efficiency.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="bg-red-700 hover:bg-red-600 text-white cursor-pointer font-semibold py-4 px-8 rounded-sm transition-all shadow-[0_0_20px_rgba(185,28,28,0.3)] uppercase text-sm">
                                Start Learning Now
                            </button>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="border border-zinc-700 hover:bg-zinc-900 text-white cursor-pointer font-bold py-4 px-10 rounded-sm transition-all uppercase text-sm"
                            >
                                View Curriculum
                            </button>
                        </div>
                    </div>

                    <div className="relative group lg:col-span-7 w-full">
                        <div className="absolute -inset-2 bg-red-600 rounded-xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                        <div className="relative aspect-video w-full bg-black rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                            <video
                                className="w-full h-full object-cover"
                                controls
                            >
                                <source src={videoChamada} type="video/mp4" />
                                <source src={videoChamada} type="video/quicktime" />
                                Your browser does not support videos.
                            </video>
                        </div>

                        <div className="absolute -bottom-12 -right-6 z-20 bg-red-700 text-white p-5 hidden lg:block rounded-md shadow-2xl border border-red-500/30">
                            <p className="text-[10px] uppercase font-semibold tracking-[0.2em] text-red-100">Instant Access</p>
                            <p className="text-2xl font-black tracking-tighter italic leading-none">+30 LESSONS</p>
                        </div>
                    </div>
                </div>

                <InstructorProfile
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />


            </main>
        </div>
    );
};

export default Home;