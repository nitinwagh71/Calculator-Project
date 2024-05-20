import styles from "./ButtonContainer.module.css";
import Button from "./Button";
const ButtonContainer = ({ buttonNames, handleOnClick }) => {
  return (
    <div className={styles.buttonsContainer}>
      <Button buttonNames={buttonNames} handleOnClick={handleOnClick}></Button>
    </div>
  );
};

export default ButtonContainer;
