import About from "../../components/About/About";
import Banner from "../../components/About/Banner";
import Team from "../../components/About/Team";
import Clients from "../../components/about/ClientsLove";
import Testimonial from "../../components/homepage/testimonial/Testimonial";

const index = () => {
  return (
    <>
      <Banner />
      <About />
      <Team />
      <Testimonial />
      <Clients />
    </>
  );
};

export default index;
