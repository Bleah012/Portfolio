import {CaseIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const experienceSection = defineType({
  name: 'experienceSection',
  title: 'Experience Section',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      initialValue: 'Experience',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Professional Experience',
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
