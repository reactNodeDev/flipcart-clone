import { Variants, motion } from "framer-motion";
interface ICategoryButton {
  name: string;
}

const buttonVariants:Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const CategoryButton = ({ name }: ICategoryButton) => {
  return (
    <motion.button
      variants={buttonVariants}
      className={`py-4 pr-4 p-2  border-2 border-b-slate-300 w-auto min-w-[3rem] col-span-6 lg:col-span-3 drop-shadow-lg shadow-inner content-center`}
    >
      <p className="text-xs font-semibold">{name}</p>
    </motion.button>
  );
};

export default CategoryButton;
