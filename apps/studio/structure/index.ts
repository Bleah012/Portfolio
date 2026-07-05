import {CodeIcon, CogIcon, RocketIcon, TrendUpwardIcon, UserIcon} from '@sanity/icons'
import type {StructureResolver} from 'sanity/structure'

const singletonTypes = ['siteSettings', 'hero', 'stats', 'about', 'skills']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings').title('Site Settings'),
        ),

      S.listItem()
        .title('Hero')
        .icon(RocketIcon)
        .child(S.document().schemaType('hero').documentId('hero').title('Hero')),

      S.listItem()
        .title('Stats')
        .icon(TrendUpwardIcon)
        .child(S.document().schemaType('stats').documentId('stats').title('Stats')),

      S.listItem()
        .title('About')
        .icon(UserIcon)
        .child(S.document().schemaType('about').documentId('about').title('About')),

      S.listItem()
        .title('Skills')
        .icon(CodeIcon)
        .child(S.document().schemaType('skills').documentId('skills').title('Skills')),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.includes(listItem.getId() ?? ''),
      ),
    ])
