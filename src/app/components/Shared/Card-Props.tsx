import {
  CareerText,
  SBCsText,
  ProfileText,
  TekkenText,
  FPVText,
} from "contentlayer/generated";

export interface CardProps {
  currentCard: string;
  previousCard: string;
  document?:
    | ProfileText
    | CareerText
    | SBCsText
    | TekkenText
    | FPVText
    | undefined;
}
