import { TbUnlink } from 'react-icons/tb';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cta',
  title: 'Call-to-action',
  icon: TbUnlink,
  type: 'object',
  fields: [
    defineField({
      name: 'link',
      type: 'link',
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon',
      description:
        'For the icons, use the Lucide icon names. https://lucide.dev/icons/',
    }),
    defineField({
      name: 'style',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: ['default', 'outline', 'link'],
      },
      validation: (rule) => rule.required().min(1).error('This is required'),
    }),
  ],
  preview: {
    select: {
      label: 'link.label',
      pageTitle: 'link.internal.title',
      internal: 'link.internal.metadata.slug.current',
      external: 'link.external',
    },
    prepare: ({ label, pageTitle, internal, external }) => ({
      title: label || pageTitle,
      subtitle:
        external || (internal && (internal === 'index' ? '/' : `/${internal}`)),
    }),
  },
});
