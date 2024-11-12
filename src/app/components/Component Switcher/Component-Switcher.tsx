'use client'
import { useState } from "react";
import Nav from "../Nav/Nav";
import ProfileCard from "../Profile Card/Profile-Card";
import styles from './Component-Switcher.module.css'


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
	console.log(props.currentComponent)
	switch (props.currentComponent) {
		case 'Profile': return <ProfileCard />
	}
}