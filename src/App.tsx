import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  Layers,
  Monitor,
  Palette,
  Globe,
  Layout,
  RefreshCw,
  Smartphone,
  Code,
  Sparkles,
  User,
  MapPin,
  Briefcase,
  Calendar,
  Zap,
  MessageSquare,
  CheckCircle2,
  Settings,
  Gauge,
  Figma,
  FileCode,
  Server,
  Database,
  GitBranch,
  Github,
  Eye,
  Download,
  Search,
  PenTool,
  Hammer,
  Sliders,
  Building2,
  Puzzle,
  TrendingUp,
  Mail,
  Linkedin,
  Send
} from 'lucide-react';

type PortfolioProject = {
  id: number;
  title: string;
  category: 'Landing Pages' | 'Redesigns' | 'Business Websites' | 'Portfolio Websites';
  description: string;
  tags: string[];
  image: string;
  featured: boolean;
  liveLink?: string;
  githubLink?: string;
  designLink?: string;
  galleryImages?: string[];
};

const projects: PortfolioProject[] = [
  {
    id: 1,
    title: 'Webease',
    category: 'Business Websites',
    description: 'No-code website builder that enables users to create professional websites using customizable templates, domain availability checking, responsive layouts, and an intuitive content management interface.',
    tags: ['CMS', 'No-Code', 'Responsive'],
    image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true,
    liveLink: 'https://webease-cms-production-d10b.up.railway.app/',
    githubLink: 'https://github.com/harustat7/Webease-CMS'
  },
  {
    id: 2,
    title: 'Professional Portfolio',
    category: 'Portfolio Websites',
    description: 'Professional portfolio showcasing custom web design and development projects, UI/UX redesigns, and full-stack solutions built for clients with a focus on performance, usability, and responsive design.',
    tags: ['Portfolio', 'UI/UX', 'Responsive'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    liveLink: 'https://portfolio-3804.onrender.com/',
    githubLink: 'https://github.com/harustat7/portfolio'
  },
  {
    id: 8,
    title: 'Freelancing Portfolio',
    category: 'Portfolio Websites',
    description: 'Portfolio showcasing freelance web development and UI/UX projects, delivering responsive, scalable, and user-centric digital solutions for clients.',
    tags: ['Freelance', 'Web Development', 'UI/UX'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    liveLink: 'https://f-portfolio-nu.vercel.app/',
    githubLink: 'https://github.com/harustat7/F-Portfolio'
  },
  {
    id: 3,
    title: 'Folio - GoodReads Redesign Website',
    category: 'Redesigns',
    description: 'Modern redesign of GoodReads with streamlined navigation, improved book discovery, engaging review interactions, and a responsive interface for book lovers.',
    tags: ['React', 'Tailwind', 'Responsive'],
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    liveLink: 'https://folio-jade-sigma.vercel.app/',
    githubLink: 'https://github.com/harustat7/Folio'
  },
  {
    id: 4,
    title: 'Scatch',
    category: 'Business Websites',
    description: 'Full-stack e-commerce platform featuring secure user authentication, product management, shopping cart functionality, and role-based access for customers and store owners.',
    tags: ['Full-Stack', 'E-Commerce', 'Auth'],
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    liveLink: 'https://scatch-production-d50b.up.railway.app/',
    githubLink: 'https://github.com/harustat7/Scatch'
  },
  {
    id: 5,
    title: 'IronVolt Fitness Landing Page',
    category: 'Landing Pages',
    description: 'High-energy fitness landing page concept with a bold hero section, program cards, pricing plans, testimonials, and a conversion-focused call to action for gym memberships.',
    tags: ['Landing Page', 'Fitness', 'Responsive'],
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    designLink: '/projects/ironvolt/ironvolt-full.png',
    galleryImages: [
      '/projects/ironvolt/ironvolt-hero.png',
      '/projects/ironvolt/ironvolt-programs.png',
      '/projects/ironvolt/ironvolt-pricing.png'
    ]
  },
  {
    id: 7,
    title: 'MeetMind',
    category: 'Business Websites',
    description: 'AI-powered meeting assistant that automatically records, transcribes, summarizes discussions, extracts action items, and helps teams stay organized with searchable meeting insights.',
    tags: ['AI', 'Meetings', 'Productivity'],
    image: 'https://images.pexels.com/photos/3153203/pexels-photo-3153203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false,
    liveLink: 'https://meet-mind-ai-one.vercel.app/',
    githubLink: 'https://github.com/harustat7/MeetMindAI'
  }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Background gradient effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-[200px] right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl opacity-15" />
      </div>

      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="relative z-10">
        <HeroSection />
        <StatsSection />
        <ProjectsSection />
        <ServicesSection />
        <WorkProcessSection />
        <CaseStudySection />
        <ExperienceSection />
        <AboutSection />
        <SkillsSection />
        <WhyWorkWithMe />
        <ResumeSection />
        <FinalCtaSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

function Navbar({ scrolled, mobileMenuOpen, setMobileMenuOpen }: {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void
}) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-emerald-500/20">
              H
            </div>
            <span className="text-lg font-semibold text-white hidden sm:block">
              Harustat <span className="text-emerald-400">Kaur</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 flex items-center gap-2"
            >
              Let's Work Together
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="px-6 py-4 space-y-4">
              <MobileNavLink href="#projects">Projects</MobileNavLink>
              <MobileNavLink href="#about">About</MobileNavLink>
              <MobileNavLink href="#services">Services</MobileNavLink>
              <motion.a
                href="#contact"
                className="block w-full px-5 py-3 bg-emerald-500 text-slate-950 font-medium rounded-lg text-center"
              >
                Let's Work Together
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="relative text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2"
      whileHover={{
        color: '#ffffff',
      }}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400"
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={() => {}}
      className="block text-slate-300 hover:text-white py-2 text-sm font-medium"
    >
      {children}
    </a>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-emerald-400 font-medium">Available for freelance work</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Designing modern websites that help brands{' '}
                <span className="text-gradient">stand out online</span>
              </h1>

              <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                I craft clean, responsive websites and landing pages that look great,
                load fast, and help your business connect with the right people.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center gap-2"
              >
                View Projects
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-200 border border-slate-700 hover:border-slate-600 flex items-center gap-2"
              >
                Hire Me
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-500" />
                Frontend Developer
              </span>
              <span className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-emerald-500" />
                Responsive Design
              </span>
              <span className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-emerald-500" />
                Modern UI
              </span>
            </div>
          </motion.div>

          {/* Right Visual Area - Bento Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-last lg:order-last"
          >
            <div className="grid grid-cols-6 grid-rows-5 gap-3 lg:gap-4">
              {/* Main large card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="col-span-4 row-span-3 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-5 flex flex-col justify-between shadow-xl overflow-hidden relative group"
              >
                {/* Browser mockup header */}
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <div className="ml-3 flex-1 h-5 bg-slate-700/50 rounded-md flex items-center px-3">
                    <div className="w-2 h-2 rounded-full bg-slate-600 mr-1" />
                    <span className="text-[10px] text-slate-500 font-mono">yoursite.com</span>
                  </div>
                </div>

                {/* Mockup content */}
                <div className="flex-1 space-y-3">
                  <div className="h-2 w-24 bg-emerald-500/30 rounded" />
                  <div className="h-1.5 w-full bg-slate-700/60 rounded" />
                  <div className="h-1.5 w-4/5 bg-slate-700/60 rounded" />
                  <div className="h-1.5 w-3/4 bg-slate-700/60 rounded" />
                  <div className="mt-4 flex gap-2">
                    <div className="h-6 w-20 bg-emerald-500/30 rounded" />
                    <div className="h-6 w-20 bg-slate-700/60 rounded" />
                  </div>
                </div>

                {/* Gradient accent */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              </motion.div>

              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="col-span-2 row-span-2 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-500/30 p-4 flex flex-col justify-center items-center text-center"
              >
                <div className="text-3xl font-bold text-emerald-400">20+</div>
                <div className="text-xs text-emerald-300/80 mt-1">Projects</div>
              </motion.div>

              {/* Code preview card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="col-span-3 row-span-2 bg-slate-900 rounded-2xl border border-slate-700/50 p-4 font-mono text-xs overflow-hidden"
              >
                <div className="text-slate-500">{'// Modern, clean code'}</div>
                <div className="mt-1">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">portfolio</span>{' '}
                  <span className="text-slate-400">=</span>{' '}
                  <span className="text-emerald-400">'craft'</span>;
                </div>
                <div className="mt-0.5">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">quality</span>{' '}
                  <span className="text-slate-400">=</span>{' '}
                  <span className="text-orange-400">100</span>;
                </div>
              </motion.div>

              {/* Small tech card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="col-span-2 row-span-1 bg-slate-800/50 rounded-xl border border-slate-700/30 p-3 flex items-center justify-center gap-2"
              >
                <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-[10px] font-bold text-white">R</div>
                <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-[10px] font-bold text-white">T</div>
              </motion.div>

              {/* Status card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="col-span-3 row-span-1 bg-slate-900/80 rounded-xl border border-slate-700/50 p-3 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Fast Delivery</div>
                  <div className="text-xs text-slate-400">2-5 day turnaround</div>
                </div>
              </motion.div>

              {/* Pixel perfect card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="col-span-3 row-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 p-4 flex flex-col justify-center"
              >
                <div className="text-xs text-slate-500 mb-2">Design Tools</div>
                <div className="flex gap-2">
                  <div className="px-2.5 py-1 bg-slate-700/50 rounded text-xs text-slate-300">Figma</div>
                  <div className="px-2.5 py-1 bg-slate-700/50 rounded text-xs text-slate-300">React</div>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="px-2.5 py-1 bg-slate-700/50 rounded text-xs text-slate-300">Tailwind</div>
                  <div className="px-2.5 py-1 bg-slate-700/50 rounded text-xs text-slate-300">TypeScript</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    {
      value: '20+',
      label: 'Projects Built',
      description: 'Live websites delivered'
    },
    {
      value: '1+',
      label: 'Years Active',
      description: 'Professional experience'
    },
    {
      value: '100%',
      label: 'Responsive',
      description: 'Mobile-first approach'
    },
    {
      value: 'Fast',
      label: 'Turnaround',
      description: '2-5 day delivery'
    },
  ];

  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-900/50 hover:bg-slate-900 border border-slate-800/50 hover:border-emerald-500/30 rounded-2xl p-6 lg:p-8 transition-all duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-base lg:text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500">
                {stat.description}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default App;

function FinalCtaSection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Have a project in mind?
          </h2>

          {/* Subtext */}
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you need a landing page, portfolio website, complete redesign, or custom frontend development, I'm ready to bring your vision to life with clean code and modern design.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl shadow-xl shadow-emerald-500/20 transition-all duration-200"
            >
              Let's Work Together
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-200"
            >
              View Projects
              <Eye className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', details: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-400">
            Have a question or want to discuss your project? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-5">
            {/* Email */}
            <a
              href="mailto:harustatkaur10@gmail.com"
              className="group flex items-start gap-4 p-5 bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800/60 hover:border-emerald-500/30 rounded-xl transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <Mail className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <p className="text-white font-medium truncate">harustatkaur10@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/harustatk07/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex items-start gap-4 p-5 bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800/60 hover:border-emerald-500/30 rounded-xl transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <Linkedin className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-500 mb-1">LinkedIn</p>
                <p className="text-white font-medium">Connect with me</p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/harustat7"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group flex items-start gap-4 p-5 bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800/60 hover:border-emerald-500/30 rounded-xl transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <Github className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-500 mb-1">GitHub</p>
                <p className="text-white font-medium">View my work</p>
              </div>
            </motion.a>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-slate-900/50 rounded-2xl border border-slate-800/60 p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200"
                />
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-slate-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200 resize-none"
                />
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm text-emerald-400">Message sent! I'll get back to you soon.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-semibold rounded-lg transition-all duration-200"
              >
                {isLoading ? (
                  <div className="w-5 h-5 rounded-full border-2 border-slate-950/30 border-t-slate-950 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', href: '#' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const socials = [
    { icon: Github, href: 'https://github.com/harustat7', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/harustatk07/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:harustatkaur10@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Code className="w-5 h-5 text-slate-950 font-bold" />
              </div>
              <span className="text-lg font-bold text-white">Harustat Kaur</span>
            </div>
            <p className="text-sm text-slate-400">
              Frontend developer crafting beautiful, functional websites for clients.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-white mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              {socials.map(social => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-emerald-500 text-slate-400 hover:text-slate-950 flex items-center justify-center transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-sm text-slate-500"
          >
            <p>
              Copyright {currentYear} Portfolio. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

function WorkProcessSection() {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'Understanding your goals, target audience, and project requirements through detailed discussion.'
    },
    {
      icon: PenTool,
      title: 'Design',
      description: 'Creating mockups and visual concepts that align with your brand and user expectations.'
    },
    {
      icon: Hammer,
      title: 'Development',
      description: 'Building the website with clean code, responsive layouts, and modern best practices.'
    },
    {
      icon: Sliders,
      title: 'Refinement',
      description: 'Polishing interactions, optimizing performance, and making final adjustments before delivery.'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            How I Work
          </h2>
          <p className="text-lg text-slate-400">
            A structured approach to deliver quality results on time.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800/60 hover:border-emerald-500/30 rounded-2xl p-7 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-lg shadow-lg shadow-emerald-500/30">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                  <step.icon className="w-6 h-6 text-emerald-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudySection() {
  return (
    <section className="relative py-20 lg:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Featured Case Study
          </h2>
          <p className="text-lg text-slate-400">
            A closer look at one of my recent redesign projects.
          </p>
        </motion.div>

        {/* Case Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-slate-900/50 rounded-2xl border border-slate-800/60 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Folio GoodReads Redesign Website"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent lg:hidden" />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10">
              {/* Tag */}
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full mb-5">
                <TrendingUp className="w-3.5 h-3.5" />
                Redesign Project
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-6">
                Folio - GoodReads Redesign Website
              </h3>

              {/* Problem */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Puzzle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-slate-300">Problem</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  GoodReads can feel cluttered for readers trying to discover books, compare reviews, and move quickly between lists and recommendations.
                </p>
              </div>

              {/* Approach */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-slate-300">Approach</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Reworked the interface around streamlined navigation, cleaner discovery paths, engaging review interactions, and responsive layouts.
                </p>
              </div>

              {/* Result */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-slate-300">Result</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A modern book discovery experience that feels easier to scan, more inviting to browse, and smoother for book lovers on any device.
                </p>
              </div>

              {/* Outcome Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800">
                <div>
                  <div className="text-2xl font-bold text-emerald-400">100%</div>
                  <div className="text-xs text-slate-500 mt-1">Responsive</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">2x</div>
                  <div className="text-xs text-slate-500 mt-1">Faster Load</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">+</div>
                  <div className="text-xs text-slate-500 mt-1">Modern UI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Mphasis',
      period: '2026',
      description: 'Worked on frontend development projects, building responsive interfaces and implementing UI components using React and modern web technologies.',
      icon: Building2
    },
    {
      title: 'Freelance Web Developer',
      company: 'Mevaya Wellness',
      period: '2025',
      description: 'Built and customized responsive e-commerce interfaces using Shopify, Liquid, and modern frontend technologies to enhance user experience and site performance.',
      icon: Briefcase
    },
    {
      title: 'Embedded Firmware Developer',
      company: 'Capgemini',
      period: '2025',
      description: 'Contributed to embedded systems development projects, gaining experience in firmware design and hardware-software integration.',
      icon: Settings
    },
    {
      title: 'Deloitte USI Capstone Program',
      company: 'Deloitte',
      period: '2025',
      description: 'Designed and developed responsive React-based dashboards with real-time monitoring capabilities, improving user experience through intuitive data visualization and automated workflows.',
      icon: Zap
    }
  ];

  return (
    <section id="experience" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-400">
            Professional background and roles I've held.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-5">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex gap-5 p-6 bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800/60 hover:border-emerald-500/30 rounded-xl transition-all duration-300">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <experience.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-emerald-400 font-medium">
                        {experience.company}
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumeSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-400 font-medium">Available for Freelance</span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>

          <p className="text-lg text-slate-400 mb-10">
            Looking for a frontend developer? Download my resume or reach out to discuss your project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="/Harustat_Kaur_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-7 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl shadow-xl shadow-emerald-500/20 transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5" />
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Landing Pages', 'Redesigns', 'Business Websites', 'Portfolio Websites'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const featuredProject = filteredProjects.find(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-slate-400">
            A showcase of recent projects and design work built for real clients.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <ProjectCard project={featuredProject} featured />
          </motion.div>
        )}

        {/* Regular Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {regularProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }: { project: PortfolioProject; featured?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const hasLiveLink = Boolean(project.liveLink);
  const hasGithubLink = Boolean(project.githubLink);
  const previewLink = project.liveLink ?? project.designLink;
  const hasPreviewLink = Boolean(previewLink);
  const previewLabel = hasLiveLink ? 'Live Preview' : 'View Design';

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative bg-slate-900/40 rounded-2xl border border-slate-800/60 hover:border-emerald-500/30 overflow-hidden transition-all duration-300 ${
        featured ? 'lg:grid lg:grid-cols-2 lg:gap-0' : ''
      }`}
    >
      {/* Image Section */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/9] lg:aspect-auto lg:h-full' : 'aspect-[4/3]'}`}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Browser Frame Dots */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 backdrop-blur-sm" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 backdrop-blur-sm" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 backdrop-blur-sm" />
        </div>

        {/* Hover Actions - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 hidden lg:flex items-center justify-center gap-3 z-20"
        >
          {hasPreviewLink && (
            <motion.a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-slate-950 font-semibold rounded-xl shadow-xl"
            >
              <Eye className="w-4 h-4" />
              {previewLabel}
            </motion.a>
          )}
          {hasGithubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700"
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content Section */}
      <div className={`p-6 ${featured ? 'lg:p-8 lg:flex lg:flex-col lg:justify-center' : ''}`}>
        {/* Category Tag */}
        <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full mb-3">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-100 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 rounded-md border border-slate-700/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.galleryImages && (
          <div className="grid grid-cols-3 gap-2 mb-5">
            {project.galleryImages.map((image, index) => (
              <a
                key={image}
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[16/9] overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/40 transition-all hover:border-emerald-500/40"
                aria-label={`${project.title} screenshot ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </a>
            ))}
          </div>
        )}

        {/* Actions - Mobile */}
        {(hasPreviewLink || hasGithubLink) && (
          <div className="flex gap-3 lg:hidden">
            {hasPreviewLink && (
              <a
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-500 text-slate-950 font-medium rounded-lg text-sm"
              >
                <Eye className="w-4 h-4" />
                {hasLiveLink ? 'Preview' : 'Design'}
              </a>
            )}
            {hasGithubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 text-white font-medium rounded-lg border border-slate-700 text-sm"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'Landing Page Development',
      description: 'High-converting landing pages designed to capture attention and drive action. Clean layouts, clear messaging, and fast loading times.',
      tags: ['React', 'Tailwind', 'Animation']
    },
    {
      icon: Layout,
      title: 'Portfolio Websites',
      description: 'Personal portfolio sites that showcase your work in the best light. Tailored to your style and built to make an impression.',
      tags: ['Custom Design', 'Responsive']
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      description: 'Transform outdated websites into modern, clean interfaces. Better user experience, updated visuals, improved structure.',
      tags: ['Modernization', 'UX Focus']
    },
    {
      icon: Smartphone,
      title: 'Responsive Web Design',
      description: 'Websites that work flawlessly across desktop, tablet, and mobile. Every screen size gets the attention it deserves.',
      tags: ['Mobile-First', 'Cross-Device']
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Clean, maintainable code built with modern tools and best practices. React-based development with performance in mind.',
      tags: ['React', 'TypeScript']
    },
    {
      icon: Sparkles,
      title: 'Modern UI Improvements',
      description: 'Enhance existing interfaces with better spacing, typography, interactions, and visual polish for a premium feel.',
      tags: ['UI Polish', 'Details']
    }
  ];

  return (
    <section id="services" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What I Can Help You Build
          </h2>
          <p className="text-lg text-slate-400">
            From concept to deployment, I build websites that look professional and work smoothly.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800/60 hover:border-emerald-500/30 rounded-2xl p-6 lg:p-7 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-emerald-400" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 rounded-md border border-slate-700/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const highlights = [
    {
      icon: Briefcase,
      label: 'Internship Experience',
      value: '10 months'
    },
    {
      icon: Calendar,
      label: 'Active Since',
      value: '2025'
    },
    {
      icon: MapPin,
      label: 'Based In',
      value: 'India'
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-last lg:order-first"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
                {/* Profile area */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <User className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-white">Frontend Developer</div>
                    <div className="text-sm text-slate-400">& Website Designer</div>
                  </div>
                </div>

                {/* Highlights grid */}
                <div className="grid grid-cols-3 gap-3">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="bg-slate-800/50 rounded-xl p-3 text-center"
                    >
                      <item.icon className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                      <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                      <div className="text-sm font-semibold text-white">{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div className="mt-5 flex items-center gap-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm text-emerald-300 font-medium">Open for freelance projects</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                About Me
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
            </div>

            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                I'm a frontend developer and website designer focused on building clean,
                modern websites that work well and look great.
              </p>
              <p>
                After completing an internship where I worked on real-world applications,
                I started freelancing to help businesses and individuals establish their
                online presence.
              </p>
              <p>
                I care about responsive design, clean code, and user-friendly interfaces.
                My goal is to create websites that are not just visually appealing but
                also functional and easy to use.
              </p>
            </div>

            {/* Currently working on */}
            <div className="bg-slate-800/40 rounded-xl p-5 border border-slate-700/50">
              <div className="text-xs text-slate-500 mb-2">Currently working on</div>
              <div className="text-slate-200 font-medium">
                Expanding my portfolio with diverse projects
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: Code },
        { name: 'TypeScript', icon: FileCode },
        { name: 'Python', icon: Code },
        { name: 'C / C++', icon: FileCode },
        { name: 'SQL', icon: Database }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', icon: Layout },
        { name: 'HTML5 / CSS3', icon: Globe },
        { name: 'Tailwind CSS', icon: Sparkles },
        { name: 'Node.js', icon: Server },
        { name: 'Express.js', icon: Server },
        { name: 'RESTful APIs', icon: Zap },
        { name: 'FastAPI', icon: Zap }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: Database },
        { name: 'Supabase', icon: Database },
        { name: 'MySQL', icon: Database }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git / GitHub', icon: GitBranch },
        { name: 'VS Code', icon: Settings },
        { name: 'Postman', icon: Code },
        { name: 'Linux', icon: Monitor },
        { name: 'n8n', icon: RefreshCw },
        { name: 'Figma', icon: Figma }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Tech Stack & Skills
          </h2>
          <p className="text-lg text-slate-400">
            Tools and technologies I use to build modern web experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold text-emerald-400 mb-5 uppercase tracking-wide">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/30 hover:border-emerald-500/20 transition-all cursor-default group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <skill.icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyWorkWithMe() {
  const features = [
    {
      icon: Palette,
      title: 'Clean Modern Design',
      description: 'Every design decision has purpose. No clutter, no confusion—just clear, professional interfaces.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Across Devices',
      description: 'Your website works beautifully on desktop, tablet, and phone without compromises.'
    },
    {
      icon: MessageSquare,
      title: 'Fast Communication',
      description: 'Quick responses and clear updates throughout the project. No guessing games.'
    },
    {
      icon: CheckCircle2,
      title: 'Attention to Detail',
      description: 'Spacing, typography, alignment, and interactions—every element is refined.'
    },
    {
      icon: Settings,
      title: 'Organized Process',
      description: 'Clear stages from planning to delivery. You know what\'s happening at every step.'
    },
    {
      icon: Gauge,
      title: 'Performance Focused',
      description: 'Fast loading, smooth interactions, and modern optimization practices built-in.'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Why Work With Me
          </h2>
          <p className="text-lg text-slate-400">
            What you get when we collaborate on your project.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800/60 hover:border-emerald-500/30 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
