import { Coffee } from "lucide-react";
const SignUp = async () => {
  return (
    <div className="w-auto h-auto">
      <div className="w-[800px] h-[1000px] relative bg-[#FBBF24] overflow-hidden">
        <div className="inline-flex justify-start items-center gap-2 absolute top-[32px] left-[80px]">
          <Coffee color="black" />
          <span className="text-black text-base font-bold font-['Inter'] leading-tight">
            Buy Me Coffee
          </span>
        </div>
        <div className="absolute top-[287px] left-[234.5px]">
            <img src="illustration.svg" />
            <span>Fund your creative work</span>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
