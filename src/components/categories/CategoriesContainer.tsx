import { memo } from "react";
import { CategoryButton } from "..";
import { motion } from "framer-motion";

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

  return (
    <motion.li
      layout='preserve-aspect'
      key={categoryName}
      initial={willExit ? { opacity: 0, height:0} : false}
      animate={{
        opacity: 1,
        height:'auto'
      }}
      exit={willExit ? { opacity: 0, height:0} : { opacity: 1 }}
      transition={{
        duration:.2,
      }}
    >
      <div className="">
        <motion.h3 layout className={`${headingClassname} mb-2 font-semibold text-xl`}>
          {categoryName}
        </motion.h3>
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
