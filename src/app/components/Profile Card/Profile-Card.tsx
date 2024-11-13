import Image from 'next/image'
import styles from './Profile-Card.module.css'
import pfp from '@/app/Images/pfp.jpg'
import profileText from './Profile-Text.json'
import CarouselWrapper from '../Shared/Carousel-Wrapper'
import {CardProps} from '../Shared/Card-Props'

export default function ProfileCard({currentCard}: CardProps) {

	const text = JSON.stringify(profileText.Profile)

	return (
		<CarouselWrapper selectedCard={currentCard} thisCard={Object.keys(profileText)[0]} >
			<div className={styles.profileCardContainer}>
				<div className={styles.profileCard}>
					<div className={styles.profilePictureContainer}>
						<Image src={pfp} alt='Profile Picture' />
					</div>
					<div className={styles.profileTextContainer}>
						{text}
					</div>
				</div>
			</div>
		</CarouselWrapper>
	)
}