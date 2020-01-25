export default {
  title: 'Trip',
  name: 'trip',
  type: 'document',
  fields: [
    // ... other fields ...
    {
      title: 'Trip Name',
      name: 'tripName',
      type: 'string'
    },
    {
      title: 'Trip Photo',
      name: 'tripPhoto',
      type: 'image'
    },
    {
      title: 'Location',
      name: 'tripLocation',
      type: 'reference',
      to: [{type: 'location'}]
    },
    {
      title: 'Description',
      name: 'tripDescription',
      description: 'Please include a short subscription',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      title: 'Trip Start',
      name: 'tripStart',
      type: 'datetime'
    },
    {
      title: 'Trip End',
      name: 'tripEnd',
      type: 'datetime'
    },
    {
      title: 'Trip Duration',
      name: 'tripDuration',
      description: 'Trip duration in days',
      type: 'number'
    },
    {
      title: 'Pre Meet Required?',
      name: 'tripPreMeetRequired',
      type: 'boolean'
    },
    {
      title: 'Pre Meet Location',
      name: 'tripPreMeetLocation',
      description: 'If pre-meet is required',
      type: 'reference',
      to: [{type: 'location'}]
    },
    {
      title: 'Difficulty',
      name: 'tripDifficulty',
      description: 'Please state trip difficulty',
      type: 'reference',
      to: [{type: 'difficulty'}]
    },
    {
      title: 'Difficulty description',
      name: 'tripDifficultyDescription',
      description: 'If needed, please describe the nature of the difficulty, and why it was chosen for this trip',
      type: 'text'
    },
    {
      title: 'Cost',
      name: 'tripCost',
      type: "number"
    },
    {
      title: 'Deposit',
      name: 'tripDeposit',
      type: "number"
    },
    {
      title: 'Leader/s',
      name: 'tripLeader',
      description: 'Add one or more leaders to this trip',
      type: "array",
      of: [{
        type: 'reference',
        to: [{type: 'person'}]
      }]
    }
  ]
}

