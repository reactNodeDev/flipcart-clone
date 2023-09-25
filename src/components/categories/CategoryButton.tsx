interface ICategoryButton {
  name: string;
  willExit?: boolean;
}

const CategoryButton = ({ name }: ICategoryButton) => {
  return (
    <button
      className={`flex justify-center items-center w-auto min-w-[3rem] border-[.5px] border-zinc-800 col-span-6 lg:col-span-3  drop-shadow-lg shadow-inner`}
    >
      <div className=" py-3"></div>
      <p className="text-xs font-semibold">{name}</p>
    </button>
  );
};

export default CategoryButton;
