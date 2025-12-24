import { Trophy, GraduationCap, X, Medal } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const InstructorProfile = ({ isOpen, onClose }: ModalProps) => {
    if (!isOpen) return null;

    const achievements = [
        "Rio Fall Champion 2024", "Curitiba Summer Champion 2023",
        "South Brazilian NoGi Champion 2023", "AJP Grand Prix NO-GI Weight & Absolute Champion 2022",
        "Betim Open NoGi Champion 2022", "Rio Winter Open NoGi Champion 2022",
        "Floripa Winter Open NoGi Champion 2022", "Salvador Fall Open NoGi Champion 2022",
        "FJJD Rio State NoGi Champion 2022", "Balneário Camboriú Weight & Absolute Champion 2021",
        "Rio Open NO-GI Champion 2021", "Brazilian NoGi National Champion 2019",
        "NAGA Germany Champion 2019", "South Brazilian NoGi Champion (CBJJ) 2019",
        "SJJSAF NoGi Challenge Champion 2018", "SJJSAF Pan-American Champion 2018",
        "São Paulo Open NoGi IBJJF Champion 2018", "CBJJO South American Champion 2018",
        "Curitiba Open NoGi IBJJF Champion 2017", "Maximus Cup Champion 2017",
        "Alfabarra Cup Champion 2017", "Antofagasta Champion 2016",
        "CBJJO Brazilian Champion 2015", "Rio Challenge Champion 2015",
        "Jacarepaguá NoGi Cup Champion 2015"
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            <div className="relative bg-zinc-950  w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col rounded-xl shadow-2xl">

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 text-zinc-500 hover:text-white transition-colors p-2 bg-zinc-900/50 rounded-full cursor-pointer"
                >
                    <X size={24} />
                </button>

                <div className="overflow-y-auto p-8 md:p-16 custom-scrollbar">
                    <div className="grid lg:grid-cols-12 gap-12">

                        <div className="lg:col-span-7 space-y-8">
                            <div>
                                <span className="text-red-500 text-xs font-bold uppercase tracking-[0.3em]">Instructor Profile</span>
                                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-none mt-2">
                                    Marco Aurellio <br />
                                    <span className="text-red-600">de Queiroz</span>
                                </h2>
                                <div className="h-1 w-16 bg-red-600 mt-6"></div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 text-red-500">
                                    <GraduationCap size={24} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-white font-bold text-xl uppercase tracking-tight italic">Biography</h3>
                                    <p className="text-zinc-400 leading-relaxed text-lg font-light text-justify">
                                        Certified Black Belt recognized by the <span className="text-white font-medium">IBJJF</span>.
                                        Head of the <span className="text-white italic">Pirâmide Grappling Association</span>,
                                        Marco Aurellio is a pioneer of NoGi Brazilian Jiu-Jitsu in Brazil.
                                        With over 20 international seminars and decades of competition experience,
                                        he has forged numerous World, European, and Pan-American champions.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-lg">
                                <p className="text-red-200 text-sm font-medium italic">
                                    "A pioneer institution for NoGi Brazilian Jiu-Jitsu in Brazil, training elite champions across the globe."
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-zinc-900/30  rounded-2xl p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                                    <Trophy className="text-red-600" size={24} />
                                    <h3 className="text-white font-black uppercase tracking-widest text-sm">Championship Titles</h3>
                                </div>

                                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                                    {achievements.map((title, index) => (
                                        <div key={index} className="flex items-start gap-3 group">
                                            <Medal size={14} className="mt-1 text-red-800 group-hover:text-red-500 transition-colors" />
                                            <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-[13px] leading-tight">
                                                {title}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900/80 backdrop-blur-md p-6 border-t border-white/5 flex justify-center">
                    <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-sm transition-all shadow-xl uppercase text-sm tracking-widest cursor-pointer">
                        Enroll in the Masterclass
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstructorProfile;