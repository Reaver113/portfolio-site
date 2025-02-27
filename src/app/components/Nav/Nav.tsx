import NavItem from "./Nav-Items";
import styles from "./Nav.module.css";
import { Dispatch, SetStateAction } from "react";

const navContent = [
  {
    name: "Profile",
  },
  {
    name: "Career",
  },
  {
    name: "Interests",
  },
];

interface NavProps {
  changeComponent: Dispatch<SetStateAction<string>>;
  currentComponent: string;
  changePreviousComponent: Dispatch<SetStateAction<string>>;
  previousComponent: string;
}

export default function Nav({
  changeComponent,
  currentComponent,
  changePreviousComponent,
  previousComponent,
}: NavProps) {
  return (
    <div id="Nav" className={`${styles.navContainer}`}>
      {navContent.map((navItem, index) => (
        <NavItem
          key={`navItem-${index}`}
          item={navItem.name}
          currentComponent={currentComponent}
          changeComponent={changeComponent}
          previousComponent={previousComponent}
          changePreviousComponent={changePreviousComponent}
        />
      ))}
    </div>
  );
}
