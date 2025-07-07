import Contact from "@/components/contact";
import HistoriaSection from "@/components/nosotros/historia";
import WhyUsSection from "@/components/nosotros/why-us";
import Title from "@/components/title";

export default function NosotrosPage() {
  return (
    <main className="">
      {/* Nosotros Header */}
      <Title title="NOSOTROS" description="Recepciones Trujillo" />

      {/* Historia Section */}
      <HistoriaSection />

      {/* Why Choose Us Section */}
      <WhyUsSection />

      {/* Contact Section - Same as homepage */}
      <Contact />
    </main>
  );
}
