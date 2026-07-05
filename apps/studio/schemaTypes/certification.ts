import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const certification = defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Issuer',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date / Year',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Cybersecurity', value: 'cybersecurity'},
          {title: 'Machine Learning', value: 'machineLearning'},
          {title: 'Leadership', value: 'leadership'},
          {title: 'Networking', value: 'networking'},
          {title: 'Data Science', value: 'dataScience'},
          {title: 'Cloud', value: 'cloud'},
          {title: 'Award', value: 'award'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'credentialUrl',
      title: 'Credential URL',
      type: 'url',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      description: 'Use a hex color, for example #437FC7.',
      initialValue: '#437FC7',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'issuer',
    },
  },
})
