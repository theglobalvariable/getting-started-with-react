import styles from "./ButtonsContainer.module.css";
export default function ButtonsContainer() {
  const buttonNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "C",
    "0",
    ".",
    "+",
    "-",
    "*",
    "/",
    "=",
  ];
  return (
    <div className={styles["buttons-container"]}>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} className={styles.button}>
          {buttonName}
        </button>
      ))}
    </div>
  );
}
