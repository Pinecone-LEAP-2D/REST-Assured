import { HeaderH } from "../_component_/_homeSettings_/HeaderH";
import { Profile_C } from "../_component_/donation_C_Left/Profile";
import { Recent_S_C } from "../_component_/donation_C_Left/Recent_Supporters";
import { Social_URL_C } from "../_component_/donation_C_Left/Social_Url";
import { Amount_C } from "../_component_/donation_C_Right/Amount";
import { Buy_Coffee_C } from "../_component_/donation_C_Right/Buy_Coffee";
import { Message_D } from "../_component_/donation_C_Right/Message_D";
import { Social_Url_D } from "../_component_/donation_C_Right/Social_Url";
import { Support_D } from "../_component_/donation_C_Right/Support_Button";

//this page is used for visiting other peoples profile
const Supporter = () => {
  return (
    <div className="w-full h-[1000px] relative overflow-hidden">
      <HeaderH />
      <div className="w-[632px] h-auto justify-start items-start gap-5 absolute top-[289px] left-[80px]">
        <Profile_C />
        <Social_URL_C />
        <Recent_S_C />
      </div>
      <div className="w-[628px] h-auto justify-start items-start gap-5 absolute top-[289px] left-[732px]">
        <div className="w-full h-auto p-6 rounded-lg outline border-[#E4E4E7] bg-white inline-flex flex-col justify-start items-start gap-2">
          <Buy_Coffee_C />
          <div className="w-full mt-[26px] inline-flex flex-col gap-2">
            <Amount_C />
            <Social_Url_D />
            <Message_D />
            <Support_D />
          </div>
        </div>
      </div>
    </div>
  );
};
