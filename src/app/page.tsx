import { getCareerDoc, getInterestsDoc, getprofileDoc } from "./components/Shared/Fetch/FetchDoc";
import ComponentSwitcher from "./components/Component Switcher/Component-Switcher";


const profile = await getprofileDoc();
const career = await getCareerDoc();
const interests = await getInterestsDoc();

export default function Home() {
	const documents = [
		profile,
		career,
		interests
	]
	
  return <ComponentSwitcher {...documents} />
}