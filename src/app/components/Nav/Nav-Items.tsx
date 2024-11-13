import IconPicker from '@/app/Helpers/SVG-Resolver'
import styles from './Nav-Items.module.css'
import { Dispatch, SetStateAction } from 'react'

interface navItemProps {
	item: string
	isSelected: string
	changeSelected: Dispatch<SetStateAction<string>>
}

export default function NavItem({ item, isSelected, changeSelected }: navItemProps) {

	const handleClick = () => {
		changeSelected(item)
	}

	return(
		<div onClick={handleClick} className={`${styles.navItemContainer}  ${isSelected === item ? '' : 'desktop:hover:bg-[#C1121F] laptop:hover:bg-[#C1121F]'} desktop:mt-8 desktop:group-hover:mt-0 laptop:mt-8 laptop:group-hover:mt-0`}>
			<div className={`${styles.navItemImage} ${isSelected === item ? styles.selected : ''} delay-75 desktop:group-hover:h-24 desktop:group-hover:w-24 laptop:group-hover:h-24 laptop:group-hover:w-24`}>
				<IconPicker iconName={item}/>
			</div>
			<div id='itemText' className={`${styles.navItemTextContainer} ${isSelected === item ? styles.selected : ''} delay-75 desktop:group-hover:w-full laptop:group-hover:w-full`}>
				<div className={`${styles.navItemName} flex`}>{item}</div>
			</div>
		</div>
	)
}