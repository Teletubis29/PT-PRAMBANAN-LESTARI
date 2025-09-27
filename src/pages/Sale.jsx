import HeroSale from "../components/Sale/HeroSale";
import Categories from "../components/home/Categories";
import Products from "../components/Sale/Products";
import SectionSale from "../components/Sale/SectionSale";
import RecentSale from "../components/Sale/RecentSale";

export default function Sale() {
  return <div>
    <HeroSale />
    <Categories />
    <Products />
    <SectionSale/>
    {/* <RecentSale/> */}
  </div>;
}
