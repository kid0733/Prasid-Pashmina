
import AboutSection from "./AboutSection/AboutSection";
import Accordion from "./Accordion/Accordion";
import CraftSection from "./CraftSection/CraftSection";
import FAQ from "./FAQ/FAQ";
import HeroSection from "./Hero/HeroSection";
import Navbar from "./Navbar/NavBar";
import ProductGrid from "./ProductCard/ProductGrid";
import ScrollCard from "./ScrollCard/ScrollCard";
import HeroText from "./SectionText/HeroText";
import Footer from './Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ScrollCard />
      <CraftSection />

      {/* TOP Sellers */}
      <HeroText
        backgroundText="HERITAGE"
        foregroundText="A TIMELESS MASTERPIECE"
        subText="Exquisite Bespoke Pashmina"
      />
      <ProductGrid />
      {/* ACCORDION */}
      <div className=" h-fulls bg-purple-200">
        <HeroText
          backgroundText="HERITAGE"
          foregroundText="A TIMELESS MASTERPIECE"
          subText="Exquisite Bespoke Pashmina"
          className=""
        />
        <Accordion />
      </div>

      {/* Woven */}
      <HeroText
        backgroundText="HERITAGE"
        foregroundText="A TIMELESS MASTERPIECE"
        subText="Exquisite Bespoke Pashmina"
      />
      <ProductGrid />
      {/* Why US */}
      <div className="h-[100vh] bg-purple-200">
        <HeroText
          backgroundText="HERITAGE"
          foregroundText="A TIMELESS MASTERPIECE"
          subText="Exquisite Bespoke Pashmina"
          className=""
        />

        {/* Placeholder YouTube Video */}
        <div className="flex justify-center mt-8">
          <div className="w-[90vw]  aspect-w-16 aspect-h-9">
            <iframe
              className="w-[80vw] h-[60vh] rounded-lg mx-auto"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Kintted */}

      <HeroText
        backgroundText="HERITAGE"
        foregroundText="A TIMELESS MASTERPIECE"
        subText="Exquisite Bespoke Pashmina"
      />
      <ProductGrid />



      {/* FAQ */}
      <HeroText
        backgroundText="FAQ's"
        foregroundText="What you need to know"
        subText=" "
      />
      <FAQ/>
      <Footer />



      {/* APP END */}

    </div>
  );
}

export default App;
