import { dataset, projectId } from '@/lib/env';
import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export function urlForImage({
  source,
  width = 1536,
}: {
  source: SanityImageSource;
  width?: number;
}) {
  return builder?.image(source).auto('format').fit('crop').width(width).url();
}
