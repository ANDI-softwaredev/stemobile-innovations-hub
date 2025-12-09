import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import ImageShowcase from "@/components/ImageShowcase";
import Initiatives from "@/components/Initiatives";
import InnovatorsPortal from "@/components/InnovatorsPortal";
import Team from "@/components/Team";
import Donate from "@/components/Donate";
import Partnership from "@/components/Partnership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Programs />
      <ImageShowcase />
      <Initiatives />
      <InnovatorsPortal />
      <Team />
      <Donate />
      <Partnership />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
