import AboutSection from "@/components/AboutSection";
import AdminSection from "@/components/AdminSection";
import AppSection from "@/components/AppSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VendorSection from "@/components/VendorSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppSection />
        <VendorSection />
        <AdminSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
