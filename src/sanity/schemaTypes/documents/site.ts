import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'site',
  title: 'Site settings',
  type: 'document',
  groups: [
    { name: 'branding', default: true },
    { name: 'navigation' },
    { name: 'miscellaneous' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'branding',
      description:
        'For the title of the website, used in the browser tab and for SEO purposes.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headerMenu',
      type: 'reference',
      to: [{ type: 'navigation' }],
      group: 'navigation',
    }),
    defineField({
      name: 'footerMenu',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'navigation' }] }],
      validation: (Rule) => Rule.max(2),
      group: 'navigation',
      description:
        'This is the footer menu. It appears at the bottom of the page.',
    }),
    defineField({
      name: 'ctas',
      title: 'Call-to-action (Header)',
      description: 'To be used in the header, to the right of the logo.',
      type: 'array',
      of: [{ type: 'cta' }],
      group: 'navigation',
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
      group: 'miscellaneous',
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'imageWithAlt',
      group: 'branding',
    }),
    defineField({
      name: 'logoFooter',
      title: 'Footer brand logo',
      type: 'imageWithAlt',
      group: 'branding',
      description: 'Used in the footer',
    }),
    defineField({
      name: 'tagline',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'branding',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Site settings',
    }),
  },
});
