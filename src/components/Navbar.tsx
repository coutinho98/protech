import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import logo from '../assets/img/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = ['cta', 'courseoverview', 'testimonials', 'curriculum', 'pricing'];

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: 'Benefits', id: 'cta' },
        { name: 'Overview', id: 'courseoverview' },
        { name: 'Testimonials', id: 'testimonials' },
        { name: 'Curriculum', id: 'curriculum' },
        { name: 'Pricing', id: 'pricing' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled
                ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5'
                : 'py-8 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="BJJPro Masterclass"
                        className="h-15 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    />
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`relative text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${activeSection === link.id
                                ? 'text-red-600'
                                : 'text-zinc-500 hover:text-white'
                                }`}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full shadow-[0_0_8px_#dc2626]" />
                            )}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <a href="#pricing" className="hidden sm:flex items-center group">
                        <div className="relative overflow-hidden bg-white text-black px-8 py-2.5 rounded-full transition-all hover:bg-red-600 hover:text-white active:scale-95 shadow-lg">
                            <span className="relative z-10 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                <ShoppingCart size={14} />
                                Enroll Now
                            </span>
                        </div>
                    </a>

                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <div className={`md:hidden absolute w-full bg-zinc-950/98 backdrop-blur-3xl transition-all duration-500 ease-in-out border-b border-white/5 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="flex flex-col p-8 gap-6 text-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-xs font-bold uppercase tracking-[0.3em] transition-colors ${activeSection === link.id ? 'text-red-600' : 'text-zinc-500'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <hr className="border-white/5" />
                    <a
                        href="#pricing"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="bg-red-700 text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-center shadow-lg"
                    >
                        Enroll Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;