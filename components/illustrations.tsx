import LightBulbIcon from "./Icons/Light";
import CodeIcon from "./Icons/code";
import FaceIcon from "./Icons/face";
export default function Illustrations() {
  return (
    <div className="absolute -z-10 m-0 flex flex-col items-center gap-16 p-16">
      <div className=" translate-x-[36rem]">
        <CodeIcon className="max-h-full max-w-full scale-150" />
      </div>
      <div className="-translate-x-[30rem] scale-110">
        <FaceIcon className="" />
      </div>
      <div className="translate-x-[24rem]">
        <LightBulbIcon className="h-auto w-36" />
      </div>
    </div>
  );
}
