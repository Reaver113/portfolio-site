import NavItem from './Nav-Items'
import styles from './Nav.module.css'
import navContentJSON from './Nav-Content.json'
import { Dispatch, SetStateAction } from 'react'


interface NavProps {
	changeComponent: Dispatch<SetStateAction<string>>,
	currentComponent: string,
	changePreviousComponent: Dispatch<SetStateAction<string>>,
	previousComponent: string,
}

export default function Nav({changeComponent, currentComponent, changePreviousComponent, previousComponent}: NavProps) {

	const hoverNav = () => {
		Array.from(document.getElementsByClassName('navIcon')).forEach(icon => {
			icon.classList.remove('desktop:mt-8', 'laptop:mt-8');
		});
	}

	const handleMouseLeave = () => {
		document.getElementById('Nav')?.classList.add(styles.delayedUnhover)
		console.log(document.getElementsByClassName('navIcon'))
		setTimeout(()=> {
			document.getElementById('Nav')?.classList.remove(styles.delayedUnhover)
			Array.from(document.getElementsByClassName('navIcon'))?.forEach(icon => {
				icon.classList.add('desktop:mt-8', 'laptop:mt-8')
			})
		}, 350)
	}

	return (
		<div id='Nav' className={`${styles.navContainer} group`} onMouseLeave={handleMouseLeave} onMouseEnter={hoverNav}>
			{navContentJSON.map((navItem, index) => (
				<div key={`navItem-${index}`} className={` ${styles.itemTransition}`}>
					<NavItem item={navItem.name} currentComponent={currentComponent} changeComponent={changeComponent} previousComponent={previousComponent} changePreviousComponent={changePreviousComponent} />
				</div>
			))}
		</div>
	)
}
