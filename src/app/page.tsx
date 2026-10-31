import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tarifs from "@/components/Tarifs";
import Blanchisserie from "@/components/Blanchisserie";
import GalleryCarousel from "@/components/GalleryCarousel";
import InstagramFeed from "@/components/InstagramFeed";
import Infos from "@/components/Infos";
import PermanencePMR from "@/components/PermanencePMR";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* overflow-x-clip : les bulles qui dépassent sur les côtés ne créent pas de défilement horizontal */}
      <main className="overflow-x-clip">
        <Hero />
        <Tarifs />
        <Blanchisserie />
        <GalleryCarousel />
        <Infos />
        <PermanencePMR />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}

