import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'site',
  title: 'Site settings',
  type: 'document',
  groups: [
    { name: 'SEO', default: true },
    { name: 'navigation' },
    { name: 'miscellaneous' },
    { name: 'brand-logos' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'SEO',
      description:
        'For the title of the website, used in the browser tab and for SEO purposes.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainMenu',
      type: 'reference',
      to: [{ type: 'navigation' }],
      group: 'navigation',
    }),
    defineField({
      name: 'footerMenu',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'navigation' }] }],
      group: 'navigation',
      validation: (Rule) => Rule.max(2),
      description:
        'This is the footer menu. It appears at the bottom of the page.',
    }),
    defineField({
      name: 'social',
      type: 'reference',
      to: [{ type: 'navigation' }],
      group: 'navigation',
      description:
        'Links to social media profiles. These are shown in the header and footer.',
    }),
    defineField({
      name: 'copyright',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
        },
      ],
      group: 'miscellaneous',
      description: 'Copyright information, shown in the footer.',
    }),
    defineField({
      name: 'ogimage',
      title: 'Open Graph Image (Site-wide)',
      description:
        'Used for social sharing previews. Set page-specific images in Page documents.',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'SEO',
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'imageWithAlt',
      group: 'brand-logos',
      validation: (rule) => rule.required().error('Logo is required'),
    }),
    defineField({
      name: 'logoFooter',
      title: 'Footer brand logo',
      type: 'imageWithAlt',
      group: 'brand-logos',
      description: 'Used in the footer',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Site settings',
    }),
  },
});
