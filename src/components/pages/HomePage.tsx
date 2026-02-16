// HPI 1.7-G
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Clock, Settings, ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Types & Interfaces ---
interface CapabilityItem {
  title: string;
  icon: React.ElementType;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
  sub: string;
}

// --- Canonical Data Sources ---
const CAPABILITIES_DATA: string[] = [
  'Precision Engineering',
  'Quality Assurance',
  'Custom Solutions',
  'Timely Delivery'
];

// Enriched data for display purposes, strictly mapping to the canonical list
const ENRICHED_CAPABILITIES: CapabilityItem[] = [
  { 
    title: 'Precision Engineering', 
    icon: Factory, 
    description: 'State-of-the-art injection molding technology ensuring micron-level accuracy in every preform.' 
  },
  { 
    title: 'Quality Assurance', 
    icon: ShieldCheck, 
    description: 'Rigorous multi-stage testing protocols that exceed international safety and durability standards.' 
  },
  { 
    title: 'Custom Solutions', 
    icon: Settings, 
    description: 'Bespoke mold design and polymer formulations tailored to your specific packaging requirements.' 
  },
  { 
    title: 'Timely Delivery', 
    icon: Clock, 
    description: 'Optimized supply chain logistics ensuring your production lines never stop waiting for inventory.' 
  }
];

const STATS_DATA: StatItem[] = [
  { value: '15+', label: 'Years of Experience', sub: 'Defining Industry Standards' },
  { value: '500+', label: 'Satisfied Clients', sub: 'Global Partnerships' },
  { value: '100%', label: 'Quality Guaranteed', sub: 'Zero Compromise' },
];

// --- Components ---

