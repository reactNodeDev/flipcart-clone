import { useState, useMemo, useRef } from "react";
import { CategoriesContainer, Loader, PrimaryButton } from "../components";
import { useFetch } from "../hooks";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { ProductCarousel } from ".";
import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";

const Categories = () => {
  const [data] = useFetch<string[]>("/categories");
  const [seeAll, setSeeAll] = useState<boolean>(false);
  const parentRef = useRef<HTMLElement | null>(null);
  const [ref, { height }] = useMeasure();

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

  const windowWidth = window.innerWidth;

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <>
      <motion.section
        initial={false}
        variants={parentVariants}
        animate={{
          height: seeAll ? height : `${windowWidth > 1024 ? "20rem" : "24rem"}`,
        }}
        ref={parentRef}
        className="overflow-hidden"
      >
        <div
          key={"parentContainer"}
          ref={ref}
          className={`relative mt-2 mx-4 p-3 bg-white overflow-hidden w-[calc(100vw-2.75rem)]`}
        >
          {/* category by name */}
          <h3 className="font-bold text-center text-xl drop-shadow-lg">
            Shop by Category
          </h3>
          <motion.div initial={false} key={`${seeAll}shopByCategory`}>
            {visibleCategories.map((category) => {
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
          </motion.div>

          {/* category by gender */}
          <AnimatePresence>
            {seeAll && (
              <motion.div
                key={"shopByGender"}
                variants={parentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.h3
                  key={"shopByGenderHeading"}
                  variants={parentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="font-bold text-center text-xl drop-shadow-lg mt-8 overflow-hidden"
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
          <div className=" w-full flex justify-center overflow-hidden">
            <PrimaryButton
              onClick={() => {
                setSeeAll((seeAll) => !seeAll);
                const parentRefCoords = parentRef.current?.offsetTop;
                if (seeAll && parentRef && parentRefCoords)
                  window.scrollTo(0, parentRefCoords - 100);
              }}
              text={seeAll ? "See Less" : "See All"}
              Icon={
                seeAll ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown
              }
            />
          </div>
        </div>
      </motion.section>
      <ProductCarousel category="laptops" />
    </>
  );
};

export default Categories;
