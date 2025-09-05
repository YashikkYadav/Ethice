import HeroSection from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import AboutUs from "@/components/AboutUs";
import FocusCards from "@/components/FocusCards";
import InsightsPage from "@/components/InsightCard";
import HeroDupe from "@/components/HeroDupe";
import ConsultationForm from "@/components/ConsultationForm";
import SolutionsTabs from "@/components/SolutionsTabs";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <HeroDupe />
      <AboutUs />
      <FocusCards />
      <SolutionsTabs />
      <InsightsPage />
      <ConsultationForm />
      <Testimonials />
    </>
  );
}
