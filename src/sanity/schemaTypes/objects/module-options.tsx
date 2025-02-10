'use client';

import { useState } from 'react';

import { Box, Button, Flex, Text, TextInput } from '@sanity/ui';
import { VscCheck, VscCopy } from 'react-icons/vsc';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'module-options',
  title: 'Module options',
  type: 'object',
  fields: [
    defineField({
      name: 'hidden',
      type: 'boolean',
      description: 'Hide the module from the page',
      initialValue: false,
    }),
    defineField({
      name: 'uid',
      title: 'Unique identifier',
      description: 'Used for anchor/jump links (HTML `id` attribute).',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^[a-zA-Z0-9-]+$/g).error(
          'Must not contain spaces or special characters'
        ),
      components: {
        input: ({ elementProps, path }) => {
          const indexOfModule = path.indexOf('modules');
          const moduleKey = (path[indexOfModule + 1] as any)?._key;
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [checked, setChecked] = useState(false);

          return (
            <Flex align="center" gap={1}>
              <Text muted>#</Text>

              <Box flex={1}>
                <TextInput
                  {...elementProps}
                  placeholder={moduleKey}
                  radius={2}
                />
              </Box>

              <Button
                disabled={checked}
                icon={checked ? VscCheck : VscCopy}
                mode="ghost"
                title="Click to copy"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `#${elementProps.value || moduleKey}`
                  );

                  setChecked(true);
                  setTimeout(() => setChecked(false), 1000);
                }}
              />
            </Flex>
          );
        },
      },
    }),
    defineField({
      name: 'customStyles',
      type: 'object',
      title: 'Custom styles',
      description: 'Add custom CSS styles to the module',
      fields: [
        defineField({
          name: 'paddingTop',
          type: 'string',
          title: 'Padding top',
        }),
        defineField({
          name: 'paddingBottom',
          type: 'string',
          title: 'Padding bottom',
        }),
      ],
    }),
  ],
});
