// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split()
  }
};
var ProfileDoc = defineDocumentType(() => ({
  name: "ProfileText",
  filePathPattern: "documents/Profile.md",
  contentType: "mdx",
  fields: {
    heading: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var CareerDoc = defineDocumentType(() => ({
  name: "CareerText",
  filePathPattern: "documents/Career.md",
  contentType: "mdx",
  fields: {
    heading: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var SBCsDoc = defineDocumentType(() => ({
  name: "SBCsText",
  filePathPattern: "documents/Interests/SBCs.md",
  contentType: "mdx",
  fields: {
    heading: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/app/",
  documentTypes: [ProfileDoc, CareerDoc, SBCsDoc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisistHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisithighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  CareerDoc,
  ProfileDoc,
  SBCsDoc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-5CRSH724.mjs.map
