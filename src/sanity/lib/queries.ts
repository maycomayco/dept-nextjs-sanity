import { type Site } from '@/types';
import { groq } from 'next-sanity';

import { fetchSanity } from './fetch';

// Common queries

const internalLinkQuery = `
	internal-> { _type, title, metadata }
`;

const linkQuery = `
  ...,
  ${internalLinkQuery} 
`;

const ctaQuery = `
  ...,
  link{ ${linkQuery} }
`;

const navigationQuery = `
	title,
  items[] {
    ...,
	  ${internalLinkQuery}
  } 
`;

const siteQuery = groq`
*[_type == 'site'][0]{
  ...,
	ctas[]{ ${ctaQuery} },
  headerMenu->{ ${navigationQuery} },
  mainMenu[]->{ ${navigationQuery} },
  actionMenu->{ ${navigationQuery} },
  highlightMenu -> {
    image,
    link{
      ...,
      internal-> { _type, title, metadata }
    }
  },
  footerMenu[]->{ ${navigationQuery} },
  social->{ ${navigationQuery} },
  'ogimage': ogimage.asset->url,
  announcements[] -> {_id,title,content}
}
`;

export const modulesQuery = groq`...`;

export const homePageQuery = groq`*[
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

export const pageQuery = groq`*[
  _type == 'page' &&
  metadata.slug.current == $slug &&
  !(metadata.slug.current in ['index', 'blog/*'])
][0]{
  ...,
  modules[]{ ${modulesQuery} },
  metadata {
    ...,
    'ogimage': image.asset->url + '?w=1200'
  }
}`;

export async function getSite() {
  const data = await fetchSanity<Site>({
    query: siteQuery,
    tags: ['site', 'navigation', 'announcement', 'highlight', 'cta'],
  });

  if (!data) throw Error('No `site` document found in the Studio');

  return data;
}
