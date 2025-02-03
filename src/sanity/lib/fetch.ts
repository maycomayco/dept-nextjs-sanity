import { client } from "./client";
import { type QueryParams } from 'next-sanity';


export async function fetchSanity<T = any>({
  query,
  params = {},
  tags,
  // next,
}: {
  query: string;
  params?: Partial<QueryParams>;
  tags: string[];
  // next?: QueryOptions['next'];
}) {
  // const preview = dev || (await draftMode()).isEnabled;

  return client.fetch<T>(query, params, {
    next: { ...tags, revalidate: 0 },
  });
}