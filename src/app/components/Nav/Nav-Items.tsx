import IconPicker from '@/app/Helpers/SVG-Resolver'
import styles from './Nav-Items.module.css'

interface navItemProps {
	item: string
	isSelected: string
}

export default function NavItem({ item, isSelected }: navItemProps) {
	return(
		<div className={`${styles.navItemContainer}  ${isSelected === item ? '' : 'desktop:hover:bg-[#C1121F] laptop:hover:bg-[#C1121F]'} desktop:mt-8 desktop:group-hover:mt-0 laptop:mt-8 laptop:group-hover:mt-0`}>
			<div className={`${styles.navItemImage} ${isSelected === item ? styles.selected : ''} desktop:group-hover:h-24 desktop:group-hover:w-24 laptop:group-hover:h-24 laptop:group-hover:w-24`}>
				<IconPicker iconName={item}/>
			</div>
			<div className={`${styles.navItemTextContainer} ${isSelected === item ? styles.selected : ''} desktop:group-hover:w-full laptop:group-hover:w-full`}>
				<div className={`${styles.navItemName} flex`}>{item}</div>
			</div>
		</div>
	)
}