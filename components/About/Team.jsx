import Image from "next/image";
import { team } from "../../data/team";
import Social from "../Others/Social";

const Team = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="max-w-[1296px] mx-auto pt-[65px] md:pt-[115px] pb-[70px] md:pb-[120px]">
        <div className="flex justify-center">
          <div className="max-w-[700px]  text-center mx-3 mb-28 md:mb-[136px] lg:mx-0">
            <h5 className="text-2xl font-semibold text-[#FF5349]">Team</h5>
            <h2 className="text-4xl md:text-[57px] font-bold leading-tight text-[#222] mt-2 mb-6">
              Meet Our Expert <span className="text-[#FF5349]">Team</span>
            </h2>
            <p className="text-base md:text-lg  text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              at eu tortor eget nam scelerisque ut tincidunt.
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col mx-3 md:mx-0 flex-wrap md:flex-row gap-x-6 gap-y-28 lg:gap-y-[138px]">
          {team.map((member) => (
            <div
              className="w-[280px] mx-auto md:mx-2 lg:mx-0 flex flex-col justify-center md:w-[306px] shadow-xl text-[#222] text-center md:px-14 bg-white rounded-lg"
              key={member.id}
            >
              <div className="-mt-20 mx-auto w-48 h-48 duration-500 hover:rounded-full border-4 rounded-full border-transparent hover:border-4 hover:border-[#FF5349]">
                <Image
                  className="rounded-full "
                  src={member.img}
                  height={200}
                  width={200}
                  alt="team"
                />
              </div>
              <h5 className="text-2xl font-semibold mb-2 mt-4">
                {member.name}
              </h5>
              <p className="text-lg mb-6 md:mb-9">{member.title}</p>
              <div className="mb-10 md:mb-[60px]">
                <Social classes="text-[#3D3D3D]" size="35" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
