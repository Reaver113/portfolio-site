import BigCard from '../Shared/Big-Card'
import { CardProps } from '../Shared/Card-Props'
import CarouselWrapper from '../Shared/Carousel-Wrapper'
import styles from './Career-Card.module.css'
import careerText from './Career-Text.json'

export default function CareerCard({currentCard, previousCard}: CardProps) {
	return (
		<CarouselWrapper currentCard={currentCard} previousCard={previousCard} thisCard={Object.keys(careerText)[0]} >
			<BigCard>
				<div>
					{careerText.Career}
					{careerText.Career}
				</div>
			</BigCard>
		</CarouselWrapper>
	)
}