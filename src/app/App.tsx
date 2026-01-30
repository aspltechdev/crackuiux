import { Hero } from "./components/Hero";
import { CoachIntro } from "./components/CoachIntro";
import { WorkshopDetails } from "./components/WorkshopDetails";
import { VideoSection } from "./components/VideoSection";
import { CareerTransformation } from "./components/CareerTransformation";
import { WhoCanJoin } from "./components/WhoCanJoin";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <CoachIntro />
      <WorkshopDetails />
      <VideoSection />
      <CareerTransformation />
      <WhoCanJoin />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}