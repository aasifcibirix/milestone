import { Metadata } from 'next';
import { faqs } from '@/data/faqs';
export const metadata: Metadata = { title: 'Building FAQs | SteelBuild Co.', description: 'Frequently asked questions for steel buildings.' };
export default function Page(){ return <main className="container section"><h1>Building FAQs</h1>{faqs.map((f)=><details key={f.q} className="card" style={{marginBottom:'.75rem'}}><summary>{f.q}</summary><p>{f.a}</p></details>)}</main>; }
