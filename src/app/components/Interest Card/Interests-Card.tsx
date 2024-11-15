import BigCard from '../Shared/Big-Card'
import { CardProps } from '../Shared/Card-Props'
import CarouselWrapper from '../Shared/Carousel-Wrapper'
import styles from './Interests-Card.module.css'
import interestsText from './Interests-Text.json'

export default function InterestsCard({currentCard, previousCard}: CardProps) {
	return (
		<CarouselWrapper currentCard={currentCard} previousCard={previousCard} thisCard={Object.keys(interestsText)[0]} >
			<BigCard>
				<div>
					{interestsText.Interests}
				</div>
			</BigCard>
		</CarouselWrapper>
	)
}