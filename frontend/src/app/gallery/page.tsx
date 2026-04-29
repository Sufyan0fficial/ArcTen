'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Import all images
import img1 from '@/assets/images/alexandr-sadkov-BnG4KWAzt9c-unsplash.jpg';
import img2 from '@/assets/images/ali-karimiboroujeni-zzKT12IXGfA-unsplash.jpg';
import img3 from '@/assets/images/amir-soltani-L3XJ-y7w9lI-unsplash.jpg';
import img4 from '@/assets/images/ana-nichita-IfNYCBwtAL4-unsplash.jpg';
import img5 from '@/assets/images/aphrodites-daughter-qA2glaGFJlY-unsplash.jpg';
import img6 from '@/assets/images/bag-hanging-from-furniture-item-indoors.jpg';
import img7 from '@/assets/images/close-up-elegant-bag.jpg';
import img8 from '@/assets/images/cord-allman-nadKjcnxSus-unsplash.jpg';
import img9 from '@/assets/images/dominick-valencia-BMRG3mTtsTU-unsplash.jpg';
import img10 from '@/assets/images/elijah-crouch-_23LFX1DgL0-unsplash.jpg';
import img11 from '@/assets/images/front-view-woman-holding-purses.jpg';
import img12 from '@/assets/images/gabriel-ogulu-LFdeDDqkt54-unsplash.jpg';
import img13 from '@/assets/images/josephine-messien-EtUpQVWNn4M-unsplash.jpg';
import img14 from '@/assets/images/juan-boche-vuNG1Jglszk-unsplash.jpg';
import img15 from '@/assets/images/julia-kicova-rxMyBIxH3qg-unsplash.jpg';
import img16 from '@/assets/images/latico-leathers-g2UlpYhGUlM-unsplash.jpg';
import img17 from '@/assets/images/lea-ochel-nsRBbE6-YLs-unsplash.jpg';
import img18 from '@/assets/images/leonie-giardini-rpUKVRCyceo-unsplash.jpg';
import img19 from '@/assets/images/luis-olmos-boVc1MK5ooE-unsplash.jpg';
import img20 from '@/assets/images/maks_d-6VMhmxkuEOU-unsplash.jpg';
import img21 from '@/assets/images/marcin-kempa-cjUxiJoVzc0-unsplash.jpg';
import img22 from '@/assets/images/marjan-sadeghi-b_4RWHexTck-unsplash.jpg';
import img23 from '@/assets/images/micah-tindell-ysu9athq_BU-unsplash.jpg';
import img24 from '@/assets/images/michael-starkie-cyiIKEgfajs-unsplash.jpg';
import img25 from '@/assets/images/mont-bold-7FuEauq8cZs-unsplash.jpg';
import img26 from '@/assets/images/personalgraphic-com-IFlg3kFbR0E-unsplash.jpg';
import img27 from '@/assets/images/prateek-saxena-oPk4vwSlblE-unsplash.jpg';
import img28 from '@/assets/images/riccardo-sartori-NOtnpXvJwFk-unsplash.jpg';
import img29 from '@/assets/images/ryan-snaadt-QX83Ckq15BA-unsplash.jpg';
import img30 from '@/assets/images/tania-mousinho-3xAELIhEMrI-unsplash.jpg';
import img31 from '@/assets/images/tania-mousinho-vnPgygm8vkU-unsplash.jpg';
import img32 from '@/assets/images/vitruvian-badr-mD4i35RFZhU-unsplash.jpg';
import img33 from '@/assets/images/zahra-Ja33lkJc4JQ-unsplash.jpg';

import { PiArrowRight } from 'react-icons/pi';

import { StaticImageData } from 'next/image';

type Category = 'all' | 'jackets' | 'bags';

interface Product {
  id: number;
  name: string;
  category: 'jackets' | 'bags';
  style: string;
  color: string;
  image: StaticImageData;
  size: 'normal' | 'tall' | 'wide' | 'large';
}

