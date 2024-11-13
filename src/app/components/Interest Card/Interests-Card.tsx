import styles from './Interests-Card.module.css'
import careerText from './Interests-Text.json'

export default function InterestsCard() {
	return (
		<div className={styles.interestCardContainer}>
			<div>
				{careerText.careerText}
			</div>
		</div>
	)
}