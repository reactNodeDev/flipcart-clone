// import { useState, useMemo, useRef } from "react";
import { useState, useRef } from "react";
// import { CategoriesContainer, Loader, PrimaryButton } from "../components";
import { Loader, PrimaryButton } from "../components";
import { useFetch } from "../hooks";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { ProductCarousel } from ".";
import { AnimatePresence, motion, useWillChange } from "framer-motion";

const CategoriesNew = () => {
  const willChange = useWillChange();
  const [data] = useFetch<string[]>("/categories");
  const [seeAll, setSeeAll] = useState<boolean>(false);
  const parentRef = useRef<HTMLDivElement | null>(null);
  // const categories = useMemo(() => {
  //   return !data
  //     ? []
  //     : [
  //         { name: "Electronics", array: [data[0], data[1]] },
  //         { name: "Self Care", array: [data[2], data[3], data[16]] },
  //         { name: "Decor Accessories", array: [data[5], data[6], data[19]] },
  //         { name: "Clothes", array: [data[7]] },
  //         { name: "Auto", array: [data[17], data[18]] },
  //       ];
  // }, [data]);

  // const categoriesByGender = useMemo(() => {
  //   return !data
  //     ? []
  //     : [
  //         {
  //           name: "Women",
  //           array: [data[8], data[9], data[13], data[14], data[15]],
  //           headingClassname: "text-pink-700 text-center",
  //         },
  //         {
  //           name: "Men",
  //           array: [data[10], data[11], data[12]],
  //           headingClassname: "text-red-700 text-center",
  //         },
  //       ];
  // }, [data]);

  // const visibleCategories = seeAll ? categories : categories.slice(0, 2);

  if (!data)
    return (
      <section className="h-[10rem] relative mt-2 mx-4 w-[calc(100vw-2.75rem)] bg-white p-3 overflow-hidden  flex items-center justify-center">
        <Loader className="h-[3rem] w-[3rem]" />
      </section>
    );

  return (
    <>
      <section className="pb-3">
        <motion.div
          ref={parentRef}
          className={` bg-white overflow-hidden rounded-md px-5`}
          layout="size"
          layoutRoot
          initial={false}
          animate={{
            height:seeAll ? '100vh' : '30vh'
          }}
          transition={{
            duration: 0.3,

          }}
          style={{ willChange }}
        >
          <AnimatePresence>
            {seeAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                exit={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "4rem" }}
                className="w-full h-[4rem] border-2 border-black"
                transition={{
                  delay: 0.3,
                }}
              ></motion.div>
            )}
          </AnimatePresence>
          {/* category by name */}
          <motion.h3
            initial={false}
            className="font-bold text-center text-xl drop-shadow-lg"
          >
            Shop by Category
          </motion.h3>
          {/* <ul className="w-full gap-y-2"> */}
          {/* <AnimatePresence initial={false} mode="popLayout"> */}
          {/* {visibleCategories.map((category, index) => {
                const { name, array } = category;
                return (
                  // <div key={name} className="my-3">
                  <CategoriesContainer
                    key={name}
                    categoryName={name}
                    dataArray={array}
                    initialAnimation={false}
                    willExit={index === 0 || index === 1 ? false : true}
                    layoutDependency={visibleCategories.length}
                  />
                  // </div>
                );
              })} */}
          {/* {seeAll && (
                <motion.h3
                  layout
                  key={"shopByGenderHeading"}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{ opacity: 0 }}
                  className="font-bold text-center text-xl drop-shadow-lg mt-8 overflow-hidden"
                >
                  Shop by Gender
                </motion.h3>
              )} */}

          {/* category by gender */}
          {/* {seeAll &&
                categoriesByGender.map((category) => {
                  const { name, array, headingClassname } = category;
                  return (
                    <CategoriesContainer
                      key={name}
                      categoryName={name}
                      dataArray={array}
                      headingClassname={
                        headingClassname ? headingClassname : ""
                      }
                      willExit={true}
                    />
                  );
                })} */}
          {/* </AnimatePresence> */}
          {/* </ul> */}

          {/* see-more/less button */}
          <motion.div
            layout="position"
            layoutRoot
            initial={false}
            animate={{ y: "auto" }}
            key={"seeAllButton"}
            className="p-1 w-full flex justify-center overflow-hidden"
          >
            <PrimaryButton
              onClick={() => {
                setSeeAll((seeAll) => !seeAll);
                const parentRefCoords = parentRef.current?.offsetTop;
                if (seeAll && parentRef && parentRefCoords) {
                  window.scrollTo(0, parentRefCoords - 100);
                }
              }}
              text={seeAll ? "See Less" : "See All"}
              Icon={
                seeAll ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown
              }
            />
          </motion.div>
        </motion.div>
      </section>
      <ProductCarousel category="laptops" />
    </>
  );
};

export default CategoriesNew;
