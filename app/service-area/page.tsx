import { Metadata } from 'next';
import { serviceAreas } from '@/data/serviceAreas';
export const metadata: Metadata = { title: 'Service Area | SteelBuild Co.', description: 'States and regions where we install buildings.' };
export default function Page(){ return <main className="container section"><h1>Service Area</h1><div className="grid row-2"><div className="card"><img src="/placeholders/map.svg" alt="Map placeholder"/></div><ul className="card">{serviceAreas.map((s)=><li key={s}>{s}</li>)}</ul></div></main>; }
