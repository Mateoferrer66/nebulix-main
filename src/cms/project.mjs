import { toolbarButtons, blocks, style, buttons } from "./common.mjs";
import { t } from "@util/translate";
export const project = {
  name: "project",
  identifier_field: "name",
  folder: "src/content/project",
  label: t("project"),
  format: "frontmatter",
  extension: "mdx",
  icon: "portfolio",
  create: true,
  editor: {
    preview: false,
    frame: false,
  },
  fields: [
    {
      name: "tag",
      label: t("tags"),
      multiple: true,
      widget: "relation",
      collection: "config",
      max: 5,
      required: false,
      file: "project",
      search_fields: ["project_tags.*.name"],
      display_fields: ["project_tags.*.name"],
      value_field: "project_tags.*.name",
    },
    {
      label: t("title"),
      name: "title",
      widget: "string",
      pattern: [".{5,}", "Must have at least 5 characters"],
    },
    {
      label: t("description_seo"),
      name: "description",
      widget: "text",
      pattern: [".{0,}", "Must have at least 10 characters"],
    },

    {
      label: t("intro"),
      name: "intro",
      widget: "text",
      required: false,
    },

    {
      label: t("body"),
      name: "body",
      widget: "markdown",

      toolbar_buttons: toolbarButtons,
      show_raw: true,
    },
    {
      name: "hero_buttons",
      label: t("hero_buttons"),
      label_singular: "Button",
      widget: "list",
      collapsed: true,
      summary: "{{fields.label}} | {{fields.href}}",
      fields: buttons.fields,
      required: false,
    },
    {
      name: "features",
      label: t("project_features"),
      label_singular: "feature",
      widget: "list",
      collapsed: true,
      summary: "{{fields.name}} | {{fields.value}}",
      required: false,
      fields: [
        {
          label: t("name"),
          name: "name",
          widget: "string",
        },
        {
          label: t("value"),
          name: "value",
          widget: "string",
        },
      ],
    },
    blocks,
    style,
    {
      label: t("featured_image"),
      name: "thumbnail",
      widget: "image",
      required: true,
    },
    {
      label: t("og_image"),
      name: "og_image",
      widget: "image",
      required: false,
      hint: t("label_og_image"),
    },
    {
      label: t("pub_date"),
      name: "date",
      widget: "datetime",
      time_format: false,
      format: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
      default: new Date().toISOString(),
    },
  ],
};
