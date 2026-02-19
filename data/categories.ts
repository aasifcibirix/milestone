export type Category = {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
};

export const categories: Category[] = [
  { slug: 'steel-carports', name: 'Steel Carports', description: 'Durable covers for daily vehicle protection.', heroImage: '/placeholders/category-1.svg' },
  { slug: 'rv-covers', name: 'RV Covers', description: 'Tall-clearance covers for RVs, buses, and trailers.', heroImage: '/placeholders/category-2.svg' },
  { slug: 'steel-garages', name: 'Steel Garages', description: 'Secure enclosed garages with configurable layouts.', heroImage: '/placeholders/category-3.svg' },
  { slug: 'steel-barns', name: 'Steel Barns', description: 'Farm-ready barns for storage, livestock, and equipment.', heroImage: '/placeholders/category-4.svg' },
  { slug: 'clear-span-commercial', name: 'Clear Span Commercial', description: 'Open-span structures built for business operations.', heroImage: '/placeholders/category-5.svg' },
  { slug: 'steel-structures', name: 'All Steel Structures', description: 'Browse all building classes in one catalog.', heroImage: '/placeholders/category-6.svg' }
];
