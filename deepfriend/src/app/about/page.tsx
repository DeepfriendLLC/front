import AboutBannerComponent from "@/components/about-banner";
import AboutProperties0Component from "@/components/about-properties-0";
import AboutProperties1Component from "@/components/about-properties-1";

export default function About() {
  return (
    <div className="basic-container">
      <AboutBannerComponent />
      <AboutProperties0Component />
      <AboutProperties1Component />
    </div>
  );
}
