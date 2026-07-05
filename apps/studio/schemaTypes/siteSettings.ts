import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(220).warning('Keep this short for hero and SEO previews.'),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}).error('Use a valid URL.'),
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}).error('Use a valid URL.'),
    }),
    defineField({
      name: 'resumeUrl',
      title: 'Resume / CV URL',
      type: 'url',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}).error('Use a valid URL.'),
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
      subtitle: 'fullName',
    },
  },
})
