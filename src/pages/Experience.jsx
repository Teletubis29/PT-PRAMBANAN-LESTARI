import ExperienceSection from "../components/Experience/ExperienceSection";
import Categories from "../components/home/Categories";
import PortfolioSlider from "../components/Gallery/PortfolioSlider";
import HeroExperience from "../components/Experience/HeroExperience";
import ExperienceContent from "../components/Experience/ExperienceContent";


export default function Experience() {
  return (
    <div>
      <HeroExperience />
      <Categories />
      <ExperienceSection />
      <ExperienceContent/>
      <PortfolioSlider />

      {/* <PackageServices />  */}
      {/* <IntroExperience /> */}
    </div>
  );
}
