import * as React from "react";
import Image from "next/image";
const FaceIcon = ({ className }: { className: string }) => (
  <Image
    alt="user-groups-icon"
    width={162}
    height={159}
    src="/iconsvgs/usergroup.svg"
    className={className}
  />
);

export default FaceIcon;
