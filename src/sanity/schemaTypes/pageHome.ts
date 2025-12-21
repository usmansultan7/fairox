import { defineType, defineField } from 'sanity'

export const pageHome = defineType({
    name: 'pageHome',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroHeadline',
            title: 'Hero Headline',
            type: 'string',
        }),
        defineField({
            name: 'heroSubtext',
            title: 'Hero Subtext',
            type: 'text',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Overlay Image',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
})
