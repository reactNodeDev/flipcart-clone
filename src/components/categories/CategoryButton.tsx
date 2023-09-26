interface ICategoryButton {
  name: string;
  willExit?: boolean;
  textClassname? : string
}

const CategoryButton: React.FC<ICategoryButton> = ({ name, textClassname }) => {
  return (
    <button
      className={`flex flex-grow justify-center items-center w-auto min-w-[3rem] border-[0.1px]  border-gray-300 col-span-6 lg:col-span-3 drop-shadow-lg  shadow-inner p-3`}
    >
      <div className="py-3"></div>
      <p className={`${textClassname ? textClassname : 'text-xs'} font-semibold`}>{name}</p>
    </button>
  );
};

export default CategoryButton;
