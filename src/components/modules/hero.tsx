import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/image';
import { type CTA as CtaType, type ImageWithAlt } from '@/types';
import { PortableText } from 'next-sanity';

import CTAList from '../cta-list';

export default async function Hero({
  bgImage,
  bgImageMobile,
  content,
  pretitle,
  ctas,
}: Partial<{
  bgImage: ImageWithAlt;
  bgImageMobile: ImageWithAlt;
  content: any;
  pretitle: string;
  ctas: CtaType[];
}>) {
  const imageUrl = bgImage && urlForImage({ source: bgImage });
  const imgShape = imageUrl && { url: imageUrl, alt: bgImage.alt || '' };
  const imageUrlMobile =
    bgImageMobile && urlForImage({ source: bgImageMobile });
  const imgShapeMobile = imageUrlMobile && {
    url: imageUrlMobile,
    alt: bgImageMobile.alt || '',
  };

  return (
    <div className="relative w-full">
      <div className="relative size-full min-h-[30rem] overflow-hidden">
        {imgShape && (
          <>
            <div className="opacity-gradient absolute z-10 size-full"></div>
            <Image
              alt={imgShape.alt}
              className="object-cover"
              layout="fill"
              src={imgShape.url}
            />

            {imgShapeMobile && (
              <Image
                alt={imgShapeMobile.alt}
                className="object-cover"
                layout="fill"
                src={imgShapeMobile.url}
              />
            )}
          </>
        )}
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-10 text-center max-lg:px-2 lg:pb-20">
        <div className="flex max-w-screen-lg flex-col items-center gap-5">
          {pretitle && (
            <p className="font-medium uppercase text-white">{pretitle}</p>
          )}

          {content && (
            <PortableText
              components={{
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-bold text-white">{children}</strong>
                  ),
                },
                block: {
                  normal: ({ children }) => (
                    <p className="text-sm text-white">{children}</p>
                  ),
                  h1: ({ children }) => (
                    <h1 className="text-white">{children}</h1>
                  ),
                },
              }}
              value={content}
            />
          )}

          {ctas && <CTAList className="w-full justify-center" ctas={ctas} />}
        </div>
      </div>
    </div>
  );
}
