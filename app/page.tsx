import Banner from "@/components/home/Banner";
import BestSeller from "@/components/home/bestSection/BestSeller";
import Clients from "@/components/home/clients/Clients";
import OurMission from "@/components/home/our-mission/OurMission";
import Features from "@/components/home/Features/Features";
import Services from "@/components/home/services/Services";
import Reviews from "@/components/home/reviews/Reviews";

export default function Home() {
  return (
    <div>
      <Banner />
      <BestSeller />
      <OurMission />
      <Features />
      {/* <Clients /> */}
      <Reviews/>
      <Services />
    </div>
  );
}
