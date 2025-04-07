import Header from "@/components/header";
import BookDates from "@/components/book-dates";
import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import Experience from "@/components/experience";
import Rooms from "@/components/rooms";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top Bar */}
      <Header />

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

      {/* Footer */}
      <Footer />
    </main>
  );
}
