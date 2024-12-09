import {allProfileTexts} from "contentlayer/generated"
import {allCareerTexts} from "contentlayer/generated"
import {allInterestsTexts} from "contentlayer/generated"

export async function getprofileDoc() {
	const docText = allProfileTexts.find((docText) => docText)
	return docText
}

export async function getCareerDoc() {
	const docText = allCareerTexts.find((docText) => docText)
	return docText
}

export async function getInterestsDoc() {
	const docText = allInterestsTexts.find((docText) => docText)
	return docText
}