import IconPicker from '@/app/Helpers/SVG-Resolver'
import styles from './Nav-Items.module.css'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface navItemProps {
	item: string
	currentComponent: string
	changeComponent: Dispatch<SetStateAction<string>>
	previousComponent: string
	changePreviousComponent: Dispatch<SetStateAction<string>>
}

export default function NavItem({ item, currentComponent, changeComponent, previousComponent, changePreviousComponent }: navItemProps) {

	const handleClick = () => {
		if (previousComponent != currentComponent) {
			changePreviousComponent(currentComponent)
		}
		changeComponent(item)
	}

	const isActive = () => {
		return currentComponent === item
	}

	const [iconFill, setIconFill] = useState('#ffffff')

	useEffect(() => {
		setIconFill('#ffffff')
	},[currentComponent])

	const handleHover = () => {
		if (!isActive()) {
			setIconFill('#0e1c36')
		}
	}

	const handleUnHover = () => {
		if (!isActive()) {
			setIconFill('#ffffff')
		}
	}

	return(
		<div id='navIcon' onMouseEnter={handleHover} onMouseLeave={handleUnHover} onClick={handleClick} className={`navIcon ${styles.navItemContainer}  ${isActive() ? '' : 'desktop:hover:bg-[#afcbff] laptop:hover:bg-[#afcbff]'} desktop:mt-8 desktop:group-hover:mt-0 laptop:mt-8 laptop:group-hover:mt-0`}>
			<div className={`${styles.navItemImage} ${isActive() ? styles.selected : ''} delay-75 desktop:group-hover:h-14 desktop:group-hover:w-14 laptop:group-hover:h-14 laptop:group-hover:w-14`}>
				<IconPicker iconName={item} fill={isActive() ? '#0e1c36' : iconFill}/>
			</div>
			<div id='itemText' className={`${styles.navItemTextContainer} ${isActive() ? styles.selected : ''} delay-75 desktop:group-hover:w-full laptop:group-hover:w-full`}>
				<div className={`${styles.navItemName} flex`}>{item}</div>
			</div>
		</div>
	)
}