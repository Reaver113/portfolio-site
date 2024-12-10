import Image from 'next/image'
import styles from './Profile-Card.module.css'
import pfp from '@/app/Images/pfp.jpg'
import CarouselWrapper from '../Shared/Carousel-Wrapper'
import {CardProps} from '../Shared/Card-Props'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import IconPicker from '@/app/Helpers/SVG-Resolver'
import { useState } from 'react'

export default function ProfileCard({currentCard, previousCard, document}: CardProps) {

	const bodyText = document?.body.raw
	const [documentFill, setDocumentFill] = useState('#000000')

	return (
		<CarouselWrapper currentCard={currentCard} previousCard={previousCard} thisCard='Profile' >
			<div className={styles.profileCardContainer}>
				<div className={styles.profileCard}>
					<div className={styles.profilePictureContainer}>
						<Image priority src={pfp} alt='Profile Picture' />
					</div>
					<div className={styles.profileTextContainer}>
						<Markdown remarkPlugins={[remarkGfm]}>{bodyText}</Markdown>
						<div className={styles.profileFooterContainer}>
							<div className={styles.profileLink}>You can visit the source code for this site here: <a href='https://github.com/Reaver113/portfolio-site'>https://github.com/Reaver113/portfolio-site</a></div>
							<a href='/Jason_Alcock_CV_2025.pdf' className={styles.profileIconContainer} onMouseEnter={() => setDocumentFill('#0000ff')} onMouseLeave={() => setDocumentFill('#000000')}>
								<div className={styles.profileIcon}><IconPicker iconName={'Document'} fill={documentFill}/></div>
									<div className={styles.profileIconText}>Resume</div>
							</a>
						</div>
						
					</div>
				</div>
			</div>
		</CarouselWrapper>
	)
}