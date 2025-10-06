import HeroArchitect from "../components/Architect/HeroArchitect";
import PackageServices from "../components/Architect/PackageServices";
import Categories from "../components/home/Categories";
import IntroArchitect from "../components/Architect/IntroArchitect";
import ArchitectGuidelines from "../components/Architect/ArchitectGuidelines";  
import ServicesDropdown from "../components/Architect/ServicesDropdown";

export default function Experience() {
  return (
    <div>
      <HeroArchitect /> 
      <Categories />
      <PackageServices />
      <IntroArchitect />    
      <ArchitectGuidelines />
      <ServicesDropdown />
    </div>
  );
}
