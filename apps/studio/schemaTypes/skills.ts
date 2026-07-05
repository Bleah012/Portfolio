import {CodeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const skills = defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  icon: CodeIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      initialValue: 'Skills',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Skills & Technologies',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Skill Categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Category Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'skills',
              title: 'Skills',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'level',
                      title: 'Level',
                      type: 'number',
                      description: 'Skill level from 0 to 100.',
                      validation: (rule) => rule.min(0).max(100).required(),
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'name',
                      level: 'level',
                    },
                    prepare({title, level}) {
                      return {
                        title,
                        subtitle: `${level ?? 0}%`,
                      }
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technology Chips',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'group',
              title: 'Group',
              type: 'string',
              options: {
                list: [
                  {title: 'Programming', value: 'programming'},
                  {title: 'Web Dev', value: 'webDev'},
                  {title: 'Databases', value: 'databases'},
                  {title: 'Machine Learning', value: 'machineLearning'},
                  {title: 'Tools', value: 'tools'},
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'group',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
    },
  },
})
