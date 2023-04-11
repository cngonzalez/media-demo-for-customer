import {defineType} from 'sanity'

export default defineType({
  name: 'sectionTree',
  title: 'Section tree',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'section'}],
        },
      ],
    },
  ],
})
