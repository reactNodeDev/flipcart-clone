import { memo } from "react";
import { CategoryButton } from "..";
// import { motion } from "framer-motion";

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
    <div>
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
