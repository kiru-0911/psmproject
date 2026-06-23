import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Megaphone,
  TrainFront,
  Clapperboard,
  Radio,
  Newspaper,
  Plane,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  BadgePercent,
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const clients = [
    'California Burrito',
    'Cipla Health',
    'Giva',
    'Big Basket',
    'Aakash Institute',
    'Physics Wallah',
    'Amazon',
    'Flipkart',
    'Spinny',
    'Swiggy',
    'KEI Wires & Cables',
    'Quest Global',
    'Tumble Dry',
    'Blinkit',
    'Analytics India',
    'Nykaa',
    'MTR',
    'Wonderla',
    'Liva',
    'PETA India',
  ];

  const portfolioWork = [
    {
      id: 'ooh',
      tag: 'OOH',
      title: 'Out of Home',
      subtitle: 'Hoardings · Unipoles · Gantries',
      images: [
        '/portfolio/ooh-1.png',
        '/portfolio/ooh-2.png',
      ],
    },
    {
      id: 'transit',
      tag: 'TRANSIT',
      title: 'Transit Advertising',
      subtitle: 'Buses · Metros · Autos · Shikaras · Website',
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
      subtitle: 'Multiplexes · Single Screens',
      images: [
        '/portfolio/cinema-1.png',
      ],
    },
    {
      id: 'btl',
      tag: 'BTL',
      title: 'BTL & Activations',
      subtitle: 'On-Ground · Experiential',
      images: [
        '/portfolio/btl-1.png',
        '/portfolio/btl-2.png',
      ],
    },
    {
      id: 'print',
      tag: 'PRINT',
      title: 'Print Media',
      subtitle: 'Newspapers · Magazines',
      images: [
        '/portfolio/print-1.png',
      ],
    },
    {
      id: 'airport',
      tag: 'AIRPORT',
      title: 'Airport Advertising', 
      subtitle: 'Terminals · Lounges · Jet Bridges',
      images: [
        '/portfolio/airport-1.png',
        '/portfolio/airport-2.png',
        '/portfolio/airport-3.png',
      
      ],
    },
  ];

  const [carouselIndexes, setCarouselIndexes] = useState<Record<string, number>>({});

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

  const navItems = ['About', 'Services', 'Why Us', 'Work', 'Clients', 'Contact'];

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
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium text-gray-600 hover:text-electric-500 transition-colors tracking-wide"
                >
                  {item}
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
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm font-medium text-gray-600 hover:text-electric-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
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
                <Megaphone className="w-6 h-6 text-electric-500" strokeWidth={1.5} />
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

      {/* Our Work Portfolio */}
      <section id="work" className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-header mb-12">Our Work</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioWork.map((work, index) => {
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

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 z-20 text-white/30 text-5xl font-extrabold">
                    {String(index + 1).padStart(2, '0')}
                  </div>

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

                  {/* Image Counter */}
                  {hasMultipleImages && (
                    <div className="absolute top-16 right-4 z-20 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <span className="text-white text-xs font-medium">
                        {currentIndex + 1} / {work.images.length}
                      </span>
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

      {/* Clients Section */}
      <section id="clients" className="py-20 lg:py-32 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="section-header mb-12">Clients</div>

          {/* Sliding Marquee - Row 1 */}
          <div className="marquee-track mb-4">
            <div className="marquee-inner marquee-inner--fwd">
              {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-2 px-6 py-4 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md hover:border-electric-200 hover:bg-electric-50/30 transition-all duration-300 cursor-default"
                >
                  <span className="text-obsidian font-medium whitespace-nowrap">{client}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sliding Marquee - Row 2 (Reverse direction) */}
          <div className="marquee-track">
            <div className="marquee-inner marquee-inner--rev">
              {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-2 px-6 py-4 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md hover:border-electric-200 hover:bg-electric-50/30 transition-all duration-300 cursor-default"
                >
                  <span className="text-obsidian font-medium whitespace-nowrap">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 px-6 bg-[#EEF2F7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-14">
            <span className="text-obsidian">Let's put your brand</span>
            <br />
            <span className="text-electric-500">on every prime street.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col gap-6">
              <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-electric-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="section-header mb-3">Phone</p>
                <a
                  href="tel:+918000310416"
                  className="text-xl font-bold text-obsidian hover:text-electric-500 transition-colors"
                >
                  +91 80003-10416
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col gap-6">
              <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-electric-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="section-header mb-3">Email</p>
                <a
                  href="mailto:help@primestreetmedia.com"
                  className="text-xl font-bold text-obsidian hover:text-electric-500 transition-colors"
                >
                  help@primestreetmedia.com
                </a>
              </div>
            </div>

            {/* Studio Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col gap-6">
              <div className="w-12 h-12 bg-electric-50 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-electric-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="section-header mb-3">Studio</p>
                <address className="not-italic text-xl font-bold text-obsidian leading-relaxed">
                  372, 100 Feet Rd,<br />
                  HAL 2nd Stage, Indiranagar,<br />
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
