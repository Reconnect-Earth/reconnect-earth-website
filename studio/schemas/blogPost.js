export default {
  title: 'Blog post',
  name: 'blogPost',
  type: 'document',
  fields: [
    // ... other fields ...
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      description: '(if needed)',
      type: 'string'
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'image'
    },
    {
      title: 'Post',
      name: 'post',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'person'}]
    }
  ]
}