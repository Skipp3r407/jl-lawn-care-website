import AboutPreview from "@/components/AboutPreview";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import ServiceAreas from "@/components/ServiceAreas";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfterSection />
      <WhyChooseUs />
      <AboutPreview />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <CTASection />
      <ContactSection />
    </main>
  );
}
