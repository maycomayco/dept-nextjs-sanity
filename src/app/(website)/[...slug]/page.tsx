import { notFound } from 'next/navigation';

// import PageHeader from '@/components/PageHeader';
import Modules from '@/components/modules';
import processMetadata from '@/lib/process-metadata';
import { fetchSanity } from '@/sanity/lib/fetch';
import { pageQuery } from '@/sanity/lib/queries';
import { type Page as PageType } from '@/types';

// Define a list of valid hero types
export const VALID_HERO_TYPES = ['hero', 'hero.slider'];

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({ params }: Props) {
  const page = await getPage(await params);

  if (!page) notFound();

  return processMetadata(page);
}

export default async function Page({ params }: Props) {
  const page = await getPage(await params);

  if (!page) notFound();

  // Check if there is no module of type in the valid hero types
  const hasHeroModule = page.modules?.some((module) =>
    VALID_HERO_TYPES.includes(module._type)
  );

  return (
    <>
      {/* Render Page Header if no hero module */}
      {/* {!hasHeroModule && <PageHeader page={page} />} */}

      <Modules modules={page?.modules} page={page} />
    </>
  );
}

async function getPage(params: { slug?: string[] }) {
  const data = await fetchSanity<PageType>({
    query: pageQuery,
    // we are sending the slug as a tag to the query to revalidate the page via webhook, /api/revalidate
    tags: params.slug?.map((slug) => `page:${slug}`) || ['page'],
    params: { slug: params.slug?.join('/') },
  });

  return data;
}
