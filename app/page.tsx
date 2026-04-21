import AboutSection from "@/components/AboutSection";
import AdminSection from "@/components/AdminSection";
import AppSection from "@/components/AppSection";
import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/GetStartedSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TransformationSection from "@/components/TransformationSection";
import VendorSection from "@/components/VendorSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppSection />
        <TransformationSection />
        <HowItWorks />
        <FeaturesSection />
        <VendorSection />
        <AdminSection />
        <AboutSection />
        <GetStartedSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
