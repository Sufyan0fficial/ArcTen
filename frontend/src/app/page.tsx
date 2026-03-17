import Link from 'next/link';
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import jacketImg from '@/assets/jacket.png';
import bagImg from '@/assets/bag.png';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-gray-900 to-primary pt-20">
        <div className="container-custom text-center px-4">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Premium Leather Manufacturing
            <span className="block text-accent">at Scale</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From custom leather jackets to bespoke bags — ARCTen delivers exceptional craftsmanship for brands that demand excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#quote" className="btn-primary text-lg">
              Request a Wholesale Quote
            </Link>
            <Link href="#process" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg">
              See Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Brands Served' },
              { number: '15+', label: 'Years of Craftsmanship' },
              { number: '50,000+', label: 'Units Delivered Annually' },
              { number: 'ISO 9001', label: 'Certified' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl md:text-3xl text-secondary">{stat.number}</p>
                <p className="text-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="about" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl text-primary mb-4">
              Why Leading Brands Choose ARCTen
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern manufacturing capabilities to deliver premium leather goods at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '◆',
                title: 'Uncompromising Quality',
                description: 'Full-grain leather, precision stitching, and rigorous quality control on every piece.',
              },
              {
                icon: '◈',
                title: 'Flexible MOQ',
                description: 'From 50 to 50,000 units per order. We scale with your business needs.',
              },
              {
                icon: '◇',
                title: 'White-Label Ready',
                description: 'Your brand, our craftsmanship. Complete customization and private labeling.',
              },
              {
                icon: '◊',
                title: 'On-Time Delivery',
                description: '98.7% on-time delivery rate. Your deadlines are our priority.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-accent text-3xl">{item.icon}</span>
                <h3 className="font-heading text-xl text-primary mt-4 mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section id="products" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl text-primary mb-4">
              Our Product Lines
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Premium leather goods designed for wholesale and white-label partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
              <Image
                src={jacketImg}
                alt="Premium leather jackets"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="font-heading text-3xl mb-2">Leather Jackets</h3>
                  <p className="text-white/80 mb-4">Bomber, biker, blazer, and custom styles. Full customization available.</p>
                  <Link href="#quote" className="text-accent font-medium hover:text-white transition-colors">
                    Request Samples →
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
              <Image
                src={bagImg}
                alt="Premium leather bags"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="font-heading text-3xl mb-2">Leather Bags</h3>
                  <p className="text-white/80 mb-4">Totes, duffels, briefcases, and accessories. Bespoke designs welcome.</p>
                  <Link href="#quote" className="text-accent font-medium hover:text-white transition-colors">
                    Request Samples →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section id="process" className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl mb-4">
              Our Production Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From concept to delivery in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Share your vision, specifications, and quantity requirements. Our team will guide you through material options and customization possibilities.',
              },
              {
                step: '02',
                title: 'Sampling',
                description: 'Receive physical samples for your approval before full production begins. Iterate until the product meets your exact standards.',
              },
              {
                step: '03',
                title: 'Production & Delivery',
                description: 'Full-scale manufacturing with rigorous quality control. Global shipping with real-time tracking and on-time delivery guarantee.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center md:text-left">
                <span className="text-accent font-heading text-5xl">{item.step}</span>
                <h3 className="font-heading text-2xl mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl text-primary mb-4">
                Request a Wholesale Quote
              </h2>
              <p className="text-muted">
                Tell us about your project and we&apos;ll provide a detailed quote within 24 hours.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to Partner with ARCTen?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Join 500+ brands who trust us for their premium leather manufacturing needs.
          </p>
          <Link href="#quote" className="bg-white text-primary font-semibold px-8 py-4 rounded hover:bg-accent transition-colors inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
