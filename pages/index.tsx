import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import PropertiesByAreaImagesSection from "../components/properties-by-area-images-section";
import HeroSection from "../components/hero-section";
import PropertiesByArea from "../components/properties-by-area";
import RentForm from "../components/rent-form";
import LatestPropertiesOfRent from "../components/latest-properties-of-rent";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";

const LandingPage: NextPage = () => {
  return (
    <main className="relative bg-white w-full flex flex-col items-center justify-start">
      <Header />
      <PropertiesByAreaImagesSection />
      <HeroSection />
      <PropertiesByArea />
      <RentForm />
      <LatestPropertiesOfRent />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default LandingPage;
