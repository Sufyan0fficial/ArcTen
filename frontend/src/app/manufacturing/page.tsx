'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ManufacturingPage() {
  const containerRef = useScrollReveal();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const processSteps = [
    {
      number: '01',
      title: 'Material Selection',
      description: 'We source only the finest full-grain leather from certified tanneries in Italy, Argentina, and New Zealand. Each hide is hand-inspected for quality, texture, and consistency.',
      details: ['Full-grain & top-grain options', 'Vegetable & chrome tanning', 'Custom color matching', 'Sustainable sourcing'],
    },
    {
      number: '02',
      title: 'Pattern & Cutting',
      description: 'Master pattern makers create precise templates using CAD technology. Our cutting specialists maximize material efficiency while ensuring each piece meets exact specifications.',
      details: ['CAD precision patterns', 'Laser-guided cutting', 'Zero-waste optimization', 'Quality grading system'],
    },
    {
      number: '03',
      title: 'Craftsmanship',
      description: 'Skilled artisans with 10+ years of experience hand-stitch, edge-finish, and assemble each piece. Traditional techniques meet modern precision.',
      details: ['Hand-stitched seams', 'Burnished edges', 'Custom hardware fitting', 'Reinforced stress points'],
    },
    {
      number: '04',
      title: 'Quality Control',
      description: 'Every item undergoes a 47-point inspection process. We test durability, finish quality, hardware function, and overall aesthetics before approval.',
      details: ['47-point inspection', 'Stress testing', 'Color consistency check', 'Final polish & conditioning'],
    },
    {
      number: '05',
      title: 'Packaging & Delivery',
      description: 'Products are carefully packaged in premium materials with your branding. We offer global shipping with real-time tracking and insurance.',
      details: ['Custom branded packaging', 'Dust bags & boxes', 'Global logistics network', 'Real-time tracking'],
    },
  ];

  const facilities = [
    { label: 'Production Floor', value: '50,000 sq ft' },
    { label: 'Master Craftsmen', value: '120+' },
    { label: 'Cutting Tables', value: '24' },
    { label: 'Sewing Stations', value: '80' },
    { label: 'QC Inspectors', value: '15' },
    { label: 'Daily Capacity', value: '500 units' },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="min-h-[80dvh] flex items-center justify-center relative pt-24 pb-16">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-48 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container-custom px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="reveal eyebrow mb-6 inline-block">The Craft</span>
            <h1 className="reveal stagger-1 font-heading text-5xl md:text-7xl text-charcoal mb-8 leading-[0.95]">
              Where Tradition
              <span className="block text-accent">Meets Precision</span>
            </h1>
            <p className="reveal stagger-2 text-charcoal/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Step inside our state-of-the-art facility where 120+ master craftsmen 
              transform premium leather into exceptional products.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom px-4 md:px-8">
          <div className="reveal">
            <div className="image-shell bg-white/5">
              <div className="image-inner relative aspect-video bg-gradient-to-br from-stone-800 to-stone-900 overflow-hidden">
                {!isVideoPlaying ? (
                  <>
                    {/* Video thumbnail placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="font-heading text-6xl md:text-8xl text-white/10 block mb-4">ARCTen</span>
                        <span className="text-white/30 text-sm uppercase tracking-widest">Manufacturing Process</span>
                      </div>
                    </div>
                    
                    {/* Play button */}
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent flex items-center justify-center
                                    transition-all duration-500 ease-out-expo
                                    group-hover:scale-110 group-hover:bg-cream">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-charcoal ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>

                    {/* Video duration badge */}
                    <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="text-white/80 text-sm">4:32</span>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="ARCTen Manufacturing Process"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>

          <div className="reveal stagger-1 mt-8 text-center">
            <p className="text-cream/60 max-w-2xl mx-auto">
              Watch our master craftsmen at work. From raw leather to finished product, 
              every step is executed with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Stats */}
      <section className="py-16 bg-stone/30 border-y border-charcoal/5">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {facilities.map((stat, i) => (
              <div key={stat.label} className={`reveal stagger-${Math.min(i + 1, 5)} text-center`}>
                <p className="font-heading text-3xl md:text-4xl text-charcoal mb-1">{stat.value}</p>
                <p className="text-charcoal/40 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-custom px-4 md:px-8">
          <div className="text-center mb-20">
            <span className="reveal eyebrow mb-4 inline-block">The Process</span>
            <h2 className="reveal stagger-1 font-heading text-4xl md:text-6xl text-charcoal">
              Five Steps to Excellence
            </h2>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div 
                key={step.number} 
                className={`reveal stagger-${Math.min(i + 1, 5)}`}
              >
                <div className="card-shell">
                  <div className="card-inner p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Step number */}
                      <div className="lg:col-span-2">
                        <span className="font-heading text-7xl md:text-8xl text-accent/20">{step.number}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="lg:col-span-6">
                        <h3 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">{step.title}</h3>
                        <p className="text-charcoal/60 leading-relaxed">{step.description}</p>
                      </div>
                      
                      {/* Details */}
                      <div className="lg:col-span-4">
                        <ul className="space-y-3">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-3 text-charcoal/70">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="section-padding bg-stone/30">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="reveal eyebrow mb-6 inline-block">Certifications</span>
              <h2 className="reveal stagger-1 font-heading text-4xl md:text-5xl text-charcoal mb-6">
                Quality You Can Trust
              </h2>
              <p className="reveal stagger-2 text-charcoal/60 text-lg leading-relaxed mb-8">
                Our facility meets the highest international standards for quality management, 
                environmental responsibility, and ethical manufacturing practices.
              </p>
              
              <div className="reveal stagger-3 grid grid-cols-2 gap-6">
                {[
                  { cert: 'ISO 9001:2015', desc: 'Quality Management' },
                  { cert: 'ISO 14001', desc: 'Environmental' },
                  { cert: 'OEKO-TEX', desc: 'Safe Materials' },
                  { cert: 'LWG Gold', desc: 'Leather Working Group' },
                ].map((item) => (
                  <div key={item.cert} className="card-shell">
                    <div className="card-inner p-4 text-center">
                      <p className="font-heading text-lg text-charcoal">{item.cert}</p>
                      <p className="text-charcoal/50 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal stagger-2">
              <div className="image-shell">
                <div className="image-inner aspect-square bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-heading text-8xl text-charcoal/10">QC</span>
                    <p className="text-charcoal/30 text-sm mt-2">47-Point Inspection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-padding bg-charcoal text-cream">
        <div className="container-custom px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="reveal eyebrow bg-accent/20 text-accent mb-6 inline-block">Sustainability</span>
            <h2 className="reveal stagger-1 font-heading text-4xl md:text-5xl mb-6">
              Crafted Responsibly
            </h2>
            <p className="reveal stagger-2 text-cream/60 text-lg leading-relaxed mb-12">
              We&apos;re committed to sustainable practices throughout our supply chain. 
              From responsibly sourced leather to zero-waste cutting techniques, 
              we minimize our environmental footprint without compromising quality.
            </p>

            <div className="reveal stagger-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '◆', title: 'Responsible Sourcing', desc: 'LWG-certified tanneries only' },
                { icon: '◈', title: 'Zero Waste', desc: '98% material utilization rate' },
                { icon: '◇', title: 'Clean Energy', desc: '60% solar-powered facility' },
              ].map((item) => (
                <div key={item.title} className="card-shell bg-white/5">
                  <div className="card-inner bg-white/5 p-6 text-center">
                    <span className="text-accent text-3xl mb-4 block">{item.icon}</span>
                    <h3 className="font-heading text-xl text-cream mb-2">{item.title}</h3>
                    <p className="text-cream/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom px-4 md:px-8 text-center">
          <h2 className="reveal font-heading text-4xl md:text-5xl text-charcoal mb-6">
            Ready to See It in Action?
          </h2>
          <p className="reveal stagger-1 text-charcoal/60 max-w-xl mx-auto mb-10">
            Schedule a virtual tour of our facility or request samples to experience 
            our craftsmanship firsthand.
          </p>
          <div className="reveal stagger-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#quote" className="btn-premium">
              <span>Request Samples</span>
              <span className="btn-premium-icon">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link href="/gallery" className="btn-secondary-premium">
              <span>View Gallery</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
