import MainComponent from "@/components/mainPageComponent/MainComponent";
import Banner from "@/components/banner/Banner";
import Slider from "@/components/slider/Slider";
import DressStyleComponent from "@/components/dressStyleComponent/DressStyleComponent";

export default function ProductListScreen() {
  return (
    <>
      <Banner />
      <Slider />
      <MainComponent />
      <DressStyleComponent />
    </>
  );
}
