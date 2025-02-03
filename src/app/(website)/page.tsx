import ModulesResolver from '@/components/modules';
import processMetadata from '@/lib/process-metadata';
import { fetchSanity } from '@/sanity/lib/fetch';
import { modulesQuery } from '@/sanity/lib/queries';
import { type Page as PageType } from '@/types';
import { groq } from 'next-sanity';

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

const homePageQuery = groq`*[
  _type == 'page' &&
  metadata.slug.current=='index' 
][0]{
  ...,
  modules[]{ ${modulesQuery} },
  metadata {
    ...,
    'ogimage': image.asset->url + '?w=1200'
  }
}`;
