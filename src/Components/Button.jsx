// import ButtonContainer from "./ButtonContainer";
import styles from "./Button.module.css";
const Button = ({ buttonNames, handleOnClick }) => {
  return (
    <>
      {buttonNames.map((btnName) => (
        <button
          className={styles.button}
          key={btnName}
          onClick={() => handleOnClick(btnName)}
        >
          <span className={styles.btnColor}>{btnName}</span>
        </button>
      ))}
    </>
  );
};
export default Button;
