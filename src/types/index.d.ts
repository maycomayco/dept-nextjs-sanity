import { SanityDocument } from 'next-sanity';

export type Announcement = {
  readonly _id: string;
  title: string;
  content: any;
};

export type CTA = {
  readonly _type?: 'cta';
  _key?: string;
  link?: Link;
};

export type ImageWithAlt = SanityImageObject &
  Partial<{
    alt: string;
  }>;

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
  tagline?: any;
};

export type Navigation = {
  title: string;
  items?: Link[];
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

export type Module<T = string> = {
  _type: T;
  _key: string;
  options?: {
    hidden?: boolean;
    uid?: string;
    customStyles?: React.CSSProperties;
  };
};
