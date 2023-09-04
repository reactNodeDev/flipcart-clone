import { memo } from "react";
import { CategoryButton } from "..";

interface ICategoriesContainer {
  dataArray: string[];
  categoryName: string;
  headingClassname?: string;
}

const CategoriesContainer = ({
  dataArray,
  categoryName,
  headingClassname,
}: ICategoriesContainer) => {
  return (
    <div className="my-3">
      <h5 className={`${headingClassname} mb-2 font-semibold text-xl`}>
        {categoryName}
      </h5>
      <div className="grid grid-cols-12 items-center gap-3">
        {dataArray?.map((category: string) => {
          return <CategoryButton key={category} name={category?.toUpperCase()} />;
        })}
      </div>
    </div>
  );
};

export default memo(CategoriesContainer);
