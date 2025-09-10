import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Wolf Vierbergen | Big Dog Fabrications',
  description:
    "Hello, I'm Wolf from Big Dog Fabrications. I am a designer, fabricator, and constructor from Belgium.",
  keywords: [
    'Wolf Vierbergen',
    'Big Dog Fabrications',
    'Belgium',
    'Portfolio',
    'Projects',
    'Fabrication',
    'Designer',
    'Constructor',
    'Custom builds',
    'Manufacturing',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
