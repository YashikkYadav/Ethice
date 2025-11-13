import HeroSection from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import AboutUs from "@/components/AboutUs";
import FocusCards from "@/components/FocusCards";
import InsightsPage from "@/components/InsightCard";
import HeroDupe from "@/components/HeroDupe";
import ConsultationForm from "@/components/ConsultationForm";
import SolutionsTabs from "@/components/SolutionsTabs";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ethice Capital</title>
        <meta
          name="description"
          content="Ethice Capital is a pioneering investment firm dedicated to ethical and sustainable investing. We focus on creating positive social and environmental impact while delivering strong financial returns for our clients."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <WhatWeDo />
      <HeroDupe />
      {/* <AboutUs /> */}
      {/* <FocusCards /> */}
      {/* <SolutionsTabs /> */}
      {/* <InsightsPage /> */}
      <ConsultationForm />
      {/* <Testimonials /> */}
    </>
  );
}
