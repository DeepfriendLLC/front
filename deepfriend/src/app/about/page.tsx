import AboutProperties0Component from "@/components/about/about-properties-0";
import { AboutBannerComponent } from "@/components/banner/banners";
import MissionAndValuesComponent from "@/components/home/missionAndValues/mission-and-values";

export default function About() {
  return (
    <div style={{ flex: 1 }}>
      <AboutBannerComponent />
      <MissionAndValuesComponent />
    </div>
  );
}
