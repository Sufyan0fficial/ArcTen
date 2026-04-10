import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Logo className="h-10 w-auto mb-6" color="#FDFBF7" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Premium leather manufacturing for brands that demand excellence. 
              15+ years of craftsmanship, serving 500+ global partners.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-accent mb-6">Navigate</h4>
            <ul className="space-y-3">
              {['About', 'Gallery', 'Manufacturing'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-accent mb-6">Products</h4>
            <ul className="space-y-3">
              {['Leather Jackets', 'Leather Bags', 'Custom Orders', 'White Label'].map((item) => (
                <li key={item}>
                  <Link 
                    href="/gallery" 
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-accent mb-6">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>wholesale@arcten.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
            <Link 
              href="/#quote" 
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-accent 
                       hover:text-white transition-colors duration-300 group"
            >
              <span>Request a Quote</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} ARCTen Leather Manufacturing. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/30 text-xs">
            <Link href="#" className="hover:text-white/60 transition-colors duration-300">Privacy</Link>
            <Link href="#" className="hover:text-white/60 transition-colors duration-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
