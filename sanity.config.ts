import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'donald-miller-library',
  title: 'مكتبة Donald Miller',
  
  projectId,
  dataset,
  
  basePath: '/studio',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('المحتوى')
          .items([
            S.listItem()
              .title('إعدادات الموقع')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            S.listItem()
              .title('الكتب')
              .schemaType('book')
              .child(S.documentTypeList('book').title('الكتب')),
            S.listItem()
              .title('أجزاء الطائرة')
              .schemaType('airplanePart')
              .child(S.documentTypeList('airplanePart').title('أجزاء الطائرة')),
            S.listItem()
              .title('خطوات StoryBrand')
              .schemaType('storyBrandStep')
              .child(S.documentTypeList('storyBrandStep').title('خطوات StoryBrand')),
            S.listItem()
              .title('مراحل قمع التسويق')
              .schemaType('funnelStage')
              .child(S.documentTypeList('funnelStage').title('مراحل القمع')),
            S.divider(),
            S.listItem()
              .title('قسم عني')
              .child(
                S.document()
                  .schemaType('aboutSection')
                  .documentId('aboutSection')
              ),
          ]),
    }),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
