import Image from "next/image";
import fs from "fs";
import path from "path";
import { cn } from "@/lib/utils";

type ImageType = {
  src?: any;
  key?: any;
};

export default function ImageCarousel() {
  // Get the images from the public/carousel directory
  const imagesDirectory = path.join(process.cwd(), "public", "carousel");
  const imageNames = fs.readdirSync(imagesDirectory);

  // Create an array of image objects
  const images: ImageType[] = imageNames
    .filter((name) => !name.includes(".DS_Store"))
    .map((name, index) => ({
      src: `/carousel/${name}`,
      key: index,
    }));
  console.log(images);
  return (
    <div className="relative">
      <div className="flex animate-marquee gap-10">
        {images
          .sort(() => Math.random() - 0.5)
          .map(({ src, key }: ImageType) => {
            return (
              <div
                className={`flex w-[20rem]  items-center justify-center`}
                key={key}
              >
                <div className="flex translate-y-[] overflow-clip rounded-xl">
                  <Image
                    src={src}
                    className={cn(``)}
                    alt={key}
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            );
          })}
      </div>
      <div className="absolute top-0 flex animate-marquee2 gap-10">
        {images
          .sort(() => Math.random() - 0.5)
          .map(({ src, key }: ImageType) => {
            return (
              <div
                className={`flex w-[20rem]  items-center justify-center`}
                key={key}
              >
                <div className="flex translate-y-[] overflow-clip rounded-xl">
                  <Image
                    src={src}
                    className={cn(``)}
                    alt={key}
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
