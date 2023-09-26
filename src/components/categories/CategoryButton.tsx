interface ICategoryButton {
  name: string;
  willExit?: boolean;
  textClassname? : string
}

const CategoryButton: React.FC<ICategoryButton> = ({ name, textClassname }) => {
  return (
    <button
    className="min-h-[2rem] flex-grow col-span-6 lg:col-span-3 rounded-md p-1 min-w-[3rem] lg:text-base bg-gray-900 text-white"
    >
      <p className={`${textClassname ? textClassname : 'text-xs'}`}>{name}</p>
    </button>
  );
};

export default CategoryButton;
