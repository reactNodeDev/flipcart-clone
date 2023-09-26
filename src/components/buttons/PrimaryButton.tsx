import React from "react";
import { IconType } from "react-icons";

interface IPrimaryButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  Icon: IconType;
  className? : string
}

const PrimaryButton: React.FC<IPrimaryButton> = ({ onClick, text, Icon, className }) => {
  return (
    <button  onClick={onClick} className={className}>
      <div className=" p-2 mt-1 rounded-lg text-white bottom-2 flex items-center justify-center bg-primaryButtonBg space-x-2">
        <p>{text}</p>
        <Icon />
      </div>
    </button>
  );
};

export default PrimaryButton;
