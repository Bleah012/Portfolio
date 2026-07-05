import {RocketIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow / Availability Text',
      type: 'string',
      initialValue: 'Available for Opportunities',
    }),
    defineField({
      name: 'greeting',
      title: 'Greeting',
      type: 'string',
      initialValue: "Hello, I'm",
    }),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (rule) => rule.max(120),
    }),
    defineField({
      name: 'typewriterPhrases',
      title: 'Typewriter Phrases',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.min(1).max(6),
    }),
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'View Projects',
        }),
        defineField({
          name: 'href',
          title: 'Link',
          type: 'string',
          initialValue: '#projects',
        }),
      ],
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'Download CV',
        }),
        defineField({
          name: 'href',
          title: 'Link',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'techBadges',
      title: 'Featured Tech Badges',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'color',
              title: 'Color',
              type: 'string',
              description: 'Use a hex color, for example #437FC7.',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'color',
            },
          },
        }),
      ],
      validation: (rule) => rule.max(10),
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      subtitle: 'role',
    },
    prepare({firstName, lastName, subtitle}) {
      return {
        title: [firstName, lastName].filter(Boolean).join(' ') || 'Hero',
        subtitle,
      }
    },
  },
})
