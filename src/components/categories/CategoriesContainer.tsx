import { memo } from "react";
import { CategoryButton } from "..";
import { Variants, motion } from "framer-motion";

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

  const menuContainerParentVariants: Variants = {
    initial: {
      opacity: 0,
      scaleY:0
    },
    animate: {
      scaleY:1,
      opacity: 1,
      transition: {
        duration: 0.3,
        delayChildren: 0.1,
      },
    },
    exit: {
      scaleY:0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div variants={menuContainerParentVariants} initial='initial' animate='animate' exit='exit' className="my-2 origin-top">
      <motion.h3 variants={menuContainerParentVariants} className={`${headingClassname} mb-2 font-semibold text-xl`}>
        {categoryName}
      </motion.h3>
      <motion.div
        variants={menuContainerParentVariants}
        className="grid grid-cols-12 items-center gap-3"
      >
        {dataArray?.map((category: string) => {
          return (
            <CategoryButton key={category} name={category?.toUpperCase()} />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default memo(CategoriesContainerNew);
