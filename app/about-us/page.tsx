import { Metadata } from 'next';
export const metadata: Metadata = { title: 'About Us | SteelBuild Co.', description: 'Learn about our mission and process.' };
export default function Page(){ return <main className="container section"><div className="card"><h1>About Us</h1><p>SteelBuild Co. delivers engineered steel structures with dependable support from concept to installation.</p></div></main>; }
