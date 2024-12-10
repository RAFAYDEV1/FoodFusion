import { type SchemaTypeDefinition } from 'sanity'
import menu from './menu'
import review from './review'
import topSelling from './top-selling'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menu, review, topSelling],
}
