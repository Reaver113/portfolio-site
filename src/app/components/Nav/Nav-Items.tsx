import IconPicker from "@/app/Helpers/SVG-Resolver";
import styles from "./Nav-Items.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface navItemProps {
  item: string;
  currentComponent: string;
  changeComponent: Dispatch<SetStateAction<string>>;
  previousComponent: string;
  changePreviousComponent: Dispatch<SetStateAction<string>>;
}

export default function NavItem({
  item,
  currentComponent,
  changeComponent,
  previousComponent,
  changePreviousComponent,
}: navItemProps) {
  const handleClick = () => {
    if (previousComponent != currentComponent) {
      changePreviousComponent(currentComponent);
    }
    changeComponent(item);
  };

  const isActive = () => {
    return currentComponent === item;
  };

  const [iconFill, setIconFill] = useState("#ffede1");

  useEffect(() => {
    setIconFill("#ffede1");
  }, [currentComponent]);

  const handleHover = () => {
    if (!isActive()) {
      setIconFill("#0e1c36");
    }
  };

  const handleUnHover = () => {
    if (!isActive()) {
      setIconFill("#ffede1");
    }
  };

  return (
    <div
      id="navIcon"
      onMouseEnter={handleHover}
      onMouseLeave={handleUnHover}
      onClick={handleClick}
      className={`navIcon ${styles.navItemContainer}  ${
        isActive() ? "" : "hover:bg-[#afcbff]"
      }`}
    >
      <div
        className={`${styles.navItemImage} ${
          isActive() ? styles.selected : ""
        }`}
      >
        <IconPicker iconName={item} fill={isActive() ? "#0e1c36" : iconFill} />
      </div>
      <div
        id="itemText"
        className={`${styles.navItemTextContainer} ${
          isActive() ? styles.selected : ""
        }`}
      >
        <div className={`${styles.navItemName} flex`}>{item}</div>
      </div>
    </div>
  );
}
