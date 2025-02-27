"use client";
import { useState } from "react";
import Nav from "../Nav/Nav";
import ProfileCard from "../Profile Card/Profile-Card";
import styles from "./Component-Switcher.module.css";
import CareerCard from "../Career Card/Career-Card";
import InterestsCard from "../Interest Card/Interests-Card";
import Flora from "./Flora/Flora";
import {
  CareerText,
  FPVText,
  ProfileText,
  SBCsText,
  TekkenText,
} from "contentlayer/generated";

type Heading = "profile" | "career" | "SBCs" | "Tekken" | "FPV";

export default function ComponentSwitcher(
  documents: (
    | ProfileText
    | CareerText
    | SBCsText
    | FPVText
    | TekkenText
    | undefined
  )[]
) {
  const [currentComponent, setCurrentComponent] = useState("Profile");
  const [previousComponent, setPreviousComponent] = useState("Profile");

  return (
    <>
      <Nav
        currentComponent={currentComponent}
        changeComponent={setCurrentComponent}
        previousComponent={previousComponent}
        changePreviousComponent={setPreviousComponent}
      />
      <div className={styles.componentContainer}>
        <ComponentContainer
          documents={documents}
          currentComponent={currentComponent}
          previousComponent={previousComponent}
        />
      </div>
      <div className={styles.floraContainer}>
        <Flora currentComponent={currentComponent} />
      </div>
    </>
  );
}

function ComponentContainer(props: {
  currentComponent: string;
  previousComponent: string;
  documents: (
    | ProfileText
    | CareerText
    | SBCsText
    | FPVText
    | TekkenText
    | undefined
  )[];
}) {
  const filterDocumentsByHeading = (headingToMatch: Heading) => {
    return Object.values(props.documents).find(
      (item) =>
        item?.heading?.trim().toLowerCase() ===
        headingToMatch.trim().toLowerCase()
    );
  };

  return (
    <>
      <ProfileCard
        document={filterDocumentsByHeading("profile")}
        currentCard={props.currentComponent}
        previousCard={props.previousComponent}
      />
      <CareerCard
        document={filterDocumentsByHeading("career")}
        currentCard={props.currentComponent}
        previousCard={props.previousComponent}
      />
      <InterestsCard
        SBCDocument={filterDocumentsByHeading("SBCs")}
        TekkenDocument={filterDocumentsByHeading("Tekken")}
        FPVDocument={filterDocumentsByHeading("FPV")}
        currentCard={props.currentComponent}
        previousCard={props.previousComponent}
      />
    </>
  );
}
