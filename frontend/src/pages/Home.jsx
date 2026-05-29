import { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureCollection from "@/components/SignatureCollection";
import FoodShowcase from "@/components/FoodShowcase";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import RestaurantIdentity from "@/components/RestaurantIdentity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <div className="relative" data-testid="home-page">
      <Loader onComplete={() => setReady(true)} />
      <Navbar ready={ready} />
      <main>
        <Hero ready={ready} />
        <SignatureCollection />
        <FoodShowcase />
        <Story />
        <Gallery />
        <Reviews />
        <RestaurantIdentity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
