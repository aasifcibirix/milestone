import { Metadata } from 'next';
import { CategoryPage } from '@/components/category-page';

export const metadata: Metadata = { title: 'clear span commercial | SteelBuild Co.', description: 'Explore clear span commercial options.' };

export default function Page(){ return <CategoryPage slug='clear-span-commercial' />; }
