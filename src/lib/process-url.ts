import { type PageBase } from '@/types';

/**
 * Processes a URL based on the provided page and options.
 *
 * This function constructs a URL by considering the base URL, the type of the page,
 * the slug of the page, and any additional parameters. It returns a string representing
 * the processed URL.
 *
 * @param {PageBase} [page] - The page object to process the URL for.
 * @param {{ base?: boolean; params?: string; }} [options] - Options for processing the URL.
 * @param {boolean} [options.base=true] - Indicates if the base URL should be included.
 * @returns {string} The processed URL.
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default function (
  page?: PageBase,
  {
    base = true,
  }: {
    base?: boolean;
  } = {}
) {
  const segment = page?._type === 'blog.post' ? 'blog' : null;
  const slug = page?.metadata?.slug?.current;
  const path = slug === 'index' ? null : slug;

  return (
    (base ? `${process.env.NEXT_PUBLIC_BASE_URL}/` : '/') +
    [segment, path].filter(Boolean).join('/')
  );
}
