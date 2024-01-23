import Image from "next/image";
import Hero from "@/components/HomeHero";
export default function Home() {
  return (
    <div className="w-full max-h-screen flex-grow flex flex-col items-center">
      <Hero />
    </div>
  );
}
