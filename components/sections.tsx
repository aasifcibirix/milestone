import Link from 'next/link';
import { testimonials } from '@/data/testimonials';

export function CTASection({ title, description, href, button }: { title: string; description: string; href: string; button: string }) {
  return <section className="section"><div className="container card"><h3>{title}</h3><p>{description}</p><Link className="btn" href={href}>{button}</Link></div></section>;
}

export function TestimonialList() {
  return <div className="grid row-3">{testimonials.map((t) => <blockquote className="card" key={t.name}><p>“{t.quote}”</p><footer>- {t.name}, {t.location}</footer></blockquote>)}</div>;
}
