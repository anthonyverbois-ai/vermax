import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tarifs from "@/components/Tarifs";
import Blanchisserie from "@/components/Blanchisserie";
import InstagramFeed from "@/components/InstagramFeed";
import Infos from "@/components/Infos";
import PermanencePMR from "@/components/PermanencePMR";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tarifs />
        <Blanchisserie />
        <Infos />
        <PermanencePMR />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}

