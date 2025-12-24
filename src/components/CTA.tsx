import { Infinity, ShieldCheck, LayoutGrid, Clock } from 'lucide-react';

const Cta = () => {
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
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%)',
                    maskImage: 'linear-gradient(to bottom, transparent, black 20%)',
                }}
            />

            <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">

                    <div className="group bg-zinc-900/40 backdrop-blur-md  p-8 rounded-xl ">
                        <div className="mb-7 inline-block text-red-500 ">
                            <Infinity size={28} />
                        </div>
                        <h3 className="text-white font-bold text-lg uppercase tracking-tight">Lifetime Access</h3>
                        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                            The content will be available forever on our platform for you to watch at your own pace.
                        </p>
                    </div>


                    <div className="group bg-zinc-900/40 backdrop-blur-md  p-8 rounded-xl">
                        <div className="mb-7 inline-block text-red-500 ">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-white font-bold text-lg uppercase tracking-tight">7-Day Guarantee</h3>
                        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                            Full money-back guarantee within 7 days of purchase.
                        </p>
                    </div>

                    <div className="group bg-zinc-900/40 backdrop-blur-md  p-8 rounded-xl">
                        <div className="mb-7 inline-block text-red-500 ">
                            <LayoutGrid size={28} />
                        </div>
                        <h3 className="text-white font-bold text-lg uppercase tracking-tight">10 Modules</h3>
                        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                            Structured modules to make your learning journey smooth.
                        </p>
                    </div>

                    <div className="group bg-zinc-900/40 backdrop-blur-md  p-8 rounded-xl">
                        <div className="mb-7 inline-block text-red-500 ">
                            <Clock size={28} />
                        </div>
                        <h3 className="text-white font-bold text-lg uppercase tracking-tight">3h+ Video</h3>
                        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                            Over 3 hours of high-quality technical content.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cta;