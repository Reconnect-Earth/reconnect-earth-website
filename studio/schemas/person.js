export default {
  title: 'Person',
  name: 'person',
  type: 'document',
  fields: [
    // ... other fields ...
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Profile Photo',
      name: 'profilePhoto',
      type: 'image'
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}