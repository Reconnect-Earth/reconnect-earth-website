export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    // ... other fields ...
    {
        title: 'Name',
        name: 'locationName',
        type: 'string'
    },
    {
        title: 'Address',
        name: 'locationAddress',
        type: 'array',
        of: [{type: 'block'}]
    }
  ]
}