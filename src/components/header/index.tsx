import Image from 'next/image';
import Link from 'next/link';

import CTAList from '@/components/cta-list';
import { cn } from '@/lib/utils';
import { urlForImage } from '@/sanity/lib/image';
import { getSite } from '@/sanity/lib/queries';

import css from './Header.module.css';

export default async function Header() {
  const { title, logo, ctas } = await getSite();

  const logoUrl = urlForImage({ source: logo });

  return (
    <header className="border-b border-neutral-300" role="banner">
      <div
        className={cn(
          css.header,
          'mx-auto grid max-w-screen-xl items-center gap-x-4 px-4'
        )}
      >
        <div className="[grid-area:logo]">
          <Link href={'/'}>
            {!logo ? (
              <span className="h4">{title}</span>
            ) : (
              <Image
                alt={logo?.alt || title}
                className="inline-block max-h-12 w-auto"
                height={40}
                src={logoUrl}
                width={200}
              />
            )}
          </Link>
        </div>
        <div className="debug [grid-area:nav]">MENU</div>
        <div className="[grid-area:ctas]">
          <CTAList
            className="max-md:header-closed:hidden [grid-area:ctas] max-md:*:w-full md:ml-auto"
            ctas={ctas}
          />
        </div>
      </div>
    </header>
  );
}
