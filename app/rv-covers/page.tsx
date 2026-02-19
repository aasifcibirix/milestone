import { Metadata } from 'next';
import { CategoryPage } from '@/components/category-page';

export const metadata: Metadata = { title: 'rv covers | SteelBuild Co.', description: 'Explore rv covers options.' };

export default function Page(){ return <CategoryPage slug='rv-covers' />; }
