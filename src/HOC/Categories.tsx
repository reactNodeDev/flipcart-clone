import { useState, useMemo, useRef } from "react";
import { CategoriesContainer, Loader, PrimaryButton } from "../components";
import { useFetch } from "../hooks";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { ProductCarousel } from ".";
import { AnimatePresence, Variants, motion } from "framer-motion";

const Categories = () => {
  const [data] = useFetch<string[]>("/categories");
  const [seeAll, setSeeAll] = useState<boolean>(false);
  const parentRef = useRef<HTMLDivElement | null>(null);

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

  const categoriesByGender = !data
    ? []
    : [
        {
          name: "Women",
          array: [data[8], data[9], data[13], data[14], data[15]],
          headingClassname: "text-pink-700 text-center",
        },
        {
          name: "Men",
          array: [data[10], data[11], data[12]],
          headingClassname: "text-red-700 text-center",
        },
      ];

  const dropdownMainParentVariants: Variants = {
    initial: {
      scaleY: 0,
      // transition: {
      //   delayChildren: 2,
      //   staggerChildren: 0.2,
      // },
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: [0.12, 1, 0.39, 1],
        delayChildren: 0.2,
      },
    },
    exit: { scaleY: 0, transition: { duration: 0.5 } },
  };

  const collapsedCategories = categories.slice(0, 2);
  const expandedCategories = categories.slice(2, categories.length);

  if (!data)
    return (
      <section className="h-[10rem] relative mt-2 mx-4 w-[calc(100vw-2.75rem)] bg-white p-3 overflow-hidden  flex items-center justify-center">
        <Loader className="h-[3rem] w-[3rem]" />
      </section>
    );

  return (
    <>
      <section ref={parentRef} className="relative">
        <div className={`bg-white overflow-hidden rounded-md px-5`}>
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
              />
            );
          })}

          <AnimatePresence initial={false}>
            {seeAll && (
                <motion.div
                key={"expandedCategoryContainer"}
                variants={dropdownMainParentVariants}
                  initial={"initial"}
                  animate={"animate"}
                  exit={"exit"}
                  className="categoriesParent origin-top"
                >
                  <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} className="w-full h-[5rem] bg-fuchsia-600 origin-top"></motion.div>
                  {expandedCategories.map((category) => {
                    const { name, array } = category;
                    return (
                      <CategoriesContainer
                        key={name}
                        categoryName={name}
                        dataArray={array}
                        initialAnimation={false}
                      />
                    );
                  })}
                  <motion.h3
                    variants={{
                      initial: { scaleY: 0.95 },
                      animate: { scaleY: 1 },
                    }}
                    key={"shopByGenderHeading"}
                    className=" font-bold text-center text-xl drop-shadow-lg overflow-hidden"
                  >
                    Shop by Gender
                  </motion.h3>

                  {categoriesByGender.map((category) => {
                    const { name, array, headingClassname } = category;
                    return (
                      <CategoriesContainer
                        key={name}
                        categoryName={name}
                        dataArray={array}
                        headingClassname={
                          headingClassname ? headingClassname : ""
                        }
                      />
                    );
                  })}
                </motion.div>
            )}
          </AnimatePresence>

          {/* see-more/less button */}
        </div>
      </section>
      <motion.div
        initial={false}
        key={"seeAllButton"}
        className={`w-full flex justify-center overflow-hidden`}
      >
        <PrimaryButton
          onClick={() => {
            setSeeAll((seeAll) => !seeAll);
            const parentRefCoords = parentRef.current?.offsetTop;
            if (seeAll && parentRef && parentRefCoords) {
              window.scrollTo(0, parentRefCoords - 100);
            }
          }}
          text={seeAll ? "See Less" : "See All Categories"}
          Icon={seeAll ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown}
        />
      </motion.div>
      <ProductCarousel category="laptops" />
    </>
  );
};

export default Categories;
