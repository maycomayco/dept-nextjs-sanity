import { type SchemaTypeDefinition } from 'sanity';

import navigation from './documents/navigation';
import page from './documents/page';
import site from './documents/site';
import hero from './modules/hero';
import richTextEditor from './modules/rich-text-editor';
import cta from './objects/cta';
import imageWithAlt from './objects/imageWithAlt';
import link from './objects/link';
import metadata from './objects/metadata';
import moduleOptions from './objects/module-options';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // /documents
    site,
    navigation,
    page,

    // /objects
    imageWithAlt,
    link,
    metadata,
    cta,
    moduleOptions,

    // /modules
    richTextEditor,
    hero,
  ],
};
