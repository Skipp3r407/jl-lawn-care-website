import AboutPreview from "@/components/AboutPreview";
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
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="bg-green-600 text-white p-10 rounded-2xl shadow-xl text-center">
            <h2 className="text-3xl font-bold">TEMP TAILWIND PROOF</h2>
            <p className="mt-3 text-lg text-green-50">If this card is bright green with white text, Tailwind is working.</p>
            <button className="mt-5 inline-flex items-center justify-center rounded-xl bg-white text-green-700 px-6 py-3 font-semibold shadow-md">
              Tailwind Button Test
            </button>
          </div>
        </div>
      </section>
      <TrustBar />
      <Services />
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
