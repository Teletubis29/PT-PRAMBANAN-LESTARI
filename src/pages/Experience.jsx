import Categories from "../components/home/Categories";
import HeroGallery from "../components/Gallery/HeroGallery";
import GallerySection from "../components/Gallery/GallerySection";
import GalleryContent from "../components/Gallery/GalleryContent";
import PortfolioSlider from "../components/Gallery/PortfolioSlider";
// import HeroExperience from "../components/Experience/HeroExperience";
// import IntroExperience from "../components/Experience/IntroExperience";
// import PackageServices from "../components/Experience/PackageServices";

export default function Experience() {
  return (
    <div>
      {/* <HeroExperience /> */}
      <HeroGallery />
      <Categories />
      <GallerySection />
      <GalleryContent />
      <PortfolioSlider />

      {/* <PackageServices />  */}
      {/* <IntroExperience /> */}
    </div>
  );
}
