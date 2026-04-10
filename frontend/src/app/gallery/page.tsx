'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Category = 'all' | 'jackets' | 'bags';

interface Product {
  id: number;
  name: string;
  category: 'jackets' | 'bags';
  style: string;
  color: string;
  gradient: string;
}

const products: Product[] = [
  // Jackets (20 items)
  { id: 1, name: 'Classic Biker', category: 'jackets', style: 'Biker', color: 'Black', gradient: 'from-zinc-800 to-zinc-900' },
  { id: 2, name: 'Vintage Bomber', category: 'jackets', style: 'Bomber', color: 'Brown', gradient: 'from-amber-800 to-amber-950' },
  { id: 3, name: 'Executive Blazer', category: 'jackets', style: 'Blazer', color: 'Navy', gradient: 'from-slate-700 to-slate-900' },
  { id: 4, name: 'Moto Racer', category: 'jackets', style: 'Biker', color: 'Cognac', gradient: 'from-orange-800 to-orange-950' },
  { id: 5, name: 'Aviator Classic', category: 'jackets', style: 'Bomber', color: 'Tan', gradient: 'from-yellow-800 to-yellow-950' },
  { id: 6, name: 'Urban Edge', category: 'jackets', style: 'Biker', color: 'Charcoal', gradient: 'from-neutral-700 to-neutral-900' },
  { id: 7, name: 'Heritage Trucker', category: 'jackets', style: 'Trucker', color: 'Whiskey', gradient: 'from-amber-700 to-amber-900' },
  { id: 8, name: 'Café Racer', category: 'jackets', style: 'Biker', color: 'Oxblood', gradient: 'from-red-900 to-red-950' },
  { id: 9, name: 'Minimalist Moto', category: 'jackets', style: 'Biker', color: 'Slate', gradient: 'from-gray-600 to-gray-800' },
  { id: 10, name: 'Shearling Aviator', category: 'jackets', style: 'Bomber', color: 'Chocolate', gradient: 'from-stone-700 to-stone-900' },
  { id: 11, name: 'Cropped Biker', category: 'jackets', style: 'Biker', color: 'Black', gradient: 'from-zinc-700 to-zinc-950' },
  { id: 12, name: 'Suede Bomber', category: 'jackets', style: 'Bomber', color: 'Camel', gradient: 'from-yellow-700 to-yellow-900' },
  { id: 13, name: 'Racing Stripe', category: 'jackets', style: 'Biker', color: 'Black/White', gradient: 'from-neutral-800 to-neutral-950' },
  { id: 14, name: 'Quilted Moto', category: 'jackets', style: 'Biker', color: 'Forest', gradient: 'from-emerald-900 to-emerald-950' },
  { id: 15, name: 'Double Rider', category: 'jackets', style: 'Biker', color: 'Black', gradient: 'from-zinc-800 to-black' },
  { id: 16, name: 'Field Jacket', category: 'jackets', style: 'Field', color: 'Olive', gradient: 'from-lime-900 to-lime-950' },
  { id: 17, name: 'Perfecto', category: 'jackets', style: 'Biker', color: 'Black', gradient: 'from-neutral-900 to-black' },
  { id: 18, name: 'Varsity Hybrid', category: 'jackets', style: 'Bomber', color: 'Burgundy', gradient: 'from-rose-900 to-rose-950' },
  { id: 19, name: 'Distressed Rider', category: 'jackets', style: 'Biker', color: 'Vintage Brown', gradient: 'from-amber-900 to-stone-900' },
  { id: 20, name: 'Modern Blazer', category: 'jackets', style: 'Blazer', color: 'Espresso', gradient: 'from-stone-800 to-stone-950' },
  
  // Bags (20 items)
  { id: 21, name: 'Executive Briefcase', category: 'bags', style: 'Briefcase', color: 'Black', gradient: 'from-zinc-800 to-zinc-900' },
  { id: 22, name: 'Weekend Duffle', category: 'bags', style: 'Duffle', color: 'Cognac', gradient: 'from-amber-800 to-amber-950' },
  { id: 23, name: 'Classic Tote', category: 'bags', style: 'Tote', color: 'Tan', gradient: 'from-yellow-800 to-yellow-950' },
  { id: 24, name: 'Messenger Pro', category: 'bags', style: 'Messenger', color: 'Brown', gradient: 'from-stone-700 to-stone-900' },
  { id: 25, name: 'Travel Holdall', category: 'bags', style: 'Duffle', color: 'Black', gradient: 'from-neutral-800 to-neutral-950' },
  { id: 26, name: 'Laptop Sleeve', category: 'bags', style: 'Sleeve', color: 'Navy', gradient: 'from-slate-700 to-slate-900' },
  { id: 27, name: 'Crossbody Satchel', category: 'bags', style: 'Crossbody', color: 'Burgundy', gradient: 'from-red-900 to-red-950' },
  { id: 28, name: 'Doctor Bag', category: 'bags', style: 'Doctor', color: 'Oxblood', gradient: 'from-rose-900 to-rose-950' },
  { id: 29, name: 'Backpack Urban', category: 'bags', style: 'Backpack', color: 'Charcoal', gradient: 'from-gray-700 to-gray-900' },
  { id: 30, name: 'Slim Portfolio', category: 'bags', style: 'Portfolio', color: 'Black', gradient: 'from-zinc-700 to-zinc-950' },
  { id: 31, name: 'Weekender XL', category: 'bags', style: 'Duffle', color: 'Whiskey', gradient: 'from-amber-700 to-amber-900' },
  { id: 32, name: 'Structured Tote', category: 'bags', style: 'Tote', color: 'Camel', gradient: 'from-yellow-700 to-yellow-900' },
  { id: 33, name: 'Tech Messenger', category: 'bags', style: 'Messenger', color: 'Slate', gradient: 'from-neutral-700 to-neutral-900' },
  { id: 34, name: 'Garment Carrier', category: 'bags', style: 'Garment', color: 'Black', gradient: 'from-zinc-900 to-black' },
  { id: 35, name: 'Mini Crossbody', category: 'bags', style: 'Crossbody', color: 'Forest', gradient: 'from-emerald-900 to-emerald-950' },
  { id: 36, name: 'Bucket Bag', category: 'bags', style: 'Bucket', color: 'Chocolate', gradient: 'from-stone-800 to-stone-950' },
  { id: 37, name: 'Convertible Pack', category: 'bags', style: 'Backpack', color: 'Olive', gradient: 'from-lime-900 to-lime-950' },
  { id: 38, name: 'Dopp Kit', category: 'bags', style: 'Toiletry', color: 'Brown', gradient: 'from-amber-900 to-stone-900' },
  { id: 39, name: 'Camera Bag', category: 'bags', style: 'Camera', color: 'Vintage Tan', gradient: 'from-orange-800 to-orange-950' },
  { id: 40, name: 'Clutch Folio', category: 'bags', style: 'Clutch', color: 'Black', gradient: 'from-neutral-900 to-black' },
];

