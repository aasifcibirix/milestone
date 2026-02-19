import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { QuoteForm } from '@/components/forms';

export async function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  return { title: product ? `${product.code} | SteelBuild Co.` : 'Product Not Found', description: product?.shortDescription };
}

export default function Page({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();
  return <main className="container section grid row-2"><section className="card"><img src={product.images[0]} alt={product.title} /><h1>{product.code}</h1><p>{product.title}</p><p>{product.shortDescription}</p><p>Starting at ${product.priceFrom.toLocaleString()}</p><Link className="btn" href="/contact-us">Get a Quote</Link></section><QuoteForm title="Request pricing and specs" /></main>;
}
