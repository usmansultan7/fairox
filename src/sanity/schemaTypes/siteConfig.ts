import { defineType, defineField } from 'sanity'

export const siteConfig = defineType({
    name: 'siteConfig',
    title: 'Site Configuration',
    type: 'document',
    fields: [
        defineField({
            name: 'primaryColor',
            title: 'Primary Color Override',
            type: 'string', // Could use 'color' type if installed, using string for simplicity
        }),
        defineField({
            name: 'auditLink',
            title: 'Audit Link (CTA)',
            type: 'url',
        }),
    ],
})
