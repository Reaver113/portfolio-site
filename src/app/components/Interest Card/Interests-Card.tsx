import BigCard from '../Shared/Big-Card'
import styles from './Interests-Card.module.css'
import careerText from './Interests-Text.json'

export default function InterestsCard() {
	return (
		<BigCard>
			<div>
				{careerText.careerText}
			</div>
		</BigCard>
	)
}