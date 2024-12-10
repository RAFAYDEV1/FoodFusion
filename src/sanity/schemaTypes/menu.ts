import type { Rule } from 'sanity'

const menuItem = {
  name: 'menuItem',
  title: 'Menu Item', 
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Item Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Name is required')
    },
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
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().min(10).error('Description must be at least 10 characters long')
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(0).error('Price must be a positive number')
    }
  ]
}

export default menuItem
