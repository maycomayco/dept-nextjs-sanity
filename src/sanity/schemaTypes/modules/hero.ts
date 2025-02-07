import { getBlockText } from '@/sanity/lib/utils';
import { TbLayoutBottombar } from 'react-icons/tb';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero',
  icon: TbLayoutBottombar,
  type: 'object',
  groups: [{ name: 'content', default: true }, { name: 'image' }],
  fields: [
    defineField({
      name: 'pretitle',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Heading', value: 'h1' }],
          marks: {
            decorators: [{ title: 'Strong', value: 'strong' }],
          },
          lists: [],
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'ctas',
      title: 'Call-to-actions',
      type: 'array',
      of: [{ type: 'cta' }],
      group: 'content',
    }),
    defineField({
      name: 'bgImage',
      title: 'Background image',
      type: 'imageWithAlt',
      group: 'image',
    }),
    defineField({
      name: 'bgImageMobile',
      title: 'Background image (mobile)',
      type: 'imageWithAlt',
      group: 'image',
    }),
  ],
  preview: {
    select: {
      pretitle: 'pretitle',
      content: 'content',
      media: 'bgImage.asset',
    },
    prepare: ({ media, content, pretitle }) => ({
      title: getBlockText(content) || pretitle || 'No title to display',
      subtitle: 'Hero',
      media,
    }),
  },
});
