import Hero from "@/components/home/Hero";
import Offers from "@/components/home/Offers";
import Portfolio from "@/components/home/Portfolio";
import Ready from "@/components/home/Ready";
import Testimonials from "@/components/home/Testimonials";

const page = () => {
  return (
    <div className="">
      <Hero />
      <Offers />
      <Portfolio />
      <Testimonials />
      <Ready />
    </div>
  );
};

export default page;
