import { memo } from "react";
import { CategoryButton } from "..";
// import {Variants,motion } from "framer-motion";

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
  // willExit = true,
}: ICategoriesContainer) => {
  // const menuContainerParentVariants: Variants = willExit
  //   ? {
  //       initial: {
  //         opacity: 0,
  //       },
  //       animate: {
  //         opacity: 1,
  //         transition: {
  //           duration: 0.3,
  //         },
  //       },
  //       exit: {
  //         opacity: 0,
  //         transition: {
  //           duration: 0.3,
  //         },
  //       },
  //     }
  //   : {};

  return (
    <div
      // variants={menuContainerParentVariants}
      // initial={willExit ? "initial" : false}
      // animate="animate"
      // exit="exit"
      className="my-2 origin-top overflow-hidden"
    >
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
  );
};

export default memo(CategoriesContainerNew);
