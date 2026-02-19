import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Insulation | SteelBuild Co.', description: 'Insulation choices for climate performance.' };
export default function Page(){ return <main className="container section grid"><h1>Insulation</h1><section className="card"><h3>Why Insulate?</h3><p>Control condensation, improve comfort, and reduce temperature swings in enclosed buildings.</p></section><section className="card"><h3>Common Options</h3><p>Reflective foil, fiberglass systems, and insulated panel upgrades are available per project.</p></section></main>; }
