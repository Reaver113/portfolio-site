import BigCard from '../Shared/Big-Card'
import { CardProps } from '../Shared/Card-Props'
import CarouselWrapper from '../Shared/Carousel-Wrapper'
import styles from './Interests-Card.module.css'
import { getInterestsDoc } from '../Shared/Fetch/FetchDoc'

const InterestsText = await getInterestsDoc()


export default function InterestsCard({currentCard, previousCard}: CardProps) {
	return (
		<CarouselWrapper currentCard={currentCard} previousCard={previousCard} thisCard='Interests' >
			<BigCard>
				<div>
					{InterestsText?.body.raw}
				</div>
			</BigCard>
		</CarouselWrapper>
	)
}