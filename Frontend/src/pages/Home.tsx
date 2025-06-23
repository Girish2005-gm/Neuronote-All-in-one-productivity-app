// src/pages/Home.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import { Howwork } from "../components/Howwork";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureGrid/>
      <Howwork/>
      <CTA/>
      <Footer/>
      {/* Add FeatureGrid, HowItWorks, CTA, Footer here */}
    </div>
  );
}

export default Home;
