export const homelabType = {
  name: 'homelab',
  title: 'Homelab Equipment',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Equipment / Post Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Short Description / Caption',
      type: 'text',
      description: 'A quick summary or caption for the homelab gallery card.',
    },
    {
      name: 'body',
      title: 'Body & Pictures',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
}
