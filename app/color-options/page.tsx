import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Color Options | SteelBuild Co.', description: 'Panel and trim color swatches.' };
const colors=['Barn Red','#8B5CF6','#4B5563','#F59E0B','#0EA5E9','#22C55E','#111827','#D1D5DB'];
export default function Page(){ return <main className="container section"><h1>Color Options</h1><div className="swatches">{colors.map((c)=><div key={c} className="card" style={{background:c, minHeight:'90px', color:'#fff'}}>{c}</div>)}</div></main>; }
