import Image from "next/image";
import Hero from "@/components/pagelements/HomeHero";
import Illustrations from "@/components/illustrations";
export default function Home() {
  return (
    <div className="relative flex max-h-screen w-full flex-grow flex-col items-center overflow-x-clip">
      <Illustrations />
      <Hero />
    </div>
  );
}
