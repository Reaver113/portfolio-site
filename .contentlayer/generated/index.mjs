// NOTE This file is auto-generated by Contentlayer

export { isType } from 'contentlayer/client'

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import allProfileTexts from './ProfileText/_index.json' assert { type: 'json' }
import allCareerTexts from './CareerText/_index.json' assert { type: 'json' }
import allInterestsTexts from './InterestsText/_index.json' assert { type: 'json' }

export { allProfileTexts, allCareerTexts, allInterestsTexts }

export const allDocuments = [...allProfileTexts, ...allCareerTexts, ...allInterestsTexts]

