'use client'
import { useState } from "react";
import Nav from "../Nav/Nav";
import ProfileCard from "../Profile Card/Profile-Card";
import styles from './Component-Switcher.module.css'
import CareerCard from "../Career Card/Career-Card";
import InterestsCard from "../Interest Card/Interests-Card";


export default function ComponentSwitcher() {

	const [currentComponent, setCurrentComponent] = useState('Profile')

	return(
		<>
			<Nav currentComponent={currentComponent} changeComponent={setCurrentComponent}/>
			<div className={styles.componentContainer}>
				<ComponentContainer currentComponent={currentComponent} />
			</div>
		</>
	)
}

function ComponentContainer(props: {currentComponent: string}) {
	// switch (props.currentComponent) {
	// 	case 'Profile': return <ProfileCard />
	// 	case 'Career': return <CareerCard />
	// 	case 'Interests': return <InterestsCard />
	// }

	return (
		<>
			<ProfileCard currentCard={props.currentComponent} />
			<CareerCard currentCard={props.currentComponent} />
			<InterestsCard currentCard={props.currentComponent} />
		</>
	)
}