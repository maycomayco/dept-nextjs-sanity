import { type SchemaTypeDefinition } from 'sanity'
import site from './documents/site'
import navigation from './documents/navigation'
import imageWithAlt from './objects/imageWithAlt'
import link from './objects/link'
import page from './documents/page'
import metadata from './objects/metadata'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // /documents
    site,
    navigation,
    page,

    // /objects
    imageWithAlt,
    link,
    metadata
  ],
}
