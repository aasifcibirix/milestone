import { Metadata } from 'next';
import { DealerForm } from '@/components/forms';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = { title: 'Become a Dealer | SteelBuild Co.', description: 'Apply to join our steel building dealer network.' };

export default function Page() {
  const features = ['Regional Lead Support', 'Fast Quote Turnaround', 'Configurable Product Lines', 'Co-Branded Marketing Assets', 'Dedicated Account Support'];
  return <main className="container section">
    <section className="card"><h1>Become a Dealer</h1><p>Partner with a manufacturer focused on reliable production, support, and long-term growth.</p></section>
    <section className="section"><h2>Why Partner With SteelBuild Co.</h2><div className="grid row-3">{features.map((f)=> <div key={f} className="card">⬢ {f}</div>)}</div></section>
    <DealerForm />
    <CTASection title="Need a visual tool for customers?" description="Use the 3D designer for faster approvals and better close rates." href="https://example.com" button="Open 3D Design" />
  </main>;
}
