/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Play, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter, 
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const PROJECTS = [
  {
    title: "Paithalattam",
    category: "Feature Film",
    image: "https://scontent.fcok11-1.fna.fbcdn.net/v/t39.30808-6/490238846_1229023552123116_8482273643570115626_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=3oRureCdm1UQ7kNvwEcJCk6&_nc_oc=AdraqzT_99CFYfw9n6PFREHjTZLOjox0-0r7IPuG_y5aGWaiCaWYzSG9kl5l2tly-Jg&_nc_zt=23&_nc_ht=scontent.fcok11-1.fna&_nc_gid=dBLLC9ZpkIqaSYWs4qErVQ&_nc_ss=7a389&oh=00_Af3rWwqc3lvi3j0k7Rh1xG6QfdDz9US3DuF0y7cXC8zD2Q&oe=69D7B585",
  },
  {
    title: "oru parvai pothum",
    category: "music album",
    image: "https://scontent.fcok11-1.fna.fbcdn.net/v/t1.6435-9/107488329_180257370124970_146320750513276521_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=4pVOwgUnf8UQ7kNvwFoAaol&_nc_oc=Ado6nuLPkR61AwkobuSBiV6qU9QTXmh2KvN0OhRU3KJK8nQkubMjRdFt-zHn4FJi10Q&_nc_zt=23&_nc_ht=scontent.fcok11-1.fna&_nc_gid=BEK6Bymo6guut0iH2NqKAA&_nc_ss=7a389&oh=00_Af0RTlJBYUIzQCICd1nJn5iQ52XTbT3pt4B8NU6qua82Sg&oe=69F94A2B",
  },
  {
    title: "Knock & Run",
    category: "Short film",
    image: "https://scontent.fcok11-1.fna.fbcdn.net/v/t39.30808-6/547852277_24217586221274258_1033832732040898257_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ApFOHYDnswAQ7kNvwHG3iwc&_nc_oc=AdrF7CwuEeUv0MIMxP0KDQPNnuA7VaCy_TL_m9OwoRPji9Zf8aAm1oYgvKKI2h5FGWA&_nc_zt=23&_nc_ht=scontent.fcok11-1.fna&_nc_gid=g6poV4CmzBYKsupIu6f2nQ&_nc_ss=7a389&oh=00_Af1pyqTt0kso4dASVsurkj3gyFQRiKXTp5m-7WmSK_AKUw&oe=69D7BF2E",
  },
  {
    title: "Gad Bud",
    category: "web series",
    image: "https://scontent.fcok11-1.fna.fbcdn.net/v/t39.30808-6/598554957_26004664049171071_7622815817566820161_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=JMVTc1fXKdIQ7kNvwHEOJbK&_nc_oc=Ado0Y8UUyjiF3apPsMuwf-OdDy6VLcQwT6hzNT9Yii--RMP2nyWJ7ngUIBqxgx8qSeQ&_nc_zt=23&_nc_ht=scontent.fcok11-1.fna&_nc_gid=sPbcL2YJpnGb6xyWGD08RA&_nc_ss=7a389&oh=00_Af2jlYVy5qzSaNgtf55_hlVRmbBFgCa5Buak7ZRrIY7MZA&oe=69D7A7C3",
  },

  {
    title: "Vennilavaai Vandhaale",
    category: "Short Film",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYA93ac_aKI1qYpKL7dfa0k_0IGmX134SKhA&s",
  },
];

