import type { Metadata } from 'next';
import './globals.css';
import { Footer, Header } from '@/components/site';

export const metadata: Metadata = {
  title: 'SteelBuild Co. | Custom Steel Buildings',
  description: 'Responsive marketing and catalog website for custom steel structures.',
  openGraph: { title: 'SteelBuild Co.', description: 'Custom steel structures and financing options.' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
