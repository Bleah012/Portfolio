import {CogIcon} from '@sanity/icons'
import type {StructureResolver} from 'sanity/structure'

const singletonTypes = ['siteSettings']

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

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.includes(listItem.getId() ?? ''),
      ),
    ])