const ParallaxText = ({ children, baseVelocity = 100 }: { children: string; baseVelocity: number }) => {
  const baseX = useRef(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useSpring(scrollY, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(scrollVelocity, [0, 1000], [0, 5], { clamp: false });
  const [x, setX] = useState(0);

  useEffect(() => {
    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      let moveBy = baseVelocity * (delta / 1000);
      // Apply direction based on scroll
      const directionFactor = 1; 
      moveBy += directionFactor * moveBy * velocityFactor.get();
      baseX.current += moveBy;
      // Loop logic
      if (baseX.current <= -100) baseX.current = 0;
      if (baseX.current >= 0) baseX.current = -100; // Adjust based on content width
      setX(baseX.current);
      requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [baseVelocity, velocityFactor]);

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex whitespace-nowrap flex-nowrap" style={{ x: `${x}%` }}>
        <span className="block text-[12vw] font-heading font-bold text-primary/5 uppercase mr-12">{children}</span>
        <span className="block text-[12vw] font-heading font-bold text-primary/5 uppercase mr-12">{children}</span>
        <span className="block text-[12vw] font-heading font-bold text-primary/5 uppercase mr-12">{children}</span>
        <span className="block text-[12vw] font-heading font-bold text-primary/5 uppercase mr-12">{children}</span>
      </motion.div>
    </div>
  );
};

const SectionDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-0" />
);

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-clip selection:bg-primary selection:text-white">
      <Header />

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative w-full min-h-[100vh] flex flex-col justify-center items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_70%)]" />
          <div className="absolute right-0 top-0 w-1/3 h-full border-l border-primary/5 hidden lg:block" />
          <div className="absolute left-0 top-0 w-1/3 h-full border-r border-primary/5 hidden lg:block" />
        </div>

        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* ... keep existing code (removed tagline section) ... */}
              
              <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-primary leading-[0.9] mb-8 tracking-tight">
                Precision <br />
                <span className="text-secondary italic font-light">in Every</span> <br />
                Preform.
              </h1>

              <p className="font-paragraph text-lg md:text-xl text-secondary/80 max-w-xl leading-relaxed mb-10 border-l-2 border-accent-gold pl-6">
                Radhe Polymers specializes in manufacturing premium PET preforms and caps. 
                Where precision engineering meets quiet luxury.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link to="/products">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 bg-primary text-white font-paragraph text-base overflow-hidden rounded-sm"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Collection <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border border-secondary/20 text-secondary font-paragraph text-base hover:bg-secondary/5 transition-colors rounded-sm"
                  >
                    Contact Studio
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Hero Image / Visual */}
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] w-full flex items-center justify-center"
          >
            <div className="relative w-full h-full max-h-[800px] bg-white p-8 shadow-2xl shadow-primary/5 border border-primary/10">
              <div className="absolute inset-0 border border-secondary/5 m-4 pointer-events-none" />
              <div className="w-full h-full relative overflow-hidden bg-background flex items-center justify-center">
                 <Image
                  src="https://static.wixstatic.com/media/9b1a81_dbcad26cd1974ef4a9d6368f11245fb6~mv2.jpg"
                  alt="Radhe Polymers Signature Preform"
                  width={800}
                  height={1000}
                  className="w-full h-full object-contain p-12 hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              {/* Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent-gold" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent-gold" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-grey">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-accent-gold" />
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* --- MARQUEE SECTION --- */}
      <section className="py-12 bg-secondary overflow-hidden">
        <ParallaxText baseVelocity={-2}>
          RADHE POLYMERS • PRECISION • QUALITY • INNOVATION • 
        </ParallaxText>
      </section>

      {/* --- CAPABILITIES SECTION (Sticky Layout) --- */}
      <section className="relative w-full py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sticky Title */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32">
                <h2 className="font-heading text-5xl lg:text-6xl text-primary mb-8">
                  Manufacturing <br /> Excellence
                </h2>
                <p className="font-paragraph text-lg text-secondary/70 leading-relaxed mb-12">
                  We combine advanced technology with meticulous craftsmanship to deliver superior PET products. Our process is our promise.
                </p>
                <div className="hidden lg:block w-24 h-1 bg-accent-gold" />
              </div>
            </div>

            {/* Capabilities List */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {ENRICHED_CAPABILITIES.map((item, index) => (
                <CapabilityCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (Parallax & Stats) --- */}
      <section className="relative w-full py-32 bg-secondary text-primary-foreground overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
        
        <div className="relative z-10 max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block font-paragraph text-accent-gold tracking-widest uppercase text-sm mb-4">Why Choose Radhe</span>
              <h2 className="font-heading text-5xl lg:text-7xl text-white mb-10 leading-tight">
                Engineered for <br />
                <span className="text-muted-grey">Performance.</span>
              </h2>
              
              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-accent-gold/30 flex items-center justify-center group-hover:bg-accent-gold group-hover:text-secondary transition-all duration-300">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-white mb-2">State-of-the-Art Facility</h3>
                    <p className="font-paragraph text-muted-grey max-w-md">
                      Our modern manufacturing facility is equipped with cutting-edge technology to ensure consistent quality and precision.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-accent-gold/30 flex items-center justify-center group-hover:bg-accent-gold group-hover:text-secondary transition-all duration-300">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-white mb-2">Diverse Product Range</h3>
                    <p className="font-paragraph text-muted-grey max-w-md">
                      From various preform sizes to specialized caps, we offer comprehensive solutions for all your packaging needs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {STATS_DATA.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
              {/* Decorative Empty Card */}
              <div className="hidden sm:flex aspect-square rounded-sm border border-white/5 items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-transparent" />
                 <div className="w-full h-full flex items-center justify-center">
                    <Image 
                        src="https://static.wixstatic.com/media/9b1a81_dbcad26cd1974ef4a9d6368f11245fb6~mv2.jpg"
                        alt="Radhe Logo Mark"
                        width={100}
                        className="opacity-20 grayscale"
                    />
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PRODUCT TEASER (Full Bleed) --- */}
      <section className="w-full py-32 bg-background relative">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="font-heading text-5xl lg:text-7xl text-primary mb-8">
              The Collection
            </h2>
            <p className="font-paragraph text-xl text-secondary/70 max-w-2xl mx-auto mb-12">
              Explore our range of premium PET preforms and caps, designed to meet the rigorous demands of the modern industry.
            </p>
            
            <div className="flex justify-center">
               <Link to="/products">
                <button className="group flex items-center gap-4 px-12 py-6 bg-secondary text-white font-paragraph text-lg rounded-sm hover:bg-primary transition-colors duration-500">
                  View All Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background decorative lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-primary/5 -z-0" />
        <div className="absolute top-0 left-1/2 h-full w-px bg-primary/5 -z-0" />
      </section>

      {/* --- CTA SECTION --- */}
      <section className="w-full py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl lg:text-8xl mb-8 text-white">
              Ready to Elevate?
            </h2>
            <p className="font-paragraph text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Partner with Radhe Polymers for premium PET preforms and caps that define excellence.
            </p>
            <Link to="/contact">
              <button className="px-12 py-5 border border-accent-gold text-accent-gold font-paragraph text-lg hover:bg-accent-gold hover:text-secondary transition-all duration-300 rounded-sm">
                Start the Conversation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// --- Sub-Components ---

function CapabilityCard({ item, index }: { item: CapabilityItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white p-10 border border-secondary/5 hover:border-primary/20 transition-colors duration-500 shadow-sm hover:shadow-lg"
    >
      <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 ease-in-out" />
      
      <div className="flex items-start gap-6">
        <div className="p-4 bg-background rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <item.icon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-heading text-3xl text-secondary mb-3 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="font-paragraph text-secondary/70 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="aspect-square bg-white/5 backdrop-blur-sm border border-white/10 p-8 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors duration-300"
    >
      <div className="font-heading text-6xl lg:text-7xl text-accent-gold mb-2">
        {stat.value}
      </div>
      <div className="font-heading text-xl text-white mb-1">
        {stat.label}
      </div>
      <div className="font-paragraph text-sm text-muted-grey uppercase tracking-wider">
        {stat.sub}
      </div>
    </motion.div>
  );
}