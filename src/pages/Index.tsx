import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Warranty from "@/components/Warranty";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Pricing />
        <Warranty />
        <Locations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
