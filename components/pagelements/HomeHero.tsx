import MakeitLogo from "../Icons/MakeitLogo";
import Arrow from "../Icons/Arrow";
import Download from "../Icons/DownloadIcon";
import Link from "next/link";
import DownloadButton from "../vaul";
export default function Hero() {
  return (
    <div className="max-vh-lvh flex flex-col gap-12 py-24">
      <h1 className="flex flex-col gap-0 text-3xl md:gap-0.5 md:text-4xl lg:gap-2 lg:text-6xl">
        <div className="relative">
          <div className="w-2/3">
            <MakeitLogo
              aria-hidden="true"
              className="h-auto max-h-full shadow-2xl"
            />
          </div>
          <div
            style={{
              background:
                "radial-gradient(46.94% 46.94% at 50% 50%, rgba(50, 50, 224, 0.37) 0%, rgba(50, 50, 224, 0.00) 100%)",
            }}
            className="absolute left-1/3 top-1/2 z-[-1] h-[300px] w-[1500px] -translate-x-1/2 -translate-y-1/2 rotate-[1.18deg] transform rounded-[20%]"
          />
        </div>
        <span className="sr-only relative">Makeit</span>
        <div className="flex justify-end">
          <span>— by Designit</span>
        </div>
      </h1>
      <div className="flex h-full w-full flex-col gap-8 ">
        <p className="flex-grow text-lg md:max-w-md md:text-xl">
          Get everyone on board - your team, your users and our squad - for a
          4-hour jam to tackle a real-life problem, creating a prototype that
          can be tested with your customers right away.
        </p>
        <div className="h-full" />
        <div className="flex w-full justify-center">
          <Link
            scroll={true}
            className="flex flex-grow items-center justify-center gap-2 rounded-full bg-logo-blue text-lg transition-all  hover:bg-white hover:text-black sm:flex-grow-0 px-6 py-3"
            href="#signup-form"
          >
            Submit challenge
            <span>
              <Arrow className="mr-1 rotate-90" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
