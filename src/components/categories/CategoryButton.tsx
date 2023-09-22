import { motion } from "framer-motion";
interface ICategoryButton {
  name: string;
}

const CategoryButton = ({ name }: ICategoryButton) => {
  return (
    <motion.button
      initial={{scaleY:0}}
      animate={{scaleY:1}}
      exit={{scaleY:0}}
      className={`py-4 pr-4 p-2  border-2 border-b-slate-300 w-auto min-w-[3rem] col-span-6 lg:col-span-3 drop-shadow-lg shadow-inner content-center`}
      onClick={() => {
        console.log("clicked");
      }}
    >
      <p className="text-xs font-semibold">{name}</p>
    </motion.button>
  );
};

export default CategoryButton;
