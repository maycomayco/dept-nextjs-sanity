/* eslint-disable @typescript-eslint/no-explicit-any */
import { SanityDocument } from 'next-sanity';

export type Announcement = {
  readonly _id: string;
  title: string;
  content: any;
};

export type Site = {
  title: string;
  headerMenu?: Navigation;
  footerMenu?: Navigation[];
  ctas?: Cta[];
  social?: Navigation;
  copyright?: any;
  ogimage?: string;
  logo: ImageWithAlt;
  logoFooter: ImageWithAlt;
};

type PageBase = SanityDocument & {
  title?: string;
  metadata: Metadata;
  renderPageTitle?: boolean;
};

export type Page = PageBase & {
  readonly _type: 'page';
  modules?: Module[];
};

export type BlogPost = PageBase & {
  readonly _type: 'blog.post';
  body: any;
  featuredImage: ImageWithAlt;
  categories: BlogCategory[];
  publishDate: string;
  readingTime: number;
  metadata: Metadata;
};

type Module<T = string> = {
  _type: T;
  _key: string;
  uid?: string;
};

export interface CTA {
  readonly _type?: 'cta';
  _key?: string;
  link?: Link;
  style?: string;
}
