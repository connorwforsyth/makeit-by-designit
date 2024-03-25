import Image from "next/image";
import Hero from "@/components/LandingPageElements/HomeHero";
import Illustrations from "@/components/illustrations";
import {
  HowItWorksTable,
  HowItWorksItem,
} from "@/components/LandingPageElements/HowitWorks";
import SignUp from "@/components/LandingPageElements/signup-form";
import Globe from "@/components/Icons/globe";
import ThreeBanner from "@/components/LandingPageElements/ThreeBanners";
import ImageCarousel from "@/components/LandingPageElements/ImageCarousel";
export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-grow flex-col items-center overflow-x-clip py-16">
      <Illustrations />
      {/* page-wrapper */}
      <div className="flex w-full flex-col items-center gap-12 p-4 md:px-12">
        {/* hero breakpoints */}
        <div className="sm:max-w-lg md:max-w-3xl lg:w-full">
          <Hero />
        </div>
        <div className="flex w-full flex-col justify-center gap-8 text-center sm:max-w-lg md:max-w-3xl lg:w-full">
          <h2 className="text-5xl">How it works</h2>
          <p className="text-lg">
            Call it a hackathon, design sprint, innovation sprint, strategy
            sprint. The main thing is that we get in a room together, and
            whiteboard out your problem with the goal of building something
            testable in four hours.
          </p>
        </div>
        <ThreeBanner />
        {/* table */}
        <div className="py-12">
          <HowItWorksTable>
            <HowItWorksItem
              no="1"
              title="Submit idea"
              description="Tell us what your idea or challenge is in the form below then jump on a  call with us so we can scope out the session with you."
            />
            <HowItWorksItem
              no="2"
              title="Prepare"
              description="Bring your team together and your customers to make sure we have the right people in the room for the session.

We suggest having a mix of subject matter experts, builders, executives, and wildcards to include include in the session. Sometimes those closest to the problem will benefit from others who have fresh eyes."
            />
            <HowItWorksItem
              no="3"
              title="Let’s Makeit!"
              description="Come to our studio in Surry Hills, Sydney or Melbourne CBD for a 4-hour session. Alternatively, we can also run these sessions from your workplace.

By the end of the session we’ll have created a testable prototype - this could take the form of concept cards, roleplay scripts, a journey map, marketing experiments, or value proposition statements and high-level features."
            />
            <HowItWorksItem
              no="4"
              title="Eat"
              description="A design session isn’t complete without a post design meal. Let’s eat some pizza!"
            />
          </HowItWorksTable>
        </div>
        <ImageCarousel />
        <div className="text-md mx-auto w-full max-w-2xl text-pretty">
          <h2 className="uppercase text-designit-gray">About Designit</h2>
          <p>
            Designit is a global innovation and design consultancy. We help some
            of the worlds most successful organisations improve the products and
            services. We bring strategy, design, and technology expertise
            together to create measurable, positive change for our clients’
            business.
            <br />
            <br />
            We believe in creative pragmatism. We Designit.
          </p>
        </div>
        <Globe />
        <div className="sm:max-w-lg md:max-w-3xl lg:w-full">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
