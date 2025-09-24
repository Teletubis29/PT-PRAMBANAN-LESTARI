import AboutUs from "../components/About/AboutUs";
import ClientAbout from "../components/About/ClientAbout";
import HeroAbout from "../components/About/HeroAbout";
import PortoAbout from "../components/About/PortoAbout";
import SolutionAbout from "../components/About/SolutionAbout";
import SuperiorityAbout from "../components/About/superiorityAbout";
import TrustAbout from "../components/About/TrustAbout";


export default function About() {
  return (
    <div>
      <HeroAbout />
      <AboutUs />
      <SolutionAbout />
      <SuperiorityAbout />
      <TrustAbout/>
      <PortoAbout/>
      <ClientAbout/>
    </div>
  );
}
