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
type UserProfile =
  | {
      id: number;
      userId: number | string;
      name: string;
      about: string;
      avatarImage: string;
      backgroundImage: string;
      socialMediaURL: string;
      successMessage: string;
      createdAt: string;
      updatedAt: string;
    }
  | undefined;
