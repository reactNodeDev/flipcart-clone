import { memo } from "react";
import { CategoryButton } from "..";

interface ICategoriesContainer {
  dataArray: string[]|undefined;
  categoryName: string | undefined;
  headingClassname?: string;
  initialAnimation?: false;
  willExit?: boolean;
  layoutDependency?: any;
}

const CategoriesContainer = ({
  dataArray,
  categoryName,
  headingClassname,
}: ICategoriesContainer) => {

  return (
    <>
      <h3 className={`${headingClassname} my-2 font-semibold text-emerald-950 text-xl `}>
        {categoryName}
      </h3>
      <div className="grid grid-cols-12 items-center gap-3">
        {dataArray?.map((category: string) => {
          return (
            <CategoryButton key={category} name={category?.toUpperCase()} className=" bg-slate-200" textClassname="text-gray-950 text-xs font-semibold" />
          );
        })}
      </div>
    </>
  );
};

export default memo(CategoriesContainer);
