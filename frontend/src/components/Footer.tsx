import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo className="h-10 w-auto mb-4" color="#FFFFFF" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium leather manufacturing for brands that demand excellence. 15+ years of craftsmanship.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-accent">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Leather Jackets</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Leather Bags</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Custom Orders</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">White Label</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-accent">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Quality Assurance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-accent">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>wholesale@arcten.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="pt-2">
                <Link href="#quote" className="text-accent hover:text-white transition-colors font-medium">
                  Request a Quote →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ARCTen. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
