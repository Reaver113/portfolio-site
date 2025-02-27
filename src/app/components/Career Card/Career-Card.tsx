import BigCard from "../Shared/Big-Card";
import { CardProps } from "../Shared/Card-Props";
import CarouselWrapper from "../Shared/Carousel-Wrapper";
import styles from "./Career-Card.module.css";
import Markdown from "react-markdown";
import { CareerText as CareerTextType } from "contentlayer/generated";

export default function CareerCard({
  currentCard,
  previousCard,
  document,
}: CardProps) {
  const bodyText = document as CareerTextType;

  return (
    <CarouselWrapper
      currentCard={currentCard}
      previousCard={previousCard}
      thisCard="Career"
    >
      <BigCard>
        <CareerItem text={bodyText} />
      </BigCard>
    </CarouselWrapper>
  );
}

function CareerItem({ text }: { text: CareerTextType | undefined }) {
  return (
    <div className={styles.careerAnimationWrapper}>
      <div className={styles.careerAnimation}>
        <div className={styles.circle} />
      </div>
      <div className={styles.markdownWrapper}>
        <Markdown>{text?.body.raw}</Markdown>
      </div>
    </div>
  );
}
