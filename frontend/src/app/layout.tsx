import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'ARCTen | Premium Leather Manufacturing',
  description: 'High-end custom leather jackets and bags for wholesale, white-labeling, and corporate gifting. 15+ years of craftsmanship excellence.',
  keywords: 'leather manufacturing, wholesale leather jackets, custom leather bags, white label leather, corporate gifting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body bg-background text-text">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
