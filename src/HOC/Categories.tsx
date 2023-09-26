import { useState, useMemo, useRef } from "react";
import {
  CategoriesContainer,
  CategoryButton,
  Loader,
  PrimaryButton,
} from "../components";
import { useFetch } from "../hooks";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { ProductCarousel } from ".";
import {
  AnimatePresence,
  motion,
  Variants,
  useWillChange
} from "framer-motion";

interface ICategoryData {
  name: string;
  array: string[];
  headingClassname?: string;
}

const Categories = () => {
  const [data] = useFetch<string[]>("/categories");
  const [seeAll, setSeeAll] = useState<boolean>(false);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const willChange = useWillChange()

  const categories = useMemo(() => {
    return !data
      ? []
      : [
          { name: "Electronics", array: [data[0], data[1]] },
          { name: "Self Care", array: [data[2], data[3], data[16]] },
          { name: "Decor Accessories", array: [data[5], data[6], data[19]] },
          { name: "Clothes", array: [data[7]] },
          { name: "Auto", array: [data[17], data[18]] },
        ];
  }, [data]);

  // const categoriesByGender = !data
  //   ? []
  //   : [
  //       {
  //         name: "Women",
  //         array: [data[8], data[9], data[13], data[14], data[15]],
  //         headingClassname: "text-pink-700 text-center",
  //       },
  //       {
  //         name: "Men",
  //         array: [data[10], data[11], data[12]],
  //         headingClassname: "text-red-700 text-center",
  //       },
  //     ];

  const dropdownMainParentVariants: Variants = {
    initial: {
      gridTemplateRows: '0fr',
    },
    animate: {
      gridTemplateRows: "1fr",
    },
  };

  const collapsedCategories = categories.slice(0, 2);
  const expandedCategories = categories.slice(2, categories.length) 

  const categoriesJsx = (dataArray: ICategoryData[]) => {
    return dataArray.map((category) => {
      const { name, array, headingClassname } = category;
      return (
        <CategoriesContainer
          key={name}
          categoryName={name}
          dataArray={array}
          headingClassname={headingClassname ? headingClassname : ""}
          willExit
        />
      );
    });
  };

  if (!data)
    return (
      <section className="h-[10rem] relative mt-2 mx-4 w-[calc(100vw-2.75rem)] bg-white p-3 overflow-hidden  flex items-center justify-center">
        <Loader className="h-[3rem] w-[3rem]" />
      </section>
    );

  return (
    <>
      <section className="mx-4 my-2 ">
        <div
          ref={parentRef}
          className={` overflow-hidden rounded-md px-5 py-2 bg-white`}
        >
          {/* category by name */}
          <h3 className="font-bold text-center text-xl drop-shadow-lg">
            Shop by Category
          </h3>
          {collapsedCategories.slice(0, 2).map((category) => {
            const { name, array } = category;
            return (
              <CategoriesContainer
                key={name}
                categoryName={name}
                dataArray={array}
                initialAnimation={false}
                willExit={false}
              />
            );
          })}
        </div>
        {/*  */}

        {/* Expandable categories section */}
        <div className="max-h-min pb-2 bg-white">
          <AnimatePresence>
            {seeAll && (
              <motion.div
                key={"expandedCategoryContainer"}
                variants={dropdownMainParentVariants}
                initial={"initial"}
                animate={"animate"}
                exit={"initial"}
                className={`grid`}
                style={{ willChange }}
              >
                <div className="overflow-hidden px-5">
                  {seeAll && categoriesJsx(expandedCategories)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/*  */}

        {/* Show/hide all categories toggle button */}
        <div className=" flex place-content-center">
          <PrimaryButton
            onClick={() => {
              setSeeAll((seeAll) => !seeAll);
              const parentRefCoords = parentRef.current?.offsetTop;
              if (seeAll && parentRef && parentRefCoords) {
                window.scrollTo(0, parentRefCoords - 100);
              }
            }}
            text={seeAll ? "See Less" : "See All Categories"}
            Icon={
              seeAll ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown
            }
            className="place-self-center"
          />
        </div>

        {/* Shop by gender section */}
        <div className="pb-2 bg-white my-4 ">
          <h3
            key={"shopByGenderHeading"}
            className=" font-bold text-center text-xl drop-shadow-lg"
          >
            Shop by Gender
          </h3>
          <div className="flex justify-around gap-3 p-2">
            <CategoryButton name="Men" textClassname="text-md" />
            <CategoryButton name="Women" textClassname="text-md" />
          </div>
        </div>
        {/*  */}

        <ProductCarousel category="laptops" />
      </section>
    </>
  );
};

export default Categories;
