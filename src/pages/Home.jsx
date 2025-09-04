import Hero from "../components/Home/Hero";
import Categories from "../components/home/Categories";
import About from "../components/home/About"; // Assuming you have an About component
import Features from "../components/home/Features"; // Assuming you have a Features component
import InfoSection from "../components/home/InfoSection"; // Assuming you have an InfoSection component
import PromoSection from "../components/home/PromoSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <About />
      <Features/>
      <InfoSection />
      <PromoSection/>
    </div>
  );
}
