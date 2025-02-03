import { getBlockText } from '@/sanity/lib/utils';
import { TbTextCaption } from 'react-icons/tb';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'rich-text-editor',
  icon: TbTextCaption,
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      description:
        'IMPORTANT: Press SHIFT + ENTER to create new empty lines. Pressing ENTER alone will not add blank spaces to the actual page.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
          ],
          lists: [],
          // Marks let you mark up inline text in the Portable Text Editor
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({ content }) => ({
      title: getBlockText(content),
      subtitle: 'Rich text editor',
    }),
  },
});
