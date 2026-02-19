import Link from 'next/link';
import { HeroSlider, ProductGrid } from '@/components/catalog';
import { CTASection, TestimonialList } from '@/components/sections';
import { QuoteForm } from '@/components/forms';
import { products } from '@/data/products';

export default function HomePage() {
  return <main>
    <HeroSlider />
    <section className="section container"><div className="card"><h2>Welcome to SteelBuild Co.</h2><p>We design practical steel structures for homes, farms, and businesses with quality materials and transparent pricing.</p><Link className="btn" href="/about-us">Know More</Link></div></section>
    <section className="section container"><h2>Explore Our High-Quality Steel Structures</h2><ProductGrid items={products.slice(0, 8)} /></section>
    <section className="section container"><h2>Customer Stories</h2><TestimonialList /><p><Link href="/customer-reviews">View More Reviews</Link></p></section>
    <CTASection title="Create Your Building in 3D" description="Use our interactive planning tool to preview dimensions, roof options, and colors." href="https://example.com" button="Launch 3D Designer" />
    <CTASection title="Flexible RTO & Financing" description="Find a payment option that aligns with your project timeline and budget." href="/rto-financing" button="Explore Financing" />
    <CTASection title="Become a Dealer" description="Join our dealer network and grow your local building business." href="/become-a-dealer" button="Apply Today" />
    <section className="section container"><QuoteForm title="Get in touch with us" /></section>
  </main>;
}
