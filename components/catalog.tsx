'use client';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useMemo, useState } from 'react';

export function HeroSlider() {
  const slides = [
    { title: 'Custom Steel Buildings For Every Need', sub: 'Built for durability, engineered for your region.' },
    { title: 'From Carports To Commercial Spans', sub: 'Design, price, and request your quote in minutes.' },
    { title: 'Trusted Installers Across Service Areas', sub: 'Friendly support from planning to final install.' }
  ];
  const [i, setI] = useState(0);
  return <section className="hero-slide" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(/placeholders/hero-${(i%3)+1}.svg)`, backgroundSize: 'cover' }}><div className="container"><h1>{slides[i].title}</h1><p>{slides[i].sub}</p><div style={{ display: 'flex', gap: '.75rem' }}><Link className="btn" href="/shop">View All Buildings</Link><Link className="btn secondary" href="/contact-us">Request Free Quote</Link></div><div style={{ marginTop: '1rem', display: 'flex', gap: '.5rem' }}>{slides.map((_, idx) => <button aria-label={`Slide ${idx + 1}`} key={idx} onClick={() => setI(idx)} className="btn secondary" style={{ padding: '.35rem .55rem' }}>{idx + 1}</button>)}</div></div></section>;
}

export function ProductCard({ product }: { product: Product }) {
  return <article className="card"><img src={product.images[0]} alt={product.title} /><h4>{product.code}</h4><p>{product.shortDescription}</p><Link className="btn" href={`/shop/${product.slug}`}>Get A Quote</Link></article>;
}

export function ProductGrid({ items }: { items: Product[] }) {
  return <div className="grid row-4">{items.map((p) => <ProductCard key={p.slug} product={p} />)}</div>;
}

export function ShopControls({ allProducts }: { allProducts: Product[] }) {
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('featured');
  const shown = useMemo(() => {
    let filtered = category === 'all' ? allProducts : allProducts.filter((p) => p.category === category);
    if (sort === 'price-asc') filtered = [...filtered].sort((a,b) => a.priceFrom - b.priceFrom);
    if (sort === 'price-desc') filtered = [...filtered].sort((a,b) => b.priceFrom - a.priceFrom);
    return filtered;
  }, [allProducts, category, sort]);

  return <>
    <div className="card" style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', alignItems: 'center' }}>
      {['all', ...new Set(allProducts.map((p) => p.category))].map((c) => <button key={c} className="btn secondary" onClick={() => setCategory(c)}>{c.replaceAll('-', ' ')}</button>)}
      <label style={{ marginLeft: 'auto' }}>Sort<select value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Featured</option><option value="price-asc">Price: Low to High</option><option value="price-desc">Price: High to Low</option></select></label>
    </div>
    <div className="section"><ProductGrid items={shown} /></div>
  </>;
}
