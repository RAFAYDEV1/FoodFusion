import type { Rule } from "sanity";

const review = {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().error('Name is required'),
      },
      {
        name: 'username',
        title: 'Username',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().error('Username is required'),
      },
      {
        name: 'body',
        title: 'Review Body',
        type: 'text',
        validation: (Rule: Rule) => Rule.required().min(10).error('Review body must be at least 10 characters long'),
      },
    ]
  }

export default review