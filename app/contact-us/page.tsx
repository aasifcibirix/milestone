import { Metadata } from 'next';
import { QuoteForm } from '@/components/forms';
export const metadata: Metadata = { title: 'Contact Us | SteelBuild Co.', description: 'Speak with our team and request a quote.' };
export default function Page(){ return <main className="container section"><h1>Contact Us</h1><QuoteForm /></main>; }
