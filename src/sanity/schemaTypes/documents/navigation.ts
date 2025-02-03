import { defineField, defineType } from 'sanity';
import { TbChartArrows } from 'react-icons/tb';

import { count } from '@/lib/utils';

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  icon: TbChartArrows,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{ type: 'link' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare: ({ title, items }) => {
      return {
        title,
        subtitle: count(items),
      };
    },
  },
  orderings: [
    {
      title: 'Title, Asc',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});
