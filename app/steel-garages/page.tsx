import { Metadata } from 'next';
import { CategoryPage } from '@/components/category-page';

export const metadata: Metadata = { title: 'steel garages | SteelBuild Co.', description: 'Explore steel garages options.' };

export default function Page(){ return <CategoryPage slug='steel-garages' />; }
