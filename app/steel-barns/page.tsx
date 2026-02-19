import { Metadata } from 'next';
import { CategoryPage } from '@/components/category-page';

export const metadata: Metadata = { title: 'steel barns | SteelBuild Co.', description: 'Explore steel barns options.' };

export default function Page(){ return <CategoryPage slug='steel-barns' />; }
