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
type CreateProfile = {
  image?: string | null;
  name?: string | null;
  about?: string | null;
  socialMediaURL?: string | null;
  userID?: number | null;
};
