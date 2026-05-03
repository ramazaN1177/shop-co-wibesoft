import MainComponent from "@/components/mainPageComponent/MainComponent";
import Banner from "@/components/banner/Banner";
import Slider from "@/components/slider/Slider";
import DressStyleComponent from "@/components/dressStyleComponent/DressStyleComponent";
import CommentSection from "@/components/comments/CommentSection";

export default function ProductListScreen() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <Banner />
      <Slider />
      <div className="max-w-[1240px] mx-auto w-full px-4 md:px-16 flex flex-col gap-8">
        <MainComponent />
        <DressStyleComponent />
        <CommentSection />
      </div>
    </main>
  );
}

