import styles from './Carousel-Wrapper.module.css'

export default function CarouselWrapper(props: {children: JSX.Element, selectedCard: string, thisCard: string}) {
	return (
		<div className={`${styles.carouselWrapper} ${props.selectedCard === props.thisCard ? '' : 'hidden'}`}>
			{props.children}
		</div>
	) 
}