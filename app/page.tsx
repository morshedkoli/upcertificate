import HeroSection from "@/components/HeroSection";
import Feature from "@/components/Feature";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="w-8/12">
          <HeroSection />
          <Feature />
          <Pricing />
        </div>
      </div>
    </>
  );
}
