export type Product = {
  slug: string;
  code: string;
  title: string;
  shortDescription: string;
  category: string;
  priceFrom: number;
  images: string[];
};

export const products: Product[] = Array.from({ length: 16 }).map((_, i) => {
  const categoryPool = ['steel-carports', 'rv-covers', 'steel-garages', 'steel-barns', 'clear-span-commercial'];
  const category = categoryPool[i % categoryPool.length];
  return {
    slug: `building-${i + 1}`,
    code: `LSS#${53 + i}`,
    title: `Custom ${category.replaceAll('-', ' ')} Model ${i + 1}`,
    shortDescription: 'Engineered steel building with customizable dimensions, panel colors, and trim options.',
    category,
    priceFrom: 4995 + i * 450,
    images: ['/placeholders/product.svg']
  };
});
