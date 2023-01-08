import { CgFacebook } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
const Social = (props) => {
  return (
    <div className="flex justify-center gap-3">
      <CgFacebook
        className={`cursor-pointer hover:text-white hover:border-[var(--color-primary)] duration-500   border-[1px] rounded-full p-2 transition-colors hover:bg-[var(--color-primary)] ${props.classes}`}
        size={props.size}
      />
      <BsTwitter
        className={`cursor-pointer hover:text-white hover:border-[var(--color-primary)] duration-500   border-[1px] rounded-full p-2 transition-colors hover:bg-[var(--color-primary)] ${props.classes}`}
        size={props.size}
      />
      <GrLinkedinOption
        className={`cursor-pointer hover:text-white hover:border-[var(--color-primary)] duration-500   border-[1px] rounded-full p-2 transition-colors hover:bg-[var(--color-primary)] ${props.classes}`}
        size={props.size}
      />
      <AiOutlineInstagram
        className={`cursor-pointer hover:text-white hover:border-[var(--color-primary)] duration-500   border-[1px] rounded-full p-2 transition-colors hover:bg-[var(--color-primary)] ${props.classes}`}
        size={props.size}
      />
    </div>
  );
};

export default Social;
