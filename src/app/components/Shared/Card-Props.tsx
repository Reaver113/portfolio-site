import { CareerText, InterestsText, ProfileText } from "contentlayer/generated"

export interface CardProps {
	currentCard: string
	previousCard: string
	document: ProfileText | CareerText | InterestsText | undefined
}


