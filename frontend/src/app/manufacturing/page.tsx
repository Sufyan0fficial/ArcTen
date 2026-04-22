'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import certificationImage from '@/assets/images/riccardo-sartori-NOtnpXvJwFk-unsplash.jpg';

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
      <section className="py-20 bg-stone/30 border-y border-charcoal/5">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilities.map((stat, i) => (
              <div key={stat.label} className={`reveal stagger-${Math.min(i + 1, 5)}`}>
                <div className="card-shell h-full">
                  <div className="card-inner p-5 text-center h-full flex flex-col justify-center">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center">
                      {i === 0 && (
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                      )}
                      {i === 1 && (
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                      )}
                      {i === 2 && (
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
                        </svg>
                      )}
                      {i === 3 && (
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      )}
                      {i === 4 && (
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                      )}
                      {i === 5 && (
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                      )}
                    </div>
                    <p className="font-heading text-2xl md:text-3xl text-charcoal mb-1">{stat.value}</p>
                    <p className="text-charcoal/50 text-xs">{stat.label}</p>
                  </div>
                </div>
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
                <div className="image-inner aspect-square relative overflow-hidden">
                  <Image
                    src={certificationImage}
                    alt="Quality craftsmanship at ARCTen"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
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
                { 
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                  ),
                  title: 'Responsible Sourcing', 
                  desc: 'LWG-certified tanneries only' 
                },
                { 
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  ),
                  title: 'Zero Waste', 
                  desc: '98% material utilization rate' 
                },
                { 
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  ),
                  title: 'Clean Energy', 
                  desc: '60% solar-powered facility' 
                },
              ].map((item) => (
                <div key={item.title} className="card-shell bg-white/5">
                  <div className="card-inner bg-white/5 p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-4 mx-auto">
                      {item.icon}
                    </div>
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
