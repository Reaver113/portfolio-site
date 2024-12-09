import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer/source-files').ComputedFields} */

const computedFields = {
	slug: {
		type: 'string',
		resolve: (doc) => `/${doc._raw.flattenedPath}`,
	},
	slugAsParams: {
		type: 'string',
		resolve: (doc) => doc._raw.flattenedPath.split()
	}
}

export const ProfileDoc = defineDocumentType(() => ({
	name: 'ProfileText',
	filePathPattern: 'documents/Profile.md',
	contentType: 'mdx',
	fields: {
		heading: {
			type: 'string',
			required: true,
		}
	},
	computedFields
}))

export const CareerDoc = defineDocumentType(() => ({
	name: 'CareerText',
	filePathPattern: 'documents/Career.md',
	contentType: 'mdx',
	fields: {
		heading: {
			type: 'string',
			required: true,
		}
	},
	computedFields
}))

export const InterestsDoc = defineDocumentType(() => ({
	name: 'InterestsText',
	filePathPattern: 'documents/Interests.md',
	contentType: 'mdx',
	fields: {
		heading: {
			type: 'string',
			required: true,
		}
	},
	computedFields
}))

export default makeSource ({
	contentDirPath: 'src/app/',
	documentTypes: [ProfileDoc, CareerDoc, InterestsDoc],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: 'github-dark',
					onVisitLine(node) {
						if (node.children.length === 0) {
							node.children = [{ type: 'text', value: ' ' }]
						}
					},
					onVisistHighlightedLine(node) {
						node.properties.className.push('line--highlighted')
					},
					onVisithighlightedWord(node) {
						node.properties.className = ['word--highlighted']
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['subheading-anchor'],
						ariaLabel: 'Link to section',
					},
				},
			],
		]
	}
})