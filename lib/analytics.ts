export type AnalyticsEvent = { name: string; payload?: Record<string, string | number | boolean> };

export function trackEvent(event: AnalyticsEvent) {
  // Placeholder hook. Replace with your analytics provider integration.
  if (process.env.NODE_ENV !== 'production') {
    console.log('[analytics]', event);
  }
}
