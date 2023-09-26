interface ICategoryButton {
  name: string;
  willExit?: boolean;
  textClassname? : string
}

const CategoryButton: React.FC<ICategoryButton> = ({ name, textClassname }) => {
  return (
    <button
      className={`flex flex-grow justify-center items-center w-auto min-w-[3rem] col-span-6 lg:col-span-3 drop-shadow-md shadow-[rgba(0,0,0,0.4)] shadow-inner p-2
      `}
    >
      <div className="py-3"></div>
      <p className={`${textClassname ? textClassname : 'text-xs'} font-semibold`}>{name}</p>
    </button>
  );
};

export default CategoryButton;
