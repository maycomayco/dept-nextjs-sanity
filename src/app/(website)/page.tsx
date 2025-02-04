import ModulesResolver from '@/components/modules';
import processMetadata from '@/lib/process-metadata';
import { fetchSanity } from '@/sanity/lib/fetch';
import { homePageQuery } from '@/sanity/lib/queries';
import { type Page as PageType } from '@/types';

export async function generateMetadata() {
  const page = await getPage();

  return processMetadata(page);
}

export default async function Home() {
  const page = await getPage();

  return <ModulesResolver modules={page?.modules} />;
}

async function getPage() {
  const data = await fetchSanity<PageType>({
    query: homePageQuery,
    tags: ['page:index'],
  });

  return data;
}
