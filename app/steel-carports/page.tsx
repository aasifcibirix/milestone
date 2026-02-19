import { Metadata } from 'next';
import { CategoryPage } from '@/components/category-page';

export const metadata: Metadata = { title: 'steel carports | SteelBuild Co.', description: 'Explore steel carports options.' };

export default function Page(){ return <CategoryPage slug='steel-carports' />; }
