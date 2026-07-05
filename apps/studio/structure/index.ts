import {
  DocumentTextIcon,
  CaseIcon,
  CodeIcon,
  CogIcon,
  DocumentsIcon,
  RocketIcon,
  TrendUpwardIcon,
  UserIcon,
} from '@sanity/icons'
import type {StructureResolver} from 'sanity/structure'

const hiddenDocumentTypes = [
  'siteSettings',
  'hero',
  'stats',
  'about',
  'skills',
  'projectsSection',
  'project',
  'experienceSection',
  'experience',
  'certificationsSection',
  'certification',
]

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

      S.listItem()
        .title('Projects')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Projects')
            .items([
              S.listItem()
                .title('Section Settings')
                .icon(DocumentsIcon)
                .child(
                  S.document()
                    .schemaType('projectsSection')
                    .documentId('projectsSection')
                    .title('Projects Section'),
                ),
              S.documentTypeListItem('project').title('Projects'),
            ]),
        ),

      S.listItem()
        .title('Experience')
        .icon(CaseIcon)
        .child(
          S.list()
            .title('Experience')
            .items([
              S.listItem()
                .title('Section Settings')
                .icon(CaseIcon)
                .child(
                  S.document()
                    .schemaType('experienceSection')
                    .documentId('experienceSection')
                    .title('Experience Section'),
                ),
              S.documentTypeListItem('experience').title('Experience Entries'),
            ]),
        ),

      S.listItem()
        .title('Certifications')
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title('Certifications')
            .items([
              S.listItem()
                .title('Section Settings')
                .icon(DocumentTextIcon)
                .child(
                  S.document()
                    .schemaType('certificationsSection')
                    .documentId('certificationsSection')
                    .title('Certifications Section'),
                ),
              S.documentTypeListItem('certification').title('Certifications'),
            ]),
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenDocumentTypes.includes(listItem.getId() ?? ''),
      ),
    ])
