import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Lightbox } from "@/components/Lightbox";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Studio — Cinematic Photography & Film" },
      {
        name: "description",
        content:
          "Award-winning photography & editing studio crafting cinematic wedding, fashion, drone and product imagery. Book your shoot today.",
      },
      { property: "og:title", content: "Lumière Studio — Cinematic Photography & Film" },
      {
        property: "og:description",
        content:
          "Award-winning photography & editing studio crafting cinematic wedding, fashion, drone and product imagery.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const open = (src: string, title: string) => setLightbox({ src, title });

  return (
    <div className="relative overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio onOpen={open} />
        <Pricing />
        <Reviews />
        <Gallery onOpen={open} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Lightbox
        src={lightbox?.src ?? null}
        title={lightbox?.title ?? ""}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
