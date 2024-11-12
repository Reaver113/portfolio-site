import IconPicker from '@/app/Helpers/SVG-Resolver'
import styles from './Nav-Items.module.css'

interface navItemProps {
	item: string
	isSelected: string
}

export default function NavItem({ item, isSelected }: navItemProps) {
	return(
		<div className={`${styles.navItemContainer} group-hover:mt-2`}>
			<div className={`${styles.navItemImage} ${isSelected === item ? styles.selected : ''} duration-1000 group-hover:h-10 group-hover:w-10`}>
				<IconPicker iconName={item}/>
			</div>
			<div className={`${styles.navItemTextContainer} h-0 group-hover:h-36 duration-700`}>
				<div className={`${styles.navItemName} flex`}>{item}</div>
			</div>
		</div>
	)
}