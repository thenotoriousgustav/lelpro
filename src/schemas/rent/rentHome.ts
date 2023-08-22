import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'rent_home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'bedroom',
      title: 'Bedroom',
      type: 'number',
    }),
    defineField({
      name: 'bathroom',
      title: 'Bathroom',
      type: 'number',
    }),
    defineField({
      name: 'surface_area',
      title: 'Surface Area',
      type: 'number',
    }),
    defineField({
      name: 'building_area',
      title: 'Building Area',
      type: 'number',
    }),
    defineField({
      name: 'electrical_power',
      title: 'Electrical Power',
      type: 'number',
    }),
    defineField({
      name: 'garage',
      title: 'Garage',
      type: 'number',
    }),
    defineField({
      name: 'property_type',
      title: 'Property Type',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'property_type' } }],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'propertyImage' }],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
