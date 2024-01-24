import * as React from "react";
import Image from "next/image";
const LightBulbIcon = ({ className }: { className: string }) => (
  <Image
    alt="user-groups-icon"
    width={162}
    height={159}
    src="/iconsvgs/light.svg"
    className={className}
  />
);

export default LightBulbIcon;
