import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['','/shop','/rto-financing','/become-a-dealer','/about-us','/contact-us'];
  return routes.map((r) => ({ url: `https://example-steel-site.com${r}`, lastModified: new Date() }));
}
