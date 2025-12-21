import { type SchemaTypeDefinition } from 'sanity'
import { pageHome } from './pageHome'
import { teamMember } from './teamMember'
import { siteConfig } from './siteConfig'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [pageHome, teamMember, siteConfig],
}
