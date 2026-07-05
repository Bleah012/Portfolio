import {TrendUpwardIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const stats = defineType({
  name: 'stats',
  title: 'Stats',
  type: 'document',
  icon: TrendUpwardIcon,
  fields: [
    defineField({
      name: 'items',
      title: 'Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'number',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'suffix',
              title: 'Suffix',
              type: 'string',
              description: 'Example: +, %, k',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              value: 'value',
              suffix: 'suffix',
            },
            prepare({title, value, suffix}) {
              return {
                title,
                subtitle: `${value ?? ''}${suffix ?? ''}`,
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.min(1).max(6),
    }),
  ],
})
