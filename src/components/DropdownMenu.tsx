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
    <section
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={`${className} drop-shadow-xl p-2 space-y-3 mt-2 z-dropdownMenu`}
    >
      {menuItems.map((MenuItem: IDropdownMenuItem) => {
        return (
          <a key={MenuItem.text} className="cursor-pointer flex items-center w-full space-x-1">
            <MenuItem.Icon />
            <p>{MenuItem.text}</p>
          </a>
        );
      })}
    </section>
  );
};

export default DropdownMenu;
