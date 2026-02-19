import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Projects Gallery | SteelBuild Co.', description: 'Browse completed project highlights.' };
export default function Page(){ return <main className="container section"><h1>Projects Gallery</h1><div className="grid row-4">{Array.from({length:12}).map((_,i)=><img className="card" key={i} src="/placeholders/gallery.svg" alt={`Project ${i+1}`} />)}</div><p className="card">Lightbox placeholder: click interaction can be wired to a modal library later.</p></main>; }
