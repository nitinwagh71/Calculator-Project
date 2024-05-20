import styles from "./Display.module.css";
const Display = ({ displayVal }) => {
  return (
    <div className={styles.display}>
      <input type="text" value={displayVal} readOnly />
    </div>
  );
};

export default Display;
