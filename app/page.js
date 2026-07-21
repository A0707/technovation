import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Brands from "@/components/Brands";
import Products from "@/components/Products";
import Solutions from "@/components/Solutions";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Categories />
        <Brands />
        <Products />
        <Solutions />
        <Stats />
        <WhyUs />
        <Newsletter />
      </main>
      <Footer />
      <div className="lg:hidden h-16" />
    </>
  );
}
