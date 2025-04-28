import Title from "@/components/title";
import IntroSection from "@/components/restaurante/IntroSection";
import CarouselMiddleWitdh from "@/components/restaurante/CarouselCustomWitdh";
import OurServices from "@/components/restaurante/OurServices";
import Catering from "@/components/restaurante/Catering";

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <Title
        title="Restaurante"
        description="Te invitamos a disfrutar de una experiencia gastronómica única, donde el sabor, la calidad y el buen servicio se combinan para ofrecerte momentos inolvidables."
      />

      {/* IntroSection */}
      <IntroSection />

      {/* CarouselMiddleWitdh */}
      <CarouselMiddleWitdh />

      {/* OurServices */}
      <OurServices />

      {/* Catering */}
      <Catering />
    </main>
  );
}
