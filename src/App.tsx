import { useEffect, useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  ArrowRight,
  ArrowUpRight,
  TrainFront,
  Clapperboard,
  Radio,
  Newspaper,
  Mail,
  Phone,
  Plane,
  MapPin,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  BadgePercent,
} from 'lucide-react';

function BillboardIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 19 15.5H5A1.5 1.5 0 0 1 3.5 14V7A1.5 1.5 0 0 1 5 5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.5 8.75 3.5H6.75M12 5.5V3.5h-1.25M16 5.5l.75-2h-2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 15.5v2M17 15.5v2M4 17.5h16M12 17.5v3.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // QUERY FORM
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);
    setSubmitted(false);

    try {
      await emailjs.send(
        'service_fizdwh3',
        'template_f96ts2v',
        {
          full_name: formData.fullName,
          email: formData.email,
          company: formData.company,
          budget: formData.budget,
          message: formData.message,
        },
        'XMymkLmSCHqvHVJDA'
      );

      setSubmitted(true);

      setFormData({
        fullName: '',
        email: '',
        company: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      alert('Unable to send your query. Please try again.');
    } finally {
      setSending(false);
    }
  };

  // YOUR EXISTING CLIENTS
  const clients = [
    { name: 'California Burrito', logo: '/clients/CB.jpg' },
    { name: 'Cipla Health', logo: '/clients/Cipla Health.jpg' },
    { name: 'Giva', logo: '/clients/GIVA.jpg' },
    { name: 'Big Basket', logo: '/clients/Big Basket.jpg' },
    { name: 'Aakash Institute', logo: '/clients/Aakash.jpg' },
    { name: 'Physics Wallah', logo: '/clients/Physics Wallah.jpg' },
    { name: 'Amazon', logo: '/clients/Amazon.in.jpg' },
    { name: 'Flipkart', logo: '/clients/Flipkart.jpg' },
    { name: 'Spinny', logo: '/clients/Spinny logo.png' },
    { name: 'Swiggy', logo: '/clients/Swiggy.jpg' },
    { name: 'KEI Wires & Cables', logo: '/clients/KEI.jpg' },
    { name: 'Quest Global', logo: '/clients/Quest.jpg' },
    { name: 'Tumble Dry', logo: '/clients/Tumbledry.jpg' },
    { name: 'Blinkit', logo: '/clients/Blinkit.jpg' },
    { name: 'Analytics India', logo: '/clients/Analytics India.jpg' },
    { name: 'Nykaa', logo: '/clients/Nykaa.jpg' },
    { name: 'MTR', logo: '/clients/mtr.jpg' },
    { name: 'Wonderla', logo: '/clients/Wonderla.jpg' },
    { name: 'Liva', logo: '/clients/Liva.jpg' },
    { name: 'PETA India', logo: '/clients/Peta India.jpg' },
  ];

  const portfolioWork = useMemo(() => [
    {
      id: 'ooh',
      tag: 'OOH',
      title: 'Out of Home',
      subtitle: 'Hoarding | Gantry | Bus Shelter',
      images: [
        '/portfolio/ooh-1.png',
        '/portfolio/ooh-2.png',
      ],
    },
    {
      id: 'transit',
      tag: 'TRANSIT',
      title: 'Transit Advertising',
      subtitle: 'Bus | Metro | Cab | Auto | Shikara',
      images: [
        '/portfolio/transit-1.png',
        '/portfolio/transit-2.png',
        '/portfolio/transit-3.png',
        '/portfolio/transit-4.png',
        '/portfolio/image copy.png',
      ],
    },
    {
      id: 'cinema',
      tag: 'CINEMA',
      title: 'Cinema Advertising',
      subtitle: 'Multiplex | Single Screen',
      images: [
        '/portfolio/cinema-1.png',
      ],
    },
    {
      id: 'btl',
      tag: 'BTL',
      title: 'BTL & Activations',
      subtitle: 'On-Ground | Experiential',
      images: [
        '/portfolio/btl-1.png',
        '/portfolio/btl-2.png',
      ],
    },
    {
      id: 'print',
      tag: 'PRINT',
      title: 'Print Media',
      subtitle: 'Newspaper | Magazine',
      images: [
        '/portfolio/print-1.png',
      ],
    },
    {
      id: 'airport',
      tag: 'AIRPORT',
      title: 'Airport Advertising', 
      subtitle: 'Terminal | Lounge | Jet Bridge',
      images: [
        '/portfolio/airport-1.png',
        '/portfolio/airport-2.png',
        '/portfolio/airport-3.png',
      
      ],
    },
  ], []);

  const [carouselIndexes, setCarouselIndexes] = useState<Record<string, number>>({});

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCarouselIndexes((prev) => {
        const nextIndexes = { ...prev };

        portfolioWork.forEach((work) => {
          if (work.images.length > 1) {
            nextIndexes[work.id] =
              prev[work.id] !== undefined ? (prev[work.id] + 1) % work.images.length : 1;
          }
        });

        return nextIndexes;
      });
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [portfolioWork]);

  const handleCarouselPrev = (id: string, totalImages: number) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [id]: prev[id] !== undefined ? (prev[id] === 0 ? totalImages - 1 : prev[id] - 1) : totalImages - 1,
    }));
  };

  const handleCarouselNext = (id: string, totalImages: number) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [id]: prev[id] !== undefined ? (prev[id] === totalImages - 1 ? 0 : prev[id] + 1) : 1,
    }));
  };

  const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Work', href: '#work' },
    { label: 'Why brands choose us', href: '#why-us' },
    { label: 'Services', href: '#services' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/image.png" alt="Prime Street Media" className="h-12 w-12 object-contain" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-obsidian">PRIME</span>{' '}
                <span className="text-electric-500">STREET</span>{' '}
                <span className="text-obsidian">MEDIA</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-electric-500 transition-colors tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="#contact" className="btn-primary">
                Get in Touch <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-obsidian"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-gray-600 hover:text-electric-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="btn-primary w-full justify-center">
                  Get in Touch <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-obsidian">Be Seen.</span>
              <br />
              <span className="text-electric-500">Drive Results.</span>
            </h1>

            <div className="mt-8 space-y-4">
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                At Prime Street Media, we turn visibility into impact.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                From India's most iconic advertising locations — Marine Drive, Ring Road, Connaught Place — to the unforgettable charm of Shikara on Dal Lake, we take your brand wherever your audience lives, travels, and dreams.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary justify-center">
                Plan Your Campaign <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="btn-secondary justify-center">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 lg:py-28 px-6 bg-[#EEF2F7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left Column */}
            <div>
              <div className="section-header mb-8">About Us</div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-obsidian">Advertising,</span>
                <br />
                <span className="text-electric-500">Simplified.</span>
              </h2>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 pt-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-obsidian font-semibold">Prime Street Media</strong> is a media planning and buying agency. We specialize in crafting powerful advertising strategies across{' '}
                <strong className="text-obsidian">out-of-home, radio, cinema, print, airport,</strong> and{' '}
                <strong className="text-obsidian">transit</strong> media.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our strength lies in our relationships — with media owners, partners, and clients — allowing us to deliver exceptional value and impact across every campaign.
              </p>

              <hr className="border-gray-200 my-2" />

              <div>
                <div className="section-header mb-4">Our Philosophy</div>
                <p className="text-2xl md:text-3xl font-bold text-obsidian leading-snug">
                  "Advertising doesn't need to be complicated. It needs to be{' '}
                  <span className="text-electric-500">simple, strategic, and visible.</span>"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Portfolio */}
      <section id="work" className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-header mb-12">Our Work</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioWork.map((work) => {
              const currentIndex = carouselIndexes[work.id] ?? 0;
              const hasMultipleImages = work.images.length > 1;

              return (
                <div
                  key={work.id}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer"
                >
                  {/* Image Carousel */}
                  <div className="absolute inset-0">
                    {work.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`${work.title} ${imgIndex + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          imgIndex === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent z-10" />

                  {/* Carousel Navigation */}
                  {hasMultipleImages && (
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCarouselPrev(work.id, work.images.length);
                        }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4 text-white" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCarouselNext(work.id, work.images.length);
                        }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  )}

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <span className="inline-block px-3 py-1 bg-electric-500 text-white text-xs font-semibold rounded-full mb-3">
                      {work.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{work.title}</h3>
                    <p className="text-gray-300 text-sm">{work.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 lg:py-28 px-6 bg-[#EEF2F7]">
        <div className="max-w-7xl mx-auto">
          <div className="section-header mb-8">Why Brands Choose Us</div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-16">
            <span className="text-obsidian">Built on </span>
            <span className="text-electric-500">relationships.</span>
            <br />
            <span className="text-obsidian">Proven by results.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-electric-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-obsidian mb-3">Local Expertise, National Reach</h3>
              <p className="text-gray-600 leading-relaxed">
                We understand India's diverse markets — from Metros to Tier 2 &amp; 3 cities — we plan media that resonates at every level.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-electric-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-obsidian mb-3">Careful, Strategic Media Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Every campaign begins with data. We analyze audiences, map journeys, and select media that maximizes brand's impact per rupee spent.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center mb-6">
                <BadgePercent className="w-6 h-6 text-electric-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-obsidian mb-3">Unbeatable Pricing &amp; Strong Negotiation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our network relationships mean we secure premium placements at rates that give your brand a significant commercial advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="section-header mb-12">Services</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* OOH */}
            <div className="card">
              <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center mb-4">
                <BillboardIcon className="w-7 h-7 text-electric-500" />
              </div>
              <h3 className="text-xl font-bold text-obsidian mb-3">Out of Home (OOH)</h3>
              <p className="text-gray-600 leading-relaxed">
                Impactful outdoor media across metros, highways, premium city centers, and hyper-local touchpoints.
              </p>
            </div>

            {/* Transit */}
            <div className="card">
              <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center mb-4">
                <TrainFront className="w-6 h-6 text-electric-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-obsidian mb-3">Transit Advertising</h3>
              <p className="text-gray-600 leading-relaxed">
                Dynamic formats across buses, metros, autos, cabs, and even Shikaras — if it moves, we can brand it.
              </p>
            </div>

            {/* Cinema */}
            <div className="card">
              <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center mb-4">
                <Clapperboard className="w-6 h-6 text-electric-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-obsidian mb-3">Cinema Advertising</h3>
              <p className="text-gray-600 leading-relaxed">
                Big-screen storytelling that stays with audiences long after the credits roll.
              </p>
            </div>

            {/* Radio */}
            <div className="card">
              <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center mb-4">
                <Radio className="w-6 h-6 text-electric-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-obsidian mb-3">Radio Advertising</h3>
              <p className="text-gray-600 leading-relaxed">
                Creative, memorable audio spots that register subconsciously.
              </p>
            </div>

            {/* Print */}
            <div className="card">
              <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center mb-4">
                <Newspaper className="w-6 h-6 text-electric-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-obsidian mb-3">Print Media</h3>
              <p className="text-gray-600 leading-relaxed">
                Well-placed newspaper and magazine campaigns building brand equity.
              </p>
            </div>

            {/* Airport */}
            <div className="card">
              <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center mb-4">
                <Plane className="w-6 h-6 text-electric-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-obsidian mb-3">Airport Advertising</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium visibility across high-value travelers and decision-makers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 lg:py-32 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="section-header mb-12">Clients</div>

          {/* Sliding Marquee */}
          <div className="marquee-track">
            <div className="marquee-inner marquee-inner--fwd">
              {[...clients, ...clients].map((client, index) => (
                <img
                  key={index}
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto flex-shrink-0 mx-8 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section
  id="contact"
  className="py-20 lg:py-28 px-6 bg-[#EEF2F7]"
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="max-w-4xl mb-14">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
        <span className="text-obsidian">
          Let's put your brand
        </span>
        <br />
        <span className="text-electric-500">
          on every prime street.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
        Tell us about your project and let's create something
        meaningful together.
      </p>
    </div>

    {/* Query Form */}
    <div className="max-w-5xl mx-auto">

      <div className="bg-white rounded-[28px] border border-gray-200 p-6 md:p-10 lg:p-12 shadow-[0_20px_60px_rgba(20,40,70,0.08)]">

        <h3 className="text-2xl md:text-3xl font-bold text-obsidian mb-8">
          Tell us about your project
        </h3>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Full Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-obsidian mb-2"
              >
                Full Name <span className="text-electric-500">*</span>
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Alex Johnson"
                required
                className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 text-obsidian outline-none placeholder:text-gray-400 transition-all duration-200 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10"
              />
            </div>

            {/* Work Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-obsidian mb-2"
              >
                Work Email <span className="text-electric-500">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="alex@company.com"
                required
                className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 text-obsidian outline-none placeholder:text-gray-400 transition-all duration-200 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10"
              />
            </div>

          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-obsidian mb-2"
            >
            Company  <span className="text-electric-500">*</span>
            </label>

            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company name"
              className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 text-obsidian outline-none placeholder:text-gray-400 transition-all duration-200 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10"
              required
           />
          </div>



          {/* Project Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-obsidian mb-2"
            >
              Comment Here:{" "}
              <span className="text-electric-500">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows={7}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Describe your challenge, current state, and desired outcome..."
              required
              className="w-full resize-none rounded-2xl border border-gray-300 bg-white px-5 py-4 text-obsidian outline-none placeholder:text-gray-400 transition-all duration-200 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={sending}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-electric-500 px-6 py-5 text-base font-semibold text-white transition-all duration-300 hover:bg-electric-600 hover:shadow-[0_12px_30px_rgba(8,124,255,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Message"}

            {!sending && (
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            )}
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-center text-sm font-medium text-green-700">
              Thank you! Your query has been sent successfully.
            </div>
          )}

          {/* Privacy */}
          <p className="text-center text-sm text-gray-500">
            We respect your privacy. No spam, ever.
          </p>

        </form>
      </div>

    </div>
  </div>
</section>

{/* Contact Details */}
<section className="bg-[#EEF2F7] px-6 pb-20">
  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Phone */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col gap-6">
        <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center">
          <Phone
            className="w-6 h-6 text-electric-500"
            strokeWidth={1.5}
          />
        </div>

        <div>
          <p className="section-header mb-3">
            Phone
          </p>

          <a
            href="tel:+918000310416"
            className="text-xl font-bold text-obsidian hover:text-electric-500 transition-colors"
          >
            +91 80003-10416
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col gap-6">
        <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center">
          <Mail
            className="w-6 h-6 text-electric-500"
            strokeWidth={1.5}
          />
        </div>

        <div>
          <p className="section-header mb-3">
            Email
          </p>

          <a
            href="mailto:help@primestreetmedia.com"
            className="text-xl font-bold text-obsidian hover:text-electric-500 transition-colors break-all"
          >
            help@primestreetmedia.com
          </a>
        </div>
      </div>

      {/* Studio */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col gap-6">
        <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center">
          <MapPin
            className="w-6 h-6 text-electric-500"
            strokeWidth={1.5}
          />
        </div>

        <div>
          <p className="section-header mb-3">
            ADDRESS
          </p>

          <address className="not-italic text-xl font-bold text-obsidian leading-relaxed">
            372, 100 Feet Rd,
            <br />
            HAL 2nd Stage, Indiranagar,
            <br />
            Bangalore, 560008, IN
          </address>
        </div>
      </div>

    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <p className="text-gray-600 text-sm">Be Seen. Drive Results.</p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy-policy"
                onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/privacy-policy'); window.dispatchEvent(new PopStateEvent('popstate')); }}
                className="text-sm text-gray-500 hover:text-electric-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/terms-and-conditions'); window.dispatchEvent(new PopStateEvent('popstate')); }}
                className="text-sm text-gray-500 hover:text-electric-500 transition-colors"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center">
              © 2026 PRIME STREET MEDIA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
