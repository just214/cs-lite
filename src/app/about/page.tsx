import { AboutSection } from "./AboutSection";
import { PhotosSection } from "./PhotosSection";
import { VideosSection } from "./VideosSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Page() {
  return (
    <div className="w-full grid grid-cols-8 gap-8 auto-row-fr">
      <AboutSection />
      <div className="col-span-8 lg:col-span-5 flex flex-col gap-6">
        <VideosSection />
        <PhotosSection />
      </div>
    </div>
  );
}
