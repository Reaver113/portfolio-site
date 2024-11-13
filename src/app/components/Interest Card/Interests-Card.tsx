import BigCard from '../Shared/Big-Card'
import { CardProps } from '../Shared/Card-Props'
import CarouselWrapper from '../Shared/Carousel-Wrapper'
import styles from './Interests-Card.module.css'
import interestsText from './Interests-Text.json'

export default function InterestsCard({currentCard}: CardProps) {
	return (
		<CarouselWrapper selectedCard={currentCard} thisCard={Object.keys(interestsText)[0]} >
			<BigCard>
				<div>
					{interestsText.Interests}
				</div>
			</BigCard>
		</CarouselWrapper>
	)
}