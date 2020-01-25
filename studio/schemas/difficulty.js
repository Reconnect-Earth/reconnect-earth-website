export default {
  name: 'difficulty',
  title: 'Difficulty',
  type: 'document',
  fields: [
    // ... other fields ...
    {
      title: 'Difficulty Type',
      name: 'difficultyType',
      type: 'string'
    },{
      title: 'Difficulty Description',
      name: 'difficultyDescription',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}