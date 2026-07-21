import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Expertises from "@/components/Expertises";
import Products from "@/components/Products";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main">
        <Hero />
        <Advantages />
        <Expertises />
        <Products />
        <Partners />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
