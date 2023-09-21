import { memo } from "react";
import { CategoryButton } from "..";
import { motion } from "framer-motion";

interface ICategoriesContainer {
  dataArray: string[];
  categoryName: string;
  headingClassname?: string;
  initialAnimation?: false;
  willExit?: boolean;
  layoutDependency?: any;
}

const CategoriesContainerNew = ({
  dataArray,
  categoryName,
  headingClassname,
}: 
ICategoriesContainer) => {
  return (
    <motion.li>
      <motion.h3 className={`${headingClassname} mb-2 font-semibold text-xl`}>
        {categoryName}
      </motion.h3>
      <motion.div className="grid grid-cols-12 items-center gap-3">
        {dataArray?.map((category: string) => {
          return (
            <CategoryButton key={category} name={category?.toUpperCase()} />
          );
        })}
      </motion.div>
    </motion.li>
  );
};

export default memo(CategoriesContainerNew);
