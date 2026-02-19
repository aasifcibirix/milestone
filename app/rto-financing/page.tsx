import { Metadata } from 'next';
import { QuoteForm } from '@/components/forms';

export const metadata: Metadata = { title: 'RTO & Financing | SteelBuild Co.', description: 'Rent-to-own and financing options for steel buildings.' };

export default function Page() {
  return <main className="container section grid" style={{ gap: '1rem' }}>
    <section className="card"><h1>RTO & Financing</h1><p>Choose a payment path that fits your timeline, from rent-to-own flexibility to long-term financing plans.</p></section>
    <section className="card"><h3>Apply for financing</h3><form><label>Apply for<select><option>RTO</option><option>Financing</option></select></label><button className="btn" type="button">Start Application</button></form></section>
    <section className="card"><h3>Rent-To-Own Program</h3><ul><li>No large upfront payment required</li><li>Flexible term options</li><li>Early payoff options available</li></ul><a className="btn" href="https://example.com" target="_blank">Apply for RTO</a></section>
    <section className="card"><h3>Financing Program</h3><ul><li>Competitive rates through lending partners</li><li>Structured monthly payments</li><li>Options for higher-value projects</li></ul><a className="btn" href="https://example.com" target="_blank">Apply for Financing</a></section>
    <QuoteForm title="Need help picking the right option?" />
    <p className="card">Call us at <strong>(800) 000-0000</strong> for financing assistance.</p>
  </main>;
}
