'use client'
import { useState } from "react";
import Nav from "../Nav/Nav";
import ProfileCard from "../Profile Card/Profile-Card";
import styles from './Component-Switcher.module.css'
import CareerCard from "../Career Card/Career-Card";
import InterestsCard from "../Interest Card/Interests-Card";
import Flora from "./Flora/Flora";





export default function ComponentSwitcher() {

	const [currentComponent, setCurrentComponent] = useState('Profile')
	const [previousComponent, setPreviousComponent] = useState('Profile')

	return(
		<>
			<Nav currentComponent={currentComponent} changeComponent={setCurrentComponent} previousComponent={previousComponent} changePreviousComponent={setPreviousComponent}/>
			<div className={styles.componentContainer}>
				<ComponentContainer currentComponent={currentComponent} previousComponent={previousComponent} />
			</div>
			<div className={styles.floraContainer}>
				<Flora currentComponent={currentComponent} />
			</div>
		</>
	)
}

function ComponentContainer(props: {currentComponent: string, previousComponent: string}) {
	return (
		<>
			<ProfileCard currentCard={props.currentComponent} previousCard={props.previousComponent}/>
			<CareerCard currentCard={props.currentComponent} previousCard={props.previousComponent}/>
			<InterestsCard currentCard={props.currentComponent} previousCard={props.previousComponent}/>
		</>
	)
}