import { InputForm } from "../../atoms/InputForm";
import styles from './style.module.css';

type Props = {
  addInputValue: string;
  onChangeAddInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownInputValue: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const AddTodo = (props: Props) => {
  const {addInputValue,onChangeAddInputValue,onKeyDownInputValue} = props;

  return(
    <>
      <h2 className={styles.subtitle}>ADD TODO</h2>
      <InputForm 
        placeholder={"New Todo"}
        value={addInputValue}
        onChange={onChangeAddInputValue} 
        onKeyDown={onKeyDownInputValue}
      />
    </>
  )
}