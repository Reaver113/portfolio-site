import Image from 'next/image'
import styles from './Profile-Card.module.css'
import pfp from '@/app/Images/pfp.jpg'
import CarouselWrapper from '../Shared/Carousel-Wrapper'
import {CardProps} from '../Shared/Card-Props'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ProfileCard({currentCard, previousCard, document}: CardProps) {

	const bodyText = document?.body.raw

	return (
		<CarouselWrapper currentCard={currentCard} previousCard={previousCard} thisCard='Profile' >
			<div className={styles.profileCardContainer}>
				<div className={styles.profileCard}>
					<div className={styles.profilePictureContainer}>
						<Image priority src={pfp} alt='Profile Picture' />
					</div>
					<div className={styles.profileTextContainer}>
						<Markdown remarkPlugins={[remarkGfm]}>{bodyText}</Markdown>
					</div>
				</div>
			</div>
		</CarouselWrapper>
	)
}