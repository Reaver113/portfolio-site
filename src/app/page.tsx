import {
  getCareerDoc,
  getFPVDoc,
  getSBCDoc,
  getTekkenDoc,
  getprofileDoc,
} from "./components/Shared/Fetch/FetchDoc";

import ComponentSwitcher from "./components/Component Switcher/Component-Switcher";

const profile = await getprofileDoc();
const career = await getCareerDoc();
const SBC = await getSBCDoc();
const FPV = await getFPVDoc();
const Tekken = await getTekkenDoc();

export default function Home() {
  const documents = [profile, career, SBC, FPV, Tekken];

  return <ComponentSwitcher {...documents} />;
}
