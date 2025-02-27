import Markdown from "react-markdown";
import {
  CareerText,
  SBCsText,
  ProfileText,
  TekkenText,
  FPVText,
} from "contentlayer/generated";
import BigCard from "../Shared/Big-Card";
import { CardProps } from "../Shared/Card-Props";
import CarouselWrapper from "../Shared/Carousel-Wrapper";
import styles from "./Interests-Card.module.css";
import rehypeRaw from "rehype-raw";

interface InterestsCardProps extends CardProps {
  SBCDocument:
    | ProfileText
    | CareerText
    | SBCsText
    | TekkenText
    | FPVText
    | undefined;
  FPVDocument:
    | ProfileText
    | CareerText
    | SBCsText
    | TekkenText
    | FPVText
    | undefined;
  TekkenDocument:
    | ProfileText
    | CareerText
    | SBCsText
    | TekkenText
    | FPVText
    | undefined;
}

export default function InterestsCard({
  currentCard,
  previousCard,
  SBCDocument,
  FPVDocument,
  TekkenDocument,
}: InterestsCardProps) {
  return (
    <CarouselWrapper
      currentCard={currentCard}
      previousCard={previousCard}
      thisCard="Interests"
    >
      <BigCard>
        <div className={styles.wrapper}>
          <div className={styles.SBCDoc}>
            <div>
              <Markdown
                rehypePlugins={[rehypeRaw]}
                remarkRehypeOptions={{ allowDangerousHtml: true }}
              >
                {SBCDocument?.body.raw}
              </Markdown>
            </div>
          </div>

          <div className={styles.FPVDoc}>
            <div>
              <Markdown
                rehypePlugins={[rehypeRaw]}
                remarkRehypeOptions={{ allowDangerousHtml: true }}
              >
                {FPVDocument?.body.raw}
              </Markdown>
            </div>
          </div>

          <div className={styles.TekkenDoc}>
            <div>
              <Markdown
                rehypePlugins={[rehypeRaw]}
                remarkRehypeOptions={{ allowDangerousHtml: true }}
              >
                {TekkenDocument?.body.raw}
              </Markdown>
            </div>
          </div>
        </div>
      </BigCard>
    </CarouselWrapper>
  );
}
