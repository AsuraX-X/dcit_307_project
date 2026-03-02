import { defineType, defineField } from "sanity";

export default defineType({
  name: "style",
  title: "Style",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Style Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Style Description",
      type: "string",
    }),
    defineField({
      name: "styleType",
      title: "Style Type",
      type: "string",
      options: {
        list: [
          { title: "Casual", value: "casual" },
          { title: "Formal", value: "formal" },
          { title: "Bridal", value: "bridal" },
          { title: "Traditional", value: "traditional" },
          { title: "Other", value: "other" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "styleType",
      media: "image",
    },
  },
});
