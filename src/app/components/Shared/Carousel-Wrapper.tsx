import { useEffect, useState } from 'react'
import styles from './Carousel-Wrapper.module.css'

interface CarouselWrapperProps {
	children: JSX.Element, 
	currentCard: string, 
	thisCard: string, 
	previousCard:string
}

export default function CarouselWrapper({children, currentCard, thisCard, previousCard}:CarouselWrapperProps) {

	const [currentStyle, setCurrentStyle] = useState('')

	useEffect(() => {
		animateOut()
	},[currentCard])

	const animateOut = () => {
		setCurrentStyle(styles.animateOut)
		setTimeout(()=> {
      if (previousCard === thisCard) {
        setCurrentStyle('!hidden');
      }
		},250)
	}

	return (
		<div className={`${styles.carouselWrapper} ${currentCard === thisCard ? styles.animateIn : previousCard === thisCard ? currentStyle : '!hidden'}`}>
			<div className={styles.childWrapper}>
				{children}
			</div>
		</div>
	) 
}