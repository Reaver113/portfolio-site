'use client'
import { useState } from "react";
import Nav from "../Nav/Nav";
import ProfileCard from "../Profile Card/Profile-Card";
import styles from './Component-Switcher.module.css'
import CareerCard from "../Career Card/Career-Card";
import InterestsCard from "../Interest Card/Interests-Card";
import Flora from "./Flora/Flora";
import { CareerText, InterestsText, ProfileText } from "contentlayer/generated";


type Heading = "profile" | "career" | "interests";


export default function ComponentSwitcher(documents: (ProfileText | CareerText | InterestsText | undefined)[]) {

	const [currentComponent, setCurrentComponent] = useState('Profile')
	const [previousComponent, setPreviousComponent] = useState('Profile')

	return(
		<>
			<Nav currentComponent={currentComponent} changeComponent={setCurrentComponent} previousComponent={previousComponent} changePreviousComponent={setPreviousComponent}/>
			<div className={styles.componentContainer}>
				<ComponentContainer documents={documents} currentComponent={currentComponent} previousComponent={previousComponent} />
			</div>
			<div className={styles.floraContainer}>
				<Flora currentComponent={currentComponent} />
			</div>
		</>
	)
}

function ComponentContainer(props: {currentComponent: string, previousComponent: string, documents: (ProfileText | CareerText | InterestsText | undefined)[]}) {
	
	const filterDocumentsByHeading = (headingToMatch: Heading) => {
    return Object.values(props.documents).find(item => item?.heading.trim().toLowerCase() === headingToMatch.trim().toLowerCase());
};

	const docList = Object.values(props.documents)


	return (
		<>
			<ProfileCard document={filterDocumentsByHeading('profile')} currentCard={props.currentComponent} previousCard={props.previousComponent}/>
			<CareerCard document={filterDocumentsByHeading('career')} currentCard={props.currentComponent} previousCard={props.previousComponent}/>
			<InterestsCard document={filterDocumentsByHeading('interests')} currentCard={props.currentComponent} previousCard={props.previousComponent}/>
		</>
	)
}