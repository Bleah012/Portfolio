import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const certificationsSection = defineType({
  name: 'certificationsSection',
  title: 'Certifications Section',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      initialValue: 'Credentials',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Certifications & Awards',
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
