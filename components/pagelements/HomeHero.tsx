import MakeitLogo from "../Icons/MakeitLogo";
import Arrow from "../Icons/Arrow";
import Download from "../Icons/DownloadIcon";
import Link from "next/link";
import DownloadButton from "../vaul";
export default function Hero() {
  return (
    <main className="m-auto flex h-lvh flex-col gap-12 px-4 py-24 sm:h-auto sm:max-w-lg md:max-w-3xl lg:w-full">
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
      <div className="flex h-full flex-col gap-8 md:max-w-md">
        <p className="text-md flex-grow sm:text-lg md:text-xl">
          Get everyone on board - your team, your users and our squad - for a
          4-hour jam to tackle a real-life problem, creating a prototype that
          can be tested with your customers right away.
        </p>
        <div className="h-full" />
        <div className="flex flex-col gap-8">
          {/* <p>
            Our website is still coming soon but if you’d like to know more,
            download the PDF below or get in touch.
          </p> */}
          <div className=" flex flex-col gap-4 md:flex-row">
            {/* <Link
              href="/Makeit-by-Designit.pdf"
              download="Makeit - By Designit"
              className="flex items-center justify-center gap-0.5 rounded-full border py-2.5 pl-4 pr-3 backdrop-blur-sm transition-all hover:bg-white hover:text-black"
            >
              Download PDF
              <span>
                <Download />
              </span>
            </Link> */}
            <Link
              href="mailto:joff.outlaw@designit.com?subject=Makeit%20by%20Designit:"
              className="flex items-center justify-center gap-0.5 rounded-full border py-2.5 pl-4 pr-3 transition-all hover:bg-white hover:text-black"
            >
              Get in touch
              <span>
                <Arrow />
              </span>
            </Link>
            {/* <DownloadButton /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
