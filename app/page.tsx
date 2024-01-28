import Image from "next/image";
import Hero from "@/components/pagelements/HomeHero";
import Illustrations from "@/components/illustrations";
import { HowItWorksTable, HowItWorksItem } from "@/components/HowitWorks";
import SignUp from "@/components/signup-form";
import Globe from "@/components/Icons/globe";
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
            whiteboard our your problem with the goal of building something
            testable in four hours.
          </p>
        </div>
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
        <Globe />
        <div className="sm:max-w-lg md:max-w-3xl lg:w-full">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
