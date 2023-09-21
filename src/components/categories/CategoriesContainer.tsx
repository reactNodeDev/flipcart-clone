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
}: ICategoriesContainer) => {
  return (
    <motion.div
      variants={{ collapsed: { scale: 0.95 }, open: { scale: 1 } }}
      transition={{ duration: 0.5 }}
    >
      <div className="my-2">
        <h3 className={`${headingClassname} mb-2 font-semibold text-xl`}>
          {categoryName}
        </h3>
        <div className="grid grid-cols-12 items-center gap-3">
          {dataArray?.map((category: string) => {
            return (
              <CategoryButton key={category} name={category?.toUpperCase()} />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default memo(CategoriesContainerNew);
