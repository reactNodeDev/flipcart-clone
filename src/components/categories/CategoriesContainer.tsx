import { memo } from "react";
import { CategoryButton } from "..";
import {motion} from 'framer-motion'

interface ICategoriesContainer {
  dataArray: string[];
  categoryName: string;
  headingClassname?: string;
  initialAnimation?:false
}

const CategoriesContainer = ({
  dataArray,
  categoryName,
  headingClassname,
  initialAnimation
}: ICategoriesContainer) => {

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <motion.div variants={parentVariants} initial={initialAnimation === false ? initialAnimation : 'hidden'} animate={'visible'} exit={initialAnimation === false ? {} : 'hidden'}>
      <div className="my-3">
      <motion.h3 >
        <h3 className={`${headingClassname} mb-2 font-semibold text-xl`}>
        {categoryName}
        </h3>
      </motion.h3>
      <motion.div className="grid grid-cols-12 items-center gap-3">
        {dataArray?.map((category: string) => {
          return <CategoryButton key={category} name={category?.toUpperCase()} />;
        })}
      </motion.div>
      </div>
    </motion.div>
  );
};

export default memo(CategoriesContainer);
