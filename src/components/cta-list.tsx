import { cn } from '@/lib/utils';
import { type CTA as CTAType } from '@/types';

import CTA from './cta';

export default function CTAList({
  ctas,
  className,
}: {
  ctas?: CTAType[];
} & React.ComponentProps<'div'>) {
  if (!ctas?.length) return null;

  return (
    <div className={cn('flex flex-wrap items-center gap-[.5em]', className)}>
      {ctas?.map((cta, key) => (
        <CTA className="max-sm:w-full" {...cta} key={key} />
      ))}
    </div>
  );
}
