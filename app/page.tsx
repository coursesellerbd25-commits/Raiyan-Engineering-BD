import Hero from "@/components/Hero";
import UpdateStrip from "@/components/UpdateStrip";
import Stats from "@/components/Stats";
import PresenceServices from "@/components/PresenceServices";
import LogoSlider from "@/components/LogoSlider";
import WhyChoose from "@/components/WhyChoose";
import ClientSlider from "@/components/ClientSlider";
import Gallery from "@/components/Gallery";
import ProductShowcase from "@/components/ProductShowcase";
import ProductShowcase2 from "@/components/ProductShowcase2";
import ProductShowcase3 from "@/components/ProductShowcase3";
import ProductShowcase4 from "@/components/ProductShowcase4";
import ProductShowcase5 from "@/components/ProductShowcase5";
import ViewAllProducts from "@/components/ViewAllProducts";
import OurStory from "@/components/OurStory";
import Collaborator from "@/components/Collaborator";
import Achievement from "@/components/Achievement";
import GraphContact from "@/components/GraphContact";
import SuccessGallary from "@/components/SuccessGallary";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <section id="home">
      <Hero />
    </section>
      <UpdateStrip />
      <Stats />
      <PresenceServices />
      <LogoSlider />
      <WhyChoose />
      <ClientSlider />
      <Gallery />
      <ProductShowcase />
      <ProductShowcase2 />
      <ProductShowcase3 />
      <ProductShowcase4 />
      <ProductShowcase5 />
      <ViewAllProducts />
      <OurStory />
      <Collaborator />
      <Achievement />
      <GraphContact />
      <SuccessGallary />
      <Footer />
    </>
  );
}