import NavItem from './Nav-Items'
import styles from './Nav.module.css'
import navContentJSON from './Nav-Content.json'


interface NavProps {
	changeComponent: any,
	currentComponent: string,
}

export default function Nav({changeComponent, currentComponent}: NavProps) {

	const handleMouseLeave = () => {
		document.getElementById('Nav')?.classList.add(styles.delayedUnhover)
		setTimeout(()=> {
			document.getElementById('Nav')?.classList.remove(styles.delayedUnhover)
		}, 220)
	}

	return (
		<div id='Nav' className={`${styles.navContainer} group`} onMouseLeave={handleMouseLeave}>
			{navContentJSON.map((navItem, index) => (
				<div key={`navItem-${index}`} className={` ${styles.itemTransition}`}>
					<NavItem item={navItem.name} isSelected={currentComponent} />
				</div>
			))}
		</div>
	)
}
