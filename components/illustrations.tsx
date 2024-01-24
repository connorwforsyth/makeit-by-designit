import LightBulbIcon from "./Icons/Light";
import CodeIcon from "./Icons/code";
import FaceIcon from "./Icons/face";
export default function Illustrations() {
  return (
    <div className="absolute -z-10 m-0 hidden flex-col items-center gap-16 p-16 md:flex">
      <div className="relative left-[10rem] top-[-8rem] scale-[33%] md:left-[30rem] md:top-[-1rem] md:scale-75 lg:scale-100">
        <CodeIcon className="" />
      </div>
      <div className="relative -top-10 left-[-10rem] scale-[25%] md:-top-0 md:left-[-32rem] md:flex md:scale-[90%] lg:left-[-36rem]">
        <FaceIcon className="" />
      </div>
      <div className="relative left-[10rem] top-[2rem] scale-[33%] md:left-[16rem] md:top-[-4rem] md:scale-75 lg:left-[24rem] lg:scale-[90%]">
        <LightBulbIcon className="h-auto w-36" />
      </div>
    </div>
  );
}
