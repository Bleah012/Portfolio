import {DocumentsIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const blogSection = defineType({
  name: 'blogSection',
  title: 'Blog Section',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      initialValue: 'Blog',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Blog & Articles',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue:
        'Thoughts, tutorials, and notes on software engineering, machine learning, and building technology for real-world impact.',
    }),
  ],
})
