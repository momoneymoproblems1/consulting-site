import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { CaseStudy } from "@/components/CaseStudy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Newsletter } from "@/components/Newsletter";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div id="top">
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <CaseStudy />
        <Pricing />
        <Testimonials />
        <Booking />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
