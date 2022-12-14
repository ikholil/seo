import CountUp from "react-countup";
import { bannerStates } from "../../../data/bannerstate";
import Image from "next/image";
import { features } from "../../../data/featurs";
import AnimatedLink from "../../Others/AnimatedLink";
import { AnimatePresence, motion } from 'framer-motion'

const GrowTraffic = () => {
  return (
    <section className="bg-white  relative">
      <div className="lg:-translate-y-1/2 px-1 max-w-[1077px] mx-auto">
        <div className="flex gap-5 mx-2 xl:mx-0 md:gap-0 flex-wrap px-3 bg-white justify-around  md:my-0 rounded-none md:rounded-lg shadow-lg pt-8 pb-9">
          {bannerStates.map((item, index) => (
            <div className="flex flex-col items-center" key={item.title}>
              <h4 className="text-[var(--color-primary)] heading-4 mb-1">
                <CountUp end={item.number} />
                {index == 0 && <span className="text-[var(--color-primary)]">+</span>}
              </h4>
              <p className="paragraph-default">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1296px] mx-3 xl:mx-auto flex flex-col lg:flex-row mt-[70px] md:mt-[43px] pb-10 md:pb-[60px]">
        <motion.div initial={{ translateY: '20px', opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: .5 }} className="max-w-[640px]">
          <h5 className="heading-5 text-[var(--color-primary)]">
            Organic Traffic
          </h5>
          <h2 className="heading-2 text-[#222] mt-1 md:mt-3 mb-2">
            Grow Your Organic <span className="text-[var(--color-primary)]">Website </span>
            Traffic{" "}
          </h2>
          <p className="paragraph-default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            mattis dui eget vestibulum id et. It’s about ranking
          </p>
        </motion.div>
        <div className="flex md:justify-end md:items-end w-full mt-5 md:mt-0">
          <AnimatedLink
            link="/service"
            name="Browse More"
            classes="paragraph-default"
          />
        </div>
      </div>
      <AnimatePresence>
        <div className="max-w-[1296px]  mx-3 flex flex-col md:flex-row flex-wrap gap-6 justify-center lg:mx-auto pb-[70px] md:pb-[120px]">
          {features.map((feature, i) => (
            <motion.div initial={{ scale: .6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: .5, delay: 0.2 * i, type:'just' }}
              className={`md:w-[414px] text-[#222] p-5 md:pt-[30px] md:px-[30px] md:pb-[26px] duration-300 hover:shadow-xl  relative rounded-lg ${feature.id == 1 && "bg-[#FFEEED]"
                } ${feature.id == 2 && "bg-[#E9EEF9]"} ${feature.id == 3 && "bg-[#FFF5E6]"
                } `}
              key={feature.id}
            >
              <Image src={feature.icon} height={88} width={88} alt="icon" />
              <h4 className="text-[#222] heading-4 mt-2 md:mt-[14px] mb-[10px]">
                {feature.title}
              </h4>
              <p className="paragraph-default relative z-10">{feature.desc}</p>
              <div className="absolute -bottom-2 right-0 z-0">
                <Image src={feature.bg} height={110} width={140} alt="bg icon" />
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>


      <div className="absolute hidden lg:block top-44 right-0">
        <Image
          src="/images/grow/circle.png"
          height={306}
          width={150}
          alt="banner shape"
        />
      </div>
    </section>
  );
};

export default GrowTraffic;
