'use client'
import { useState } from "react";
import Nav from "../Nav/Nav";
import ProfileCard from "../Profile Card/Profile-Card";
import styles from './Component-Switcher.module.css'
import CareerCard from "../Career Card/Career-Card";
import InterestsCard from "../Interest Card/Interests-Card";


export default function ComponentSwitcher() {

	const [currentComponent, setCurrentComponent] = useState('Profile')
	const [previousComponent, setPreviousComponent] = useState('Profile')

	return(
		<>
			<Nav currentComponent={currentComponent} changeComponent={setCurrentComponent} previousComponent={previousComponent} changePreviousComponent={setPreviousComponent}/>
			<div className={styles.componentContainer}>
				<ComponentContainer currentComponent={currentComponent} previousComponent={previousComponent} />
			</div>
		</>
	)
}

function ComponentContainer(props: {currentComponent: string, previousComponent: string}) {
	// switch (props.currentComponent) {
	// 	case 'Profile': return <ProfileCard />
	// 	case 'Career': return <CareerCard />
	// 	case 'Interests': return <InterestsCard />
	// }

	return (
		<>
			<ProfileCard currentCard={props.currentComponent} previousCard={props.previousComponent}/>
			<CareerCard currentCard={props.currentComponent} previousCard={props.previousComponent}/>
			<InterestsCard currentCard={props.currentComponent} previousCard={props.previousComponent}/>
		</>
	)
}