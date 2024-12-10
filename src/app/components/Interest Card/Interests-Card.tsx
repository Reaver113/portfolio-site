import Markdown from 'react-markdown'
import BigCard from '../Shared/Big-Card'
import { CardProps } from '../Shared/Card-Props'
import CarouselWrapper from '../Shared/Carousel-Wrapper'
import styles from './Interests-Card.module.css'



export default function InterestsCard({currentCard, previousCard, document}: CardProps) {
	return (
		<CarouselWrapper currentCard={currentCard} previousCard={previousCard} thisCard='Interests' >
			<BigCard>
				<div>
					<Markdown>{document?.body.raw}</Markdown>
				</div>
			</BigCard>
		</CarouselWrapper>
	)
}