import Navbar          from "@/components/layout/Navbar";
import Footer          from "@/components/layout/Footer";
import Hero            from "@/components/sections/Hero";
import Stats           from "@/components/sections/Stats";
import Pillars         from "@/components/sections/Pillars";
import FeaturedArticle from "@/components/sections/FeaturedArticle";
import Pathologies     from "@/components/sections/Pathologies";
import Trust           from "@/components/sections/Trust";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <Pillars />
        <FeaturedArticle />
        <Pathologies />
        <Trust />
      </main>
      <Footer />
    </>
  );
}
