import Image from "next/image";
import Hero from "@/components/HomeHero";
import Illustrations from "@/components/illustrations";
export default function Home() {
  return (
    <div className="flex max-h-screen w-full flex-grow flex-col items-center">
      <Hero />
    </div>
  );
}
