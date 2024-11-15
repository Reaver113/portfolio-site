import IconPicker from '@/app/Helpers/SVG-Resolver'
import styles from './Nav-Items.module.css'
import { Dispatch, SetStateAction } from 'react'

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

	return(
		<div onClick={handleClick} className={`${styles.navItemContainer}  ${currentComponent === item ? '' : 'desktop:hover:bg-[#C1121F] laptop:hover:bg-[#C1121F]'} desktop:mt-8 desktop:group-hover:mt-0 laptop:mt-8 laptop:group-hover:mt-0`}>
			<div className={`${styles.navItemImage} ${currentComponent === item ? styles.selected : ''} delay-75 desktop:group-hover:h-24 desktop:group-hover:w-24 laptop:group-hover:h-24 laptop:group-hover:w-24`}>
				<IconPicker iconName={item}/>
			</div>
			<div id='itemText' className={`${styles.navItemTextContainer} ${currentComponent === item ? styles.selected : ''} delay-75 desktop:group-hover:w-full laptop:group-hover:w-full`}>
				<div className={`${styles.navItemName} flex`}>{item}</div>
			</div>
		</div>
	)
}