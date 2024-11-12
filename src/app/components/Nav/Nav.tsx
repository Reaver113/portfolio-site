import NavItem from './Nav-Items'
import styles from './Nav.module.css'
import navContentJSON from './Nav-Content.json'


interface NavProps {
	changeComponent: any,
	currentComponent: string,
}

export default function Nav({changeComponent, currentComponent}: NavProps) {

	return (
		<div className={`${styles.navContainer} group`}>
			{navContentJSON.map((navItem, index) => (
				<div key={`navItem-${index}`} className={` ${styles.itemTransition}`}>
					<NavItem item={navItem.name} isSelected={currentComponent} />
				</div>
			))}
		</div>
	)
}
