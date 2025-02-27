import {allProfileTexts} from "contentlayer/generated"
import {allCareerTexts} from "contentlayer/generated"
import {allSBCsTexts} from "contentlayer/generated"
import {allFPVTexts} from "contentlayer/generated"
import {allTekkenTexts} from "contentlayer/generated"


export async function getprofileDoc() {
	const docText = allProfileTexts.find((docText) => docText)
	return docText
}

export async function getCareerDoc() {
	const docText = allCareerTexts.find((docText) => docText)
	return docText
}

export async function getSBCDoc() {
	const docText = allSBCsTexts.find((docText) => docText)
	return docText
}

export async function getFPVDoc() {
	const docText = allFPVTexts.find((docText) => docText)
	return docText
}

export async function getTekkenDoc() {
	const docText = allTekkenTexts.find((docText) => docText)
	return docText
}