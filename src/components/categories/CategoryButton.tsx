interface ICategoryButton {
  name: string;
  willExit?: boolean;
  textClassname?: string;
  className? : string;
  backgroundColor? : string
}

const CategoryButton: React.FC<ICategoryButton> = ({ name, textClassname, className }) => {
  return (
    <button className={`${className} min-h-[2rem] col-span-6 lg:col-span-3 rounded-md p-1 flex-grow lg:text-base `}>
      <p className={`${textClassname ? textClassname : "text-xs font-semibold text-white"}`}>{name}</p>
    </button>
  );
};

export default CategoryButton;
