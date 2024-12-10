import type { Rule } from 'sanity'

const topSellingItem = {
    name: 'topSellingItem',
    title: 'Top Selling Item',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Item Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule: Rule) => Rule.required().error('Image is required')
      },
      {
        name: 'name',
        title: 'Item Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().error('Name is required')
      }
    ]
  }
  
export default topSellingItem