import type { Metadata } from 'next';

import { getSite } from '@/sanity/lib/queries';
import { type BlogPost, type Page } from '@/types';

import processUrl from './process-url';
import { vercelPreview } from './utils';

export default async function processMetadata(
  page: Page | BlogPost
): Promise<Metadata> {
  const [site, url] = await Promise.all([getSite(), processUrl(page)]);

  const { title, description, ogimage, noIndex } = page.metadata;

  return {
    // This not needed anymore since the project is deployed to vercel
    // metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
    title,
    description,
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      images: ogimage || site.ogimage,
    },
    robots: {
      index: noIndex || vercelPreview ? false : undefined,
    },
    alternates: {
      canonical: url,
    },
  };
}
