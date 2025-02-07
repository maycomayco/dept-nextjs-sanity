import Link from 'next/link';

import Social from '@/components/social';
import { getSite } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';

export default async function Footer() {
  const { title, copyright, tagline } = await getSite();

  return (
    <footer className="bg-foreground text-center text-white" role="contentinfo">
      <div className="section flex flex-wrap justify-between gap-x-12 gap-y-8 max-sm:flex-col">
        <div className="flex flex-col gap-3 self-start max-sm:mx-auto max-sm:items-center">
          <Link className="max-w-max" href="/">
            <h3>{title}</h3>
          </Link>

          {tagline && (
            <div className="max-w-sm text-balance text-sm">
              <PortableText value={tagline} />
            </div>
          )}

          <Social />
        </div>
      </div>

      {copyright && (
        <div className="mx-auto max-w-screen-xl border-t border-neutral-600/60 p-4 text-sm">
          <PortableText value={copyright} />
        </div>
      )}
    </footer>
  );
}
