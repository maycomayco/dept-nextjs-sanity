import Link from 'next/link';
import type { ComponentProps } from 'react';

import processUrl from '@/lib/process-url';
import { cn } from '@/lib/utils';
import { type CTA as CTAType } from '@/types';

export default function CTA({
  _type,
  _key,
  link,
  style,
  className,
  children,
  ...rest
}: CTAType & ComponentProps<'a'>) {
  const props = {
    className: cn(style, className) || undefined,
    children:
      children || link?.label || link?.internal?.title || link?.external,
    ...rest,
  };

  if (link?.type === 'internal' && link.internal)
    return (
      <Link
        href={processUrl(link.internal, {
          base: false,
          params: link.params,
        })}
        {...props}
      />
    );

  if (link?.type === 'external' && link.external)
    return <a href={link.external} {...props} />;

  return <div {...(props as ComponentProps<'div'>)} />;
}
