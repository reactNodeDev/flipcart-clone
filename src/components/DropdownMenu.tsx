import { IDropdownMenuItem } from "../utils";

type DropdownMenuProps = {
  menuItems: IDropdownMenuItem[];
  className?: string;
  onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseOut?: React.MouseEventHandler<HTMLButtonElement>;
};

const DropdownMenu = ({
  menuItems,
  className,
  onMouseOver,
  onMouseOut,
}: DropdownMenuProps) => {
  return (
    <button
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={`${className} drop-shadow-xl p-2 space-y-3 mt-2 z-[1000]`}
    >
      {menuItems.map((MenuItem: IDropdownMenuItem) => {
        return (
          <a className="cursor-pointer flex items-center w-full space-x-1">
            <MenuItem.Icon />
            <p>{MenuItem.text}</p>
          </a>
        );
      })}
    </button>
  );
};

export default DropdownMenu;
