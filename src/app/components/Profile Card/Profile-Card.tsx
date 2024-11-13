import Image from 'next/image'
import styles from './Profile-Card.module.css'
import pfp from '@/app/Images/pfp.jpg'
import profileText from './Profile-Text.json'

export default function ProfileCard() {

	const text = JSON.stringify(profileText.profileText)

	return (
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
	)
}