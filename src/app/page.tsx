import Hero from "@/components/Hero";
//import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
//import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Location from "@/components/Location";
import Team from "@/components/Team";
//import Payments from "@/components/Payments";
//import NewsCarousel from "@/components/News";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        {/*<Benefits />*/}
        {/*<Pricing />*/}
        {/*<Payments /> */}
        <Team />
        <FAQ />
        <Location />
      </Container>
    </>
  );
};

export default HomePage;
