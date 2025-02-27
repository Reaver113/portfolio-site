import styles from "./Big-Card.module.css";

export default function BigCard(props: { children: JSX.Element }) {
  return <div className={styles.bigCard}>{props.children}</div>;
}
