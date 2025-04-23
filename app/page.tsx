import BookDates from "@/components/book-dates";
import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import Experience from "@/components/experience";
import Rooms from "@/components/rooms";
import Contact from "@/components/contact";
import MetodosPago from "@/components/metodos-pago";

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <Hero />

      {/* Booking Form */}
      <BookDates />

      {/* About Us Section */}
      <AboutUs />

      {/* Experience Section */}
      <Experience />

      {/* Rooms Section */}
      <Rooms />

      {/* Contact Section */}
      <Contact />

      <MetodosPago />
    </main>
  );
}
