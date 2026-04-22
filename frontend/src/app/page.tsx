'use client';

import Link from 'next/link';
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import jacketImg from '@/assets/jacket.png';
import bagImg from '@/assets/bag.png';

// Professional SVG Icons - Ultra-light stroke weight
const icons = {
  quality: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  scale: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
    </svg>
  ),
  label: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
  ),
  delivery: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
};

export default function Home() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container-custom px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal">
              <span className="eyebrow mb-6 inline-block">Est. 2009 · 500+ Brands Served</span>
            </div>
            
            <h1 className="reveal stagger-1 font-heading text-5xl md:text-7xl lg:text-8xl text-charcoal mb-8 leading-[0.95]">
              Premium Leather
              <span className="block text-accent">Manufacturing</span>
            </h1>
            
            <p className="reveal stagger-2 text-charcoal/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              From custom leather jackets to bespoke bags — ARCTen delivers exceptional 
              craftsmanship for brands that demand excellence.
            </p>
            
            <div className="reveal stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#quote" className="btn-premium text-base">
                <span>Request a Wholesale Quote</span>
                <span className="btn-premium-icon">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </Link>
              <Link href="/manufacturing" className="btn-secondary-premium text-base">
                <span>See Our Process</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal/30">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-charcoal/30 to-transparent" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 border-y border-charcoal/5">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { number: '500+', label: 'Brands Served' },
              { number: '15+', label: 'Years Excellence' },
              { number: '50K+', label: 'Units Annually' },
              { number: 'ISO 9001', label: 'Certified' },
            ].map((stat, i) => (
              <div key={stat.label} className={`reveal stagger-${i + 1} text-center`}>
                <p className="font-heading text-3xl md:text-4xl text-charcoal mb-1">{stat.number}</p>
                <p className="text-charcoal/40 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition - Bento Grid */}
      <section className="section-padding">
        <div className="container-custom px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="reveal eyebrow mb-4 inline-block">Why ARCTen</span>
            <h2 className="reveal stagger-1 font-heading text-4xl md:text-6xl text-charcoal">
              Crafted for Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Large card */}
            <div className="reveal md:col-span-8 card-shell">
              <div className="card-inner p-8 md:p-12 h-full">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {icons.quality}
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">Uncompromising Quality</h3>
                <p className="text-charcoal/60 leading-relaxed max-w-lg">
                  Full-grain leather sourced from the finest tanneries, precision stitching by master craftsmen, 
                  and rigorous quality control on every single piece that leaves our facility.
                </p>
              </div>
            </div>

            {/* Stacked cards */}
            <div className="reveal stagger-1 md:col-span-4 flex flex-col gap-4">
              <div className="card-shell flex-1">
                <div className="card-inner p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                    {icons.scale}
                  </div>
                  <h3 className="font-heading text-xl text-charcoal mb-2">Flexible MOQ</h3>
                  <p className="text-charcoal/60 text-sm">From 50 to 50,000 units. We scale with your needs.</p>
                </div>
              </div>
              <div className="card-shell flex-1">
                <div className="card-inner p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                    {icons.label}
                  </div>
                  <h3 className="font-heading text-xl text-charcoal mb-2">White-Label Ready</h3>
                  <p className="text-charcoal/60 text-sm">Your brand, our craftsmanship. Complete customization.</p>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="reveal stagger-2 md:col-span-4 card-shell">
              <div className="card-inner p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {icons.delivery}
                </div>
                <h3 className="font-heading text-xl text-charcoal mb-2">On-Time Delivery</h3>
                <p className="text-charcoal/60 text-sm">98.7% on-time delivery rate. Your deadlines are our priority.</p>
              </div>
            </div>

            <div className="reveal stagger-3 md:col-span-8 card-shell bg-charcoal/5">
              <div className="card-inner bg-charcoal p-8 md:p-12 h-full flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-heading text-2xl text-cream mb-2">Ready to Partner?</h3>
                  <p className="text-cream/60">Join 500+ brands who trust ARCTen.</p>
                </div>
                <Link href="#quote" className="btn-premium bg-accent text-charcoal hover:bg-cream shrink-0">
                  <span>Get Started</span>
                  <span className="btn-premium-icon bg-charcoal/10">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-stone/30">
        <div className="container-custom px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="reveal eyebrow mb-4 inline-block">Our Craft</span>
            <h2 className="reveal stagger-1 font-heading text-4xl md:text-6xl text-charcoal mb-4">
              Product Lines
            </h2>
            <p className="reveal stagger-2 text-charcoal/60 max-w-xl mx-auto">
              Premium leather goods designed for wholesale and white-label partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { img: jacketImg, title: 'Leather Jackets', desc: 'Bomber, biker, blazer, and custom styles.' },
              { img: bagImg, title: 'Leather Bags', desc: 'Totes, duffels, briefcases, and accessories.' },
            ].map((product, i) => (
              <div key={product.title} className={`reveal stagger-${i + 1} group`}>
                <div className="image-shell">
                  <div className="image-inner relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="font-heading text-3xl text-cream mb-2">{product.title}</h3>
                      <p className="text-cream/70 mb-4">{product.desc}</p>
                      <Link 
                        href="/gallery" 
                        className="inline-flex items-center gap-2 text-accent font-medium 
                                 transition-all duration-300 group-hover:gap-3"
                      >
                        <span>View Collection</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-charcoal text-cream">
        <div className="container-custom px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="reveal eyebrow bg-accent/20 text-accent mb-4 inline-block">The Process</span>
            <h2 className="reveal stagger-1 font-heading text-4xl md:text-6xl mb-4">
              From Concept to Delivery
            </h2>
            <p className="reveal stagger-2 text-cream/50 max-w-xl mx-auto">
              Three simple steps to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { step: '01', title: 'Consultation', desc: 'Share your vision and requirements. We guide you through materials and customization.' },
              { step: '02', title: 'Sampling', desc: 'Receive physical samples for approval. Iterate until perfection.' },
              { step: '03', title: 'Production', desc: 'Full-scale manufacturing with rigorous QC. Global shipping with tracking.' },
            ].map((item, i) => (
              <div key={item.step} className={`reveal stagger-${i + 1} text-center md:text-left`}>
                <span className="font-heading text-6xl text-accent/30">{item.step}</span>
                <h3 className="font-heading text-2xl mt-4 mb-3">{item.title}</h3>
                <p className="text-cream/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal stagger-4 text-center mt-16">
            <Link href="/manufacturing" className="btn-premium bg-cream text-charcoal hover:bg-accent">
              <span>See Full Process</span>
              <span className="btn-premium-icon bg-charcoal/10">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="section-padding">
        <div className="container-custom px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="reveal eyebrow mb-4 inline-block">Let&apos;s Talk</span>
              <h2 className="reveal stagger-1 font-heading text-4xl md:text-5xl text-charcoal mb-4">
                Request a Quote
              </h2>
              <p className="reveal stagger-2 text-charcoal/60">
                Tell us about your project. We respond within 24 hours.
              </p>
            </div>

            <div className="reveal stagger-3 card-shell">
              <div className="card-inner p-8 md:p-12">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
