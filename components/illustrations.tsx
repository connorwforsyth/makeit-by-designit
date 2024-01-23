import LightBulbIcon from "./Icons/Light";
import CodeIcon from "./Icons/code";
import FaceIcon from "./Icons/face";
export default function Illustrations() {
  const iconSize = 32;

  return (
    <div className="absolute -z-10 flex h-full w-full scale-150 flex-col items-center gap-16 pt-32">
      <div className=" translate-x-96">
        <CodeIcon className="max-h-full max-w-full scale-150" />
      </div>
      <div className="-translate-x-full scale-110">
        <FaceIcon className="" />
      </div>
      <div className="translate-x-full scale-125">
        <LightBulbIcon className="" />
      </div>
    </div>
  );
}
