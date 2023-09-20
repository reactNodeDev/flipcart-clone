import { useState, useMemo, useRef } from "react";
import { CategoriesContainer, Loader, PrimaryButton } from "../components";
import { useFetch } from "../hooks";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { ProductCarousel } from ".";
import { AnimatePresence, motion } from "framer-motion";

const CategoriesNew = () => {
  const [data] = useFetch<string[]>("/categories");
  const [seeAll, setSeeAll] = useState<boolean>(false);
  const parentRef = useRef<HTMLElement | null>(null);
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

  const categoriesByGender = useMemo(() => {
    return !data
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
  }, [data]);

  const visibleCategories = seeAll ? categories : categories.slice(0, 2);

  if (!data)
    return (
      <section className=" h-[10rem] relative mt-2 mx-4 w-[calc(100vw-2.75rem)] bg-white p-3 overflow-hidden  flex items-center justify-center">
        <Loader className="h-[3rem] w-[3rem]" />
      </section>
    );

  return (
    <>
      <section
        ref={parentRef}
        className={`relative h-auto grid parentSection mt-2 mx-4 bg-white overflow-hidden p-3 rounded-md`}
      >
        <motion.div
          layout='size'
          layoutRoot
          initial={false}
          transition={{
            duration:5,
            layout : {duration:5},
            type:'tween',
          }}
        >
          {/* category by name */}
          <motion.h3
            initial={false}
            layout
            className="font-bold text-center text-xl drop-shadow-lg"
          >
            Shop by Category
          </motion.h3>

          <AnimatePresence>
            {/* <div> */}
            {visibleCategories.map((category, index) => {
              const { name, array } = category;
              return (
                <CategoriesContainer
                  key={name}
                  categoryName={name}
                  dataArray={array}
                  initialAnimation={false}
                  willExit={
                    index === 0 || index === 1
                      ? false
                      : true
                  }
                  layoutDependency={visibleCategories.length}
                />
              );
            })}

            {seeAll && (
              <motion.h3
                layout
                key={"shopByGenderHeading"}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0 } }
                className="font-bold text-center text-xl drop-shadow-lg mt-8 overflow-hidden"
              >
                Shop by Gender
              </motion.h3>
            )}

            {/* category by gender */}
            {seeAll &&
              categoriesByGender.map((category) => {
                const { name, array, headingClassname } = category;
                return (
                  <CategoriesContainer
                    key={name}
                    categoryName={name}
                    dataArray={array}
                    headingClassname={headingClassname ? headingClassname : ""}
                    willExit={true}
                  />
                );
              })}

            {/* see-more/less button */}
            <motion.div
            initial={false}
              layout='position'
              key={"seeAllButton"}
              className=" bottom-0 z-[10000] w-full flex justify-center overflow-hidden"
            >
              <PrimaryButton
                onClick={() => {
                  setSeeAll((seeAll) => !seeAll);
                  const parentRefCoords = parentRef.current?.offsetTop;
                  if (seeAll && parentRef && parentRefCoords) {
                    window.scrollTo(0, parentRefCoords - 100);
                    parentRef.current?.classList.remove("categoriesExpanded");
                  }
                }}
                text={seeAll ? "See Less" : "See All"}
                Icon={
                  seeAll ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown
                }
              />
            </motion.div>
          </AnimatePresence>
          {/* </motion.div> */}
        </motion.div>
      </section>
      <ProductCarousel category="laptops" />
    </>
  );
};

export default CategoriesNew;
