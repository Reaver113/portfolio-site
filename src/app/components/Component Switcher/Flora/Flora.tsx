import Image from "next/image";
import Cherry_Blossom_1 from "@/app/Images/Cherry_Blossom_1.png"
import Cherry_Blossom_2 from "@/app/Images/Cherry_Blossom_2.png"
import Cherry_Blossom_3 from "@/app/Images/Cherry_Blossom_3.png"
import styles from './Flora.module.css'
import { useEffect, useState } from "react";

interface FloraProps {
	currentComponent: string
}

export default function Flora({currentComponent}: FloraProps) {

	useEffect(() => {
		StateShift()
	},[currentComponent])

	const [flora1, setFlora1] = useState('flora1')
	const [flora2, setFlora2] = useState('flora2')
	const [flora3, setFlora3] = useState('flora3')
	
	const PositionShift = (position: string) => {
		switch (position) {
			case 'flora1': return 'flora2'
			case 'flora2': return 'flora3'
			case 'flora3': return 'flora1'
			default: return 'flora1'
		}
	}

	const StateShift = () => {
		setFlora1(PositionShift(flora1))
		setFlora2(PositionShift(flora2))
		setFlora3(PositionShift(flora3))
	}

	return (
		<>
			<div className={`${styles[`${flora1}Positioner`]}`}>
				<FloraHandler type='1' />
			</div>
			<div className={`${styles[`${flora1}PositionerFlipped`]}`}>
				<FloraHandler type='2' />
			</div>
			<div className={`${styles[`${flora2}Positioner`]}`}>
				<FloraHandler type='2' />
			</div>
			<div className={`${styles[`${flora2}PositionerFlipped`]}`}>
				<FloraHandler type='3' />
			</div>
			<div className={`${styles[`${flora3}Positioner`]}`}>
				<FloraHandler type='3' />
			</div>
			<div className={`${styles[`${flora3}PositionerFlipped`]}`}>
				<FloraHandler type='1' />
			</div>
		</>
	)
}

interface FloraTypes {
	type: '1' | '2' | '3'
}

function FloraHandler({type}: FloraTypes) {

	const CherryBlossom = () => {
		switch (type) {
			case '1': return ( Cherry_Blossom_1)
			case '2': return (Cherry_Blossom_2)
			case '3': return (Cherry_Blossom_3)
			default: return (Cherry_Blossom_1)
		}
	}

	return (
		<div className={styles.flora}>
			<Image src={CherryBlossom()} alt='Cherry Blossom' fill={true}/>
		</div>
	)
}