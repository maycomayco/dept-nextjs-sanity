import Image from 'next/image';
import Link from 'next/link';

import CTAList from '@/components/cta-list';
import Navigation from '@/components/header/navigation';
import Toggle from '@/components/header/toggle';
import Wrapper from '@/components/header/wrapper';
import { cn } from '@/lib/utils';
import { urlForImage } from '@/sanity/lib/image';
import { getSite } from '@/sanity/lib/queries';

import css from './Header.module.css';

export default async function Header() {
  const { title, logo, ctas } = await getSite();

  const logoUrl = urlForImage({ source: logo });

  return (
    <Wrapper className="border-b border-neutral-300">
      <div
        className={cn(
          css.header,
          'mx-auto grid max-w-screen-xl items-center gap-x-4 p-4'
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

        <Navigation />

        <CTAList
          className="[grid-area:ctas] max-md:*:w-full max-md:header-closed:hidden md:ml-auto"
          ctas={ctas}
        />

        <Toggle />
      </div>
    </Wrapper>
  );
}
