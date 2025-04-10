type InputProps = {
    type: string;
    placeholder: string;
    maxLength?: number;
    min?: number;
    max?: number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
  };
  
type CreateAccount = {
  email?:string | null
  password?: string | null;
  username?: string | null
};