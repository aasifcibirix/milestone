'use client';
import Link from 'next/link';
import { useState } from 'react';
import { categories } from '@/data/categories';

const aboutLinks = [
  '/about-us','/projects-gallery','/customer-reviews','/service-area','/color-options','/insulation','/building-faqs','/contact-us'
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="topbar"><div className="container"><span>Call: (800) 000-0000</span><div style={{ display: 'flex', gap: '.75rem' }}><a href="#">BBB Accredited</a><a className="btn secondary" href="https://example.com" target="_blank">3D DESIGN</a></div></div></div>
      <nav className="nav container" aria-label="Main navigation">
        <Link href="/">SteelBuild Co.</Link>
        <ul className="desktop-only">
          <li><Link href="/shop">Shop</Link></li>
          <li><span>Steel Structures</span><ul>{categories.slice(0,5).map((c) => <li key={c.slug}><Link href={`/${c.slug}`}>{c.name}</Link></li>)}</ul></li>
          <li><span>About Us</span><ul>{aboutLinks.map((a) => <li key={a}><Link href={a}>{a.replace('/', '').replaceAll('-', ' ')}</Link></li>)}</ul></li>
          <li><Link href="/rto-financing">RTO & Financing</Link></li>
          <li><Link href="/become-a-dealer">Become a Dealer</Link></li>
        </ul>
        <button className="mobile-only btn secondary" onClick={() => setOpen(!open)} aria-expanded={open}>Menu</button>
      </nav>
      {open ? <div className="mobile-only card" style={{ margin: '0 1rem 1rem' }}><MobileNav onClose={() => setOpen(false)} /></div> : null}
    </header>
  );
}

export function MobileNav({ onClose }: { onClose: () => void }) {
  return <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '.75rem' }}>{['/','/shop','/rto-financing','/become-a-dealer',...categories.slice(0,5).map((c)=>`/${c.slug}`),...aboutLinks].map((link)=><li key={link}><Link href={link} onClick={onClose}>{link === '/' ? 'Home' : link.slice(1).replaceAll('-', ' ')}</Link></li>)}</ul>;
}

export function Footer() {
  return <footer className="footer"><div className="container section grid row-4"><div><h4>Building Types</h4>{categories.slice(0,5).map((c)=><p key={c.slug}><Link href={`/${c.slug}`}>{c.name}</Link></p>)}</div><div><h4>Quick Links</h4>{['/shop','/about-us','/contact-us','/rto-financing'].map((l)=><p key={l}><Link href={l}>{l.slice(1).replaceAll('-', ' ')}</Link></p>)}</div><div><h4>Office</h4><p>123 Industry Way<br/>Dallas, TX 75000</p><p>Mon-Fri: 8am-6pm</p></div><div><h4>Contact</h4><p>(800) 000-0000</p><p>hello@steelbuildco.com</p><p>Social: FB | IG | YT</p></div></div></footer>;
}
