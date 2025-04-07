import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AvatarImgProps {
  className?: string;
}

export const AvatarImg = ({ className }: AvatarImgProps) => {
  return (
    <Avatar className={className}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
