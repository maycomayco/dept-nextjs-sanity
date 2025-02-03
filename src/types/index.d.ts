/* eslint-disable @typescript-eslint/no-explicit-any */
import { SanityDocument } from 'next-sanity';

export type Announcement = {
  readonly _id: string;
  title: string;
  content: any;
};

export type Site = {
  title: string;
  announcements?: Announcement[];
  ctas?: Cta[];
  headerMenu?: Navigation;
  mainMenu?: Navigation[];
  actionMenu: Navigation | undefined;
  highlightMenu?: Highlight;
  footerMenu?: Navigation[];
  social?: Navigation;
  ogimage?: string;
  copyright?: any;
  klaviyoSubscriptionListId?: string;
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