export default function GalleryPage() {
  const containerRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const categories: { key: Category; label: string; count: number }[] = [
    { key: 'all', label: 'All Products', count: products.length },
    { key: 'jackets', label: 'Jackets', count: products.filter(p => p.category === 'jackets').length },
    { key: 'bags', label: 'Bags', count: products.filter(p => p.category === 'bags').length },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container-custom px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="reveal eyebrow mb-6 inline-block">The Collection</span>
            <h1 className="reveal stagger-1 font-heading text-5xl md:text-7xl text-charcoal mb-6 leading-[0.95]">
              Crafted with
              <span className="text-accent"> Precision</span>
            </h1>
            <p className="reveal stagger-2 text-charcoal/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              Explore our complete range of premium leather jackets and bags. 
              Each piece represents the pinnacle of craftsmanship and design.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-20 py-4 bg-cream/80 backdrop-blur-xl border-y border-charcoal/5">
        <div className="container-custom px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`
                  px-5 py-2.5 rounded-full text-sm font-medium
                  transition-all duration-500 ease-out-expo
                  ${activeCategory === cat.key 
                    ? 'bg-charcoal text-cream' 
                    : 'bg-stone/50 text-charcoal/60 hover:bg-stone hover:text-charcoal'}
                `}
              >
                {cat.label}
                <span className={`ml-2 text-xs ${activeCategory === cat.key ? 'text-cream/60' : 'text-charcoal/40'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Masonry-style Bento */}
      <section className="section-padding">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, i) => {
              // Create visual variety with different sizes
              const isLarge = i % 7 === 0;
              const isMedium = i % 5 === 2;
              
              return (
                <div
                  key={product.id}
                  className={`
                    reveal group cursor-pointer
                    ${isLarge ? 'col-span-2 row-span-2' : ''}
                    ${isMedium ? 'md:col-span-2' : ''}
                  `}
                  style={{ animationDelay: `${Math.min(i * 50, 500)}ms` }}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="card-shell h-full">
                    <div className={`
                      card-inner h-full overflow-hidden
                      ${isLarge ? 'aspect-square' : isMedium ? 'aspect-[2/1]' : 'aspect-[3/4]'}
                    `}>
                      {/* Product Visual */}
                      <div className={`
                        absolute inset-0 bg-gradient-to-br ${product.gradient}
                        transition-transform duration-700 ease-out-expo
                        ${hoveredId === product.id ? 'scale-105' : 'scale-100'}
                      `}>
                        {/* Leather texture overlay */}
                        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                          }}
                        />
                        
                        {/* Product icon/silhouette */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`
                            font-heading text-white/10
                            ${isLarge ? 'text-[120px]' : isMedium ? 'text-[80px]' : 'text-[60px]'}
                          `}>
                            {product.category === 'jackets' ? '◆' : '◇'}
                          </span>
                        </div>
                      </div>

                      {/* Content overlay */}
                      <div className={`
                        absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                        flex flex-col justify-end p-4 md:p-6
                        transition-opacity duration-500 ease-out-expo
                        ${hoveredId === product.id ? 'opacity-100' : 'opacity-0 md:opacity-100'}
                      `}>
                        <div className={`
                          transition-transform duration-500 ease-out-expo
                          ${hoveredId === product.id ? 'translate-y-0' : 'translate-y-2'}
                        `}>
                          <span className="text-accent/80 text-xs uppercase tracking-wider">
                            {product.style} · {product.color}
                          </span>
                          <h3 className={`
                            font-heading text-cream mt-1
                            ${isLarge ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}
                          `}>
                            {product.name}
                          </h3>
                        </div>

                        {/* Hover action */}
                        <div className={`
                          mt-4 transition-all duration-500 ease-out-expo
                          ${hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}>
                          <span className="inline-flex items-center gap-2 text-sm text-cream/80 font-medium">
                            <span>Request Sample</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="reveal eyebrow bg-accent/20 text-accent mb-6 inline-block">Custom Orders</span>
            <h2 className="reveal stagger-1 font-heading text-4xl md:text-5xl text-cream mb-6">
              Don&apos;t See What You Need?
            </h2>
            <p className="reveal stagger-2 text-cream/60 text-lg mb-10">
              We specialize in custom designs. Share your vision and we&apos;ll bring it to life 
              with the same premium quality and attention to detail.
            </p>
            <Link href="/#quote" className="reveal stagger-3 btn-premium bg-accent text-charcoal hover:bg-cream inline-flex">
              <span>Request Custom Quote</span>
              <span className="btn-premium-icon bg-charcoal/10">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
