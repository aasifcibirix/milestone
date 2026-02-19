import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { ProductGrid } from './catalog';
import { QuoteForm } from './forms';

export function CategoryPage({ slug }: { slug: string }) {
  const category = categories.find((c) => c.slug === slug);
  if (!category) return <div className="container section"><p>Category not found.</p></div>;
  const topSelling = products.filter((p) => p.category === slug).slice(0, 8);
  return <main>
    <section className="section container"><div className="card"><h1>{category.name}</h1><p>{category.description}</p><img src={category.heroImage} alt={category.name} /><a className="btn" href="/contact-us">Get A Quote</a></div></section>
    <section className="section container"><QuoteForm /></section>
    <section className="section container"><h2>Top Selling Products</h2><ProductGrid items={topSelling} /></section>
  </main>;
}
