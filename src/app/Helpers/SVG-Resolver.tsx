import profileIcon from '../SVGs/Profile_SVG.svg'
import careerIcon from '../SVGs/Career_SVG.svg'
import InterestsIcon from '../SVGs/Interests_SVG.svg'
import Image from 'next/image'

interface IconProps {
	iconName: string,
}

export default function IconPicker({iconName}: IconProps) {
	switch (iconName) {
		case 'Profile': return <Image src={profileIcon} alt={iconName} />
		case 'Career': return <Image src={careerIcon} alt={iconName} />
		case 'Interests': return <Image src={InterestsIcon} alt={iconName} />
	}
}