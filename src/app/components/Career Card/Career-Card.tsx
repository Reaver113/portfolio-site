import BigCard from '../Shared/Big-Card'
import styles from './Career-Card.module.css'
import careerText from './Career-Text.json'

export default function CareerCard() {
	return (
		<BigCard>
			<div>
				{careerText.careerText}
				{careerText.careerText}
			</div>
		</BigCard>
	)
}