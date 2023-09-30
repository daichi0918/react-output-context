type Props = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const InputForm = (props: Props) => {
  const {placeholder,value,onChange,onKeyDown} = props;

  return(
    <input 
      type="text" 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      onKeyDown={onKeyDown}
    />
  )
}