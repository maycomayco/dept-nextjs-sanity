import { isDev } from '@/lib/is-dev';
import processMetadata from '@/lib/process-metadata';
import { fetchSanity } from '@/sanity/lib/fetch';
import { modulesQuery } from '@/sanity/lib/queries';
import { type Page as PageType } from '@/types';
import { groq } from 'next-sanity';

export async function generateMetadata() {
  const page = await getPage();

  return processMetadata(page);
}

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md">
      <section className="my-10 w-full rounded-lg border-2 border-black bg-white p-12 text-center">
        <h1 className="text-5xl font-medium">I&apos;m a starter package</h1>
        <br />
        <p>A simple starter with some goods.</p>

        <p>
          <code>dev environment: {isDev ? 'yes' : 'no'}</code>
        </p>
      </section>
    </div>
  );
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
