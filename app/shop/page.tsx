import { Metadata } from 'next';
import { ShopControls } from '@/components/catalog';
import { products } from '@/data/products';

export const metadata: Metadata = { title: 'Shop Steel Buildings | SteelBuild Co.', description: 'Filter and compare steel building models.' };

export default async function Page() {
  await new Promise((r) => setTimeout(r, 100));
  return <main className="container section"><h1>Shop Buildings</h1><ShopControls allProducts={products} /></main>;
}
