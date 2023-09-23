import { useState, useMemo, useRef } from "react";
import {
  CategoriesContainer,
  Loader,
  PrimaryButton,
} from "../components";
import { useFetch } from "../hooks";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { ProductCarousel } from ".";
import { AnimatePresence, motion, Variants } from "framer-motion";

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
      height: 0,
    },
    animate: {
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: [0.12, 1, 0.39, 1],
        delayChildren: 0.15,
      },
    },
    leave: {
      height: 0,
      transition: {
        duration: 0.5,
        // duration: 2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      },
    },
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
        </div>
        {/* <motion.div
          layout
          className={`px-5 py-2 flex flex-col justify-center bg-white`}
        >
          <AnimatePresence>
            <motion.div
              layout="position"
              variants={dropdownMainParentVariants}
              initial="initial"
              animate="animate"
              exit="leave"
              className=" overflow-clip"
            >
              {seeAll && (
                <motion.div
                  // layout='position'
                  key={"expandedCategoryContainer"}
                  variants={dropdownMainParentVariants}
                  initial="initial"
                  animate="animate"
                  exit="leave"
                  className={` h-full origin-top w-full`}
                >
                  <div className="flex h-full flex-col">
                    {expandedCategories.map((category) => {
                      const { name, array } = category;
                      return (
                        <div className="overflow-hidden">
                          <CategoriesContainer
                            key={name}
                            categoryName={name}
                            dataArray={array}
                            initialAnimation={false}
                          />
                        </div>
                      );
                    })}
                    <motion.h3
                      key={"shopByGenderHeading"}
                      className=" font-bold text-center text-xl drop-shadow-lg overflow-hidden"
                      variants={{
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                      }}
                      exit="exit"
                    >
                      Shop by Gender
                    </motion.h3>

                    {categoriesByGender.map((category) => {
                      const { name, array, headingClassname } = category;
                      return (
                        <div className="overflow-hidden">
                          <CategoriesContainer
                            key={name}
                            categoryName={name}
                            dataArray={array}
                            headingClassname={
                              headingClassname ? headingClassname : ""
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              // initial={false}
              layout="position"
              key={"seeAllButton"}
              className={`flex justify-center overflow-hidden `}
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
                Icon={
                  seeAll ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown
                }
              />
            </motion.div>
          </AnimatePresence>
        </motion.div> */}
      </section>
      <AnimatePresence>
      {seeAll && (
                <motion.div
                  // layout='position'
                  key={"expandedCategoryContainer"}
                  variants={dropdownMainParentVariants}
                  initial="initial"
                  animate="animate"
                  exit="leave"
                  className={` h-full origin-top w-full`}
                >
                  <div className="flex h-full flex-col">
                    {expandedCategories.map((category) => {
                      const { name, array } = category;
                      return (
                        <div className="overflow-hidden">
                          <CategoriesContainer
                            key={name}
                            categoryName={name}
                            dataArray={array}
                            initialAnimation={false}
                          />
                        </div>
                      );
                    })}
                    <motion.h3
                      key={"shopByGenderHeading"}
                      className=" font-bold text-center text-xl drop-shadow-lg overflow-hidden"
                      variants={{
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                      }}
                      exit="exit"
                    >
                      Shop by Gender
                    </motion.h3>

                    {categoriesByGender.map((category) => {
                      const { name, array, headingClassname } = category;
                      return (
                        <div className="overflow-hidden">
                          <CategoriesContainer
                            key={name}
                            categoryName={name}
                            dataArray={array}
                            headingClassname={
                              headingClassname ? headingClassname : ""
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
              </AnimatePresence>

              <motion.div
              // initial={false}
              layout="position"
              key={"seeAllButton"}
              className={`flex justify-center overflow-hidden `}
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
                Icon={
                  seeAll ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown
                }
              />
            </motion.div>
      <ProductCarousel category="laptops" />
    </>
  );
};

export default Categories;
