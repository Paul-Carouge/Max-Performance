import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
