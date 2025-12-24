import logo from '../assets/img/logo.png';
import { Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 w-full bg-black border-t border-white/5 pt-20 pb-10 overflow-hidden font-[inter]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="md:col-span-1 flex flex-col items-center md:items-start  md:text-left text-left">
                        <img
                            src={logo}
                            alt="BJJPro Masterclass"
                            className="h-14 w-auto mb-6 mr-25 "
                        />
                        <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-widest font-medium">
                            The definitive technical system for NoGi grappling. Control, efficiency, and high-performance concepts for elite competitors.
                        </p>
                    </div>

                    <div className="text-left md:text-left">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6 italic">Navigation</h4>
                        <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                            <li><a href="#" className="hover:text-red-600 transition-colors">Course Content</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Testimonials</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Instructor Profile</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Curriculum</a></li>
                        </ul>
                    </div>

                    <div className="text-left md:text-left">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6 italic">Legal</h4>
                        <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                            <li><a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Terms of Use</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Refund Policy</a></li>
                        </ul>
                    </div>

                    <div className="text-left md:text-left">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6 italic">Connect</h4>
                        <div className="flex justify-start md:justify-start gap-4 mb-6">
                            <a href="#" className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-500 hover:text-red-600 hover:border-red-600/30 transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-500 hover:text-red-600 hover:border-red-600/30 transition-all">
                                <Youtube size={18} />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-500 hover:text-red-600 hover:border-red-600/30 transition-all">
                                <Mail size={18} />
                            </a>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                            Support: <span className="text-zinc-400">support@bjjprotech.com</span>
                        </p>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between  gap-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                        &copy; {currentYear} BJJPro. All Rights Reserved.
                    </p>
                    <a
                        href="https://coutinho98.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-2 text-[10px] tracking-[0.3em] transition-all duration-300"
                    >
                        <div className="flex items-center gap-1.5 font-black  text-zinc-400 group-hover:text-red-600 transition-colors">
                            <span className="relative font-[inter]">
                                by coutinho98
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;