import { defineField, defineType } from 'sanity';
import { TbLink } from 'react-icons/tb';

export default defineType({
  name: 'link',
  title: 'Link',
  icon: TbLink,
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'internal', value: 'internal' },
          { title: 'external', value: 'external' },
        ],
      },
    }),
    defineField({
      name: 'internal',
      type: 'reference',
      // to: [{ type: 'page' }, { type: 'blog.post' }],
      to: [{ type: 'page' }],
      hidden: ({ parent }) => parent?.type !== 'internal',
    }),
    defineField({
      name: 'external',
      placeholder: 'https://example.com',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: true,
        }),
      hidden: ({ parent }) => parent?.type !== 'external',
    }),
    defineField({
      name: 'params',
      title: 'URL parameters',
      placeholder: 'e.g. #jump-link or ?foo=bar',
      type: 'string',
      hidden: ({ parent }) => parent?.type !== 'internal',
    }),
  ],
  preview: {
    select: {
      label: 'label',
      _type: 'internal._type',
      title: 'internal.title',
      slug: 'internal.metadata.slug.current',
      external: 'external',
      params: 'params',
    },
    prepare: ({ label, _type, title, slug, external, params }) => ({
      title: label || title,
      subtitle: [
        _type === 'blog.post' ? '/blog' : null,
        external || (slug && (slug === 'index' ? '/' : `/${slug}`)),
        params,
      ]
        .filter(Boolean)
        .join(''),
    }),
  },
});
