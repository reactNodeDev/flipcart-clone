
interface ICategoryButton {
  name: string;
  willExit?: boolean;
  textClassname?: string;
  className? : string;
  backgroundColor? : string;
  onClick? : React.MouseEventHandler<HTMLButtonElement>
  Icon? : React.ReactNode
}

const CategoryButton: React.FC<ICategoryButton> = ({ name, textClassname, className, onClick, Icon }) => {
  return (
    <button onClick={onClick} className={`${className} min-h-[2rem] col-span-6 lg:col-span-3 rounded-md p-1 flex-grow lg:text-base flex justify-center items-center gap-x-1`}>
      <p className={`${textClassname ? textClassname : "text-xs font-semibold text-white"}`}>{name}</p>
      {Icon && Icon}
    </button>
  );
};

export default CategoryButton;
