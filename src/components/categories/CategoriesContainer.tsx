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
      transition: {
        delay:1,
        delayChildren:2,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        delay:1,
        delayChildren: 2,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <motion.div
      variants={menuContainerParentVariants}
      initial='initial'
      animate='animate'
      exit={'initial'}
      className="origin-bottom"
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