const CLIENTS = [
  "Sreerosh Productions", "Chakku Media"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-vfx-black selection:bg-vfx-accent selection:text-black">
      {/* Custom Cursor Effect (Optional but cinematic) */}
      <div className="fixed inset-0 pointer-events-none z-0 cinematic-gradient" />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-vfx-black/80 backdrop-blur-lg py-4 border-b border-white/5" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center overflow-hidden">
              <img 
                src="https://pasteboard.co/A3FJsrJdU99a.png" 
                alt="Mouse House VFX Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter uppercase">
              Mouse House <span className="text-vfx-accent">VFX</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About Us', 'Projects', 'Clients', 'Contact'].map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-sm font-medium text-gray-400 hover:text-vfx-accent transition-colors uppercase tracking-widest"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-vfx-black flex flex-col items-center justify-center gap-8"
          >
            {['Home', 'About Us', 'Projects', 'Clients', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-2xl font-display font-bold hover:text-vfx-accent transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-vfx-accent/30 bg-vfx-accent/5 text-vfx-accent text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Leading VFX Studio in South India
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight mb-8">
              Bringing <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-vfx-accent to-white">Imagination</span> to Life
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide mb-12 max-w-2xl mx-auto">
              Crafting visual excellence through cutting-edge technology and cinematic storytelling.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:pr-12"
              >
                <span className="relative z-10">View Our Work</span>
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
              </button>
              <button 
                onClick={() => scrollToSection('showreel')}
                className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-vfx-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-vfx-accent transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Watch Showreel
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-vfx-black/40 via-vfx-black/60 to-vfx-black z-10" />
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" 
            alt="Cinematic Background" 
            className="w-full h-full object-cover opacity-40 scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-vfx-accent to-transparent" />
        </motion.div>
      </section>

      {/* Showreel Section */}
      <section id="showreel" className="py-24 px-6 bg-vfx-gray">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden glass-panel shadow-2xl group">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/66lIZC0G4bs?autoplay=0&mute=1&controls=1&loop=1" 
              title="Mouse House VFX Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-us" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Mouse House VFX – <br/>
              <span className="text-vfx-accent">Crafting Visual Excellence</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Mouse House VFX is one of the leading VFX studios in South India, delivering high-quality visual effects for films, advertisements, and digital content. 
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Our team focuses on the intersection of creativity and technology, pushing the boundaries of cinematic storytelling to bring the most ambitious visions to the screen. From complex character animation to breathtaking environments, we handle every frame with precision.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-white mb-2">10+</h4>
                <p className="text-xs text-vfx-accent uppercase tracking-widest font-bold">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-2">200+</h4>
                <p className="text-xs text-vfx-accent uppercase tracking-widest font-bold">Projects Delivered</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1000" 
                alt="Studio Work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 p-8 glass-panel rounded-2xl hidden lg:block">
              <p className="text-sm font-medium italic">"Innovation is our core engine."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-vfx-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-vfx-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-bold">Our Work Speaks <br/>for Itself</h2>
            </div>
            <button className="text-sm font-bold uppercase tracking-widest border-b border-vfx-accent pb-2 hover:text-vfx-accent transition-colors">
              View Full Archive
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vfx-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-vfx-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-32 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Trusted by Creative Professionals</h2>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-50">
            {CLIENTS.map((client) => (
              <div key={client} className="text-lg font-display font-bold tracking-tighter grayscale hover:grayscale-0 transition-all cursor-default">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's Create <br/><span className="text-vfx-accent">Magic Together</span></h2>
              <p className="text-gray-400 text-lg mb-12 max-w-md">
                Ready to elevate your project with world-class visual effects? Our team is standing by to discuss your vision.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-vfx-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-vfx-accent w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Locations</h4>
                    <p className="text-gray-400">Perumbavoor, Kerala</p>
                    <p className="text-gray-400">Chennai, Tamil Nadu</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-vfx-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="text-vfx-accent w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-gray-400">mousehousevfx@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-vfx-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="text-vfx-accent w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-gray-400">+91 97464 27813</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 mt-16">
                {[
                  { icon: Twitter, link: "#" },
                  { icon: Facebook, link: "https://www.facebook.com/share/1AmHfraQ5u/" },
                  { icon: Instagram, link: "https://www.instagram.com/mousehousevfx?igsh=YjgwM3B2OHdrb2gx" },
                  { icon: Youtube, link: "https://youtube.com/@mousehousevfx?si=B6bEWShVyzIRKYbF" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-vfx-accent hover:text-black transition-all"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-panel p-8 md:p-12 rounded-3xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-vfx-accent transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-vfx-accent transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Project Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-vfx-accent transition-colors appearance-none">
                    <option className="bg-vfx-black">Feature Film</option>
                    <option className="bg-vfx-black">Advertisement</option>
                    <option className="bg-vfx-black">Digital Content</option>
                    <option className="bg-vfx-black">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-vfx-accent transition-colors" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="w-full py-4 bg-vfx-accent text-black font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-white transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-vfx-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center overflow-hidden">
              <img 
                src="https://i.ibb.co/d8fhsD4/mousehouse-white-watermark-1-1.png" 
                alt="Mouse House VFX Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-bold tracking-tighter uppercase">
              Mouse House <span className="text-vfx-accent">VFX</span>
            </span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © 2026 Mouse House VFX. All Rights Reserved.
          </p>
          
          <div className="flex gap-8">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
