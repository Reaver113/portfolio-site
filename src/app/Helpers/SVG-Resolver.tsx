import ProfileIcon from '../SVGs/Profile_SVG'
import CareerIcon from '../SVGs/Career_SVG'
import InterestsIcon from '../SVGs/Interests_SVG'
import DocumentSVG from '../SVGs/Document_SVG'

interface IconProps {
	iconName: string,
	fill: string
}

export default function IconPicker({iconName, fill}: IconProps) {
	switch (iconName) {
		case 'Profile': return <ProfileIcon fill={fill}/>
		case 'Career': return <CareerIcon fill={fill}/>
		case 'Interests': return <InterestsIcon fill={fill}/>
		case 'Document': return <DocumentSVG fill={fill}/>
	}
}