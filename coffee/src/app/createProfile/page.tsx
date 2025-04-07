import { AvatarImg } from "@/components/AvararImg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const createProfile = () => {
  return (
    <div className="w-full inline-flex flex-col justify-start items-center gap-6">
      <div className="w-[510px] max-w-[672px] inline-flex flex-col justify-start items-start gap-6">
        <h3 className="text-12"> Complete your profile page </h3>
        <div className="inline-flex flex-col justify-start items-start gap-3">
          <p>Add photo</p>
          <AvatarImg className="w-40 h-40" />
        </div>
        <div className="w-full">
          <p>Name</p>
          <Input type="text" placeholder="Enter your name here"/>
          <p>About</p>
          <Textarea placeholder="Write about yourself here" className="h-[131px]"/>
          <p>Social media URL</p>
          <Input type="URL" placeholder="https://" />
        </div>
        <Button className="bg-grey-500"/>
      </div>
    </div>
  );
};
export default createProfile;
