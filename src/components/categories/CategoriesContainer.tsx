import { memo } from "react";
import { CategoryButton } from "..";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

interface ICategoriesContainer {
  dataArray: string[];
  categoryName: string;
  headingClassname?: string;
  initialAnimation?: false;
  willExit: boolean;
  layoutDependency?: any;
}

const CategoriesContainerNew = ({
  dataArray,
  categoryName,
  headingClassname,
  willExit,
}: ICategoriesContainer) => {
      const [ref, {height}]  = useMeasure()
  return (
    <motion.li
      layout
      key={categoryName}
      initial={willExit ? { opacity: 0} : false}
      animate={{
        opacity: 1,
      }}
      // exit={willExit ? { opacity: 1} : { opacity: 1 }}
      exit={willExit ? { opacity: 0 }:{ opacity: 1 }}
      transition={{
        duration:.3,
      }}
    >
      <div ref={ref} className="">
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
    </motion.li>
  );
};

export default memo(CategoriesContainerNew);
