import { Metadata } from 'next';
import { TestimonialList } from '@/components/sections';
export const metadata: Metadata = { title: 'Customer Reviews | SteelBuild Co.', description: 'See feedback from building owners.' };
export default function Page(){ return <main className="container section"><h1>Customer Reviews</h1><TestimonialList /></main>; }
