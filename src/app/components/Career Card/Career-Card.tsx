import styles from './Career-Card.module.css'
import careerText from './Career-Text.json'

export default function CareerCard() {
	return (
		<div className={styles.careerCardContainer}>
			<div>
				{careerText.careerText}
			</div>
		</div>
	)
}