import { memo } from "react";
import { CategoryButton } from "..";
import { motion } from "framer-motion";

interface ICategoriesContainer {
  dataArray: string[];
  categoryName: string;
  headingClassname?: string;
  initialAnimation?: false;
  willExit: boolean;
  layoutDependency? : any
}

const CategoriesContainer = ({
  dataArray,
  categoryName,
  headingClassname,
  willExit,
  layoutDependency
}: ICategoriesContainer) => {
  return (
    <motion.div
      layout
      layoutDependency={layoutDependency?layoutDependency:null}
      initial={willExit ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      exit={
        willExit ? { opacity: 0 } : { opacity: 1 }
      }
    >
      <div className="my-3">
        <h3 className={`${headingClassname} mb-2 font-semibold text-xl`}>
          {categoryName}
        </h3>
        <motion.div className="grid grid-cols-12 items-center gap-3">
          {dataArray?.map((category: string) => {
            return (
              <CategoryButton key={category} name={category?.toUpperCase()} />
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default memo(CategoriesContainer);
