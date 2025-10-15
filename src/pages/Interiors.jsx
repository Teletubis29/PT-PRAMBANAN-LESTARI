import Categories from "../components/home/Categories";
import HeroInteriors from "../components/Interiors/HeroInteriors";
import InteriorServices from "../components/Interiors/InteriorServices";
import PackageInteriors from "../components/Interiors/PackageInteriors";
import QuestionSection from "../components/Interiors/QuestionSection";

export default function Experience() {
  return (
    <div>
      <HeroInteriors />
      <Categories />
      <PackageInteriors />
      <QuestionSection />
      <InteriorServices />
    </div>
  );
}