const products: Product[] = [
  // Jackets
  { id: 1, name: 'Classic Biker', category: 'jackets', style: 'Biker', color: 'Black', image: img1, size: 'large' },
  { id: 2, name: 'Vintage Bomber', category: 'jackets', style: 'Bomber', color: 'Brown', image: img2, size: 'normal' },
  { id: 3, name: 'Executive Blazer', category: 'jackets', style: 'Blazer', color: 'Navy', image: img3, size: 'tall' },
  { id: 4, name: 'Moto Racer', category: 'jackets', style: 'Biker', color: 'Cognac', image: img4, size: 'normal' },
  { id: 5, name: 'Aviator Classic', category: 'jackets', style: 'Bomber', color: 'Tan', image: img5, size: 'wide' },
  { id: 6, name: 'Urban Edge', category: 'jackets', style: 'Biker', color: 'Charcoal', image: img8, size: 'normal' },
  { id: 7, name: 'Heritage Trucker', category: 'jackets', style: 'Trucker', color: 'Whiskey', image: img9, size: 'tall' },
  { id: 8, name: 'Café Racer', category: 'jackets', style: 'Biker', color: 'Oxblood', image: img10, size: 'large' },
  { id: 9, name: 'Minimalist Moto', category: 'jackets', style: 'Biker', color: 'Slate', image: img12, size: 'normal' },
  { id: 10, name: 'Shearling Aviator', category: 'jackets', style: 'Bomber', color: 'Chocolate', image: img14, size: 'normal' },
  { id: 11, name: 'Cropped Biker', category: 'jackets', style: 'Biker', color: 'Black', image: img18, size: 'wide' },
  { id: 12, name: 'Suede Bomber', category: 'jackets', style: 'Bomber', color: 'Camel', image: img19, size: 'normal' },
  { id: 13, name: 'Racing Stripe', category: 'jackets', style: 'Biker', color: 'Black/White', image: img20, size: 'tall' },
  { id: 14, name: 'Quilted Moto', category: 'jackets', style: 'Biker', color: 'Forest', image: img24, size: 'normal' },
  { id: 15, name: 'Double Rider', category: 'jackets', style: 'Biker', color: 'Black', image: img25, size: 'large' },
  { id: 16, name: 'Field Jacket', category: 'jackets', style: 'Field', color: 'Olive', image: img28, size: 'normal' },
  { id: 17, name: 'Perfecto', category: 'jackets', style: 'Biker', color: 'Black', image: img29, size: 'normal' },
  
  // Bags
  { id: 18, name: 'Executive Briefcase', category: 'bags', style: 'Briefcase', color: 'Black', image: img6, size: 'wide' },
  { id: 19, name: 'Weekend Duffle', category: 'bags', style: 'Duffle', color: 'Cognac', image: img7, size: 'normal' },
  { id: 20, name: 'Classic Tote', category: 'bags', style: 'Tote', color: 'Tan', image: img11, size: 'large' },
  { id: 21, name: 'Messenger Pro', category: 'bags', style: 'Messenger', color: 'Brown', image: img13, size: 'normal' },
  { id: 22, name: 'Travel Holdall', category: 'bags', style: 'Duffle', color: 'Black', image: img15, size: 'tall' },
  { id: 23, name: 'Laptop Sleeve', category: 'bags', style: 'Sleeve', color: 'Navy', image: img16, size: 'normal' },
  { id: 24, name: 'Crossbody Satchel', category: 'bags', style: 'Crossbody', color: 'Burgundy', image: img17, size: 'normal' },
  { id: 25, name: 'Doctor Bag', category: 'bags', style: 'Doctor', color: 'Oxblood', image: img21, size: 'wide' },
  { id: 26, name: 'Backpack Urban', category: 'bags', style: 'Backpack', color: 'Charcoal', image: img22, size: 'tall' },
  { id: 27, name: 'Slim Portfolio', category: 'bags', style: 'Portfolio', color: 'Black', image: img23, size: 'normal' },
  { id: 28, name: 'Weekender XL', category: 'bags', style: 'Duffle', color: 'Whiskey', image: img26, size: 'large' },
  { id: 29, name: 'Structured Tote', category: 'bags', style: 'Tote', color: 'Camel', image: img27, size: 'normal' },
  { id: 30, name: 'Mini Crossbody', category: 'bags', style: 'Crossbody', color: 'Forest', image: img30, size: 'normal' },
  { id: 31, name: 'Bucket Bag', category: 'bags', style: 'Bucket', color: 'Chocolate', image: img31, size: 'tall' },
  { id: 32, name: 'Convertible Pack', category: 'bags', style: 'Backpack', color: 'Olive', image: img32, size: 'normal' },
  { id: 33, name: 'Camera Bag', category: 'bags', style: 'Camera', color: 'Vintage Tan', image: img33, size: 'wide' },
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

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'tall':
        return 'row-span-2';
      case 'wide':
        return 'col-span-2';
      default:
        return '';
    }
  };

  const getAspectClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'aspect-square';
      case 'tall':
        return 'aspect-[3/5]';
      case 'wide':
        return 'aspect-[2/1]';
      default:
        return 'aspect-[4/5]';
    }
  };

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
      <section className="py-6 bg-cream/80 backdrop-blur-xl border-y border-charcoal/5">
        <div className="container-custom px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
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

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4 md:gap-5">
            {filteredProducts.map((product, i) => (
              <div
                key={product.id}
                className={`reveal group cursor-pointer ${getSizeClasses(product.size)}`}
                style={{ animationDelay: `${Math.min(i * 40, 400)}ms` }}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="card-shell h-full">
                  <div className="card-inner h-full overflow-hidden relative">
                    {/* Product Image */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className={`
                        object-cover transition-transform duration-700 ease-out-expo
                        ${hoveredId === product.id ? 'scale-110' : 'scale-100'}
                      `}
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      placeholder="blur"
                    />

                    {/* Gradient overlay */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent
                      transition-opacity duration-500
                      ${hoveredId === product.id ? 'opacity-100' : 'opacity-70'}
                    `} />

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                      <div className={`
                        transition-transform duration-500 ease-out-expo
                        ${hoveredId === product.id ? 'translate-y-0' : 'translate-y-1'}
                      `}>
                        <span className="text-accent text-[10px] md:text-xs uppercase tracking-wider font-medium">
                          {product.style} · {product.color}
                        </span>
                        <h3 className={`
                          font-heading text-cream mt-1 leading-tight
                          ${product.size === 'large' ? 'text-xl md:text-3xl' : 'text-base md:text-xl'}
                        `}>
                          {product.name}
                        </h3>
                      </div>

                      {/* Hover action */}
                      <div className={`
                        mt-3 transition-all duration-500 ease-out-expo
                        ${hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
                      `}>
                        <Link 
                          href="/#quote"
                          className="inline-flex items-center gap-2 text-xs md:text-sm text-cream/90 font-medium
                                   hover:text-accent transition-colors"
                        >
                          <span>Request Sample</span>
                          <PiArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <Link href="/#quote" className="reveal stagger-3 btn-premium bg-accent text-charcoal hover:bg-cream inline-flex group">
              <span>Request Custom Quote</span>
              <span className="btn-premium-icon bg-charcoal/10">
                <PiArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
