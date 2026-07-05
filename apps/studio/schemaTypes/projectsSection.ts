import {DocumentsIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const projectsSection = defineType({
  name: 'projectsSection',
  title: 'Projects Section',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      initialValue: 'Portfolio',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Featured Projects',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
})
