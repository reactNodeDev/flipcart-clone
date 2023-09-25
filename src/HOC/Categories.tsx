import { useState, useMemo, useRef } from "react";
import { CategoriesContainer, Loader, PrimaryButton } from "../components";
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
      gridTemplateRows: "0fr",
    },
    animate: {
      gridTemplateRows: "1fr",
      transition: {
        duration: 0.4,
        ease: [0.12, 1, 0.39, 1],
        delayChildren: 0.15,
        bounce: 0,
      },
    },
    leave: {
      gridTemplateRows: "0fr",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
        bounce: 0,
      },
    },
  };

  const buttonVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4 } },
  };

  const collapsedCategories = categories.slice(0, 2);
  const expandedCategories = categories.slice(2, categories.length).map((category) => {
    const { name, array } = category;
    return (
      <CategoriesContainer
        key={name}
        categoryName={name}
        dataArray={array}
        initialAnimation={false}
        willExit
      />
    );
  })

  const genderCategories = categoriesByGender.map((category) => {
    const { name, array, headingClassname } = category;
    return (
      <div className="overflow-hidden">
        <CategoriesContainer
          key={name}
          categoryName={name}
          dataArray={array}
          headingClassname={headingClassname ? headingClassname : ""}
          willExit
        />
      </div>
    );
  })

  const SeeAllButton = () => {
    return (
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
    );
  };

  if (!data)
    return (
      <section className="h-[10rem] relative mt-2 mx-4 w-[calc(100vw-2.75rem)] bg-white p-3 overflow-hidden  flex items-center justify-center">
        <Loader className="h-[3rem] w-[3rem]" />
      </section>
    );

  return (
    <>
      <div className="mx-4 my-2 bg-white ">
        <section ref={parentRef} className="relative ">
          <div className={` overflow-hidden rounded-md px-5`}>
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

            <AnimatePresence>
              {seeAll && (
                <motion.div
                  key={"expandedCategoryContainer"}
                  variants={dropdownMainParentVariants}
                  initial="initial"
                  animate="animate"
                  exit="leave"
                  className={`grid origin-top`}
                >
                  <motion.div className="overflow-hidden">
                    {expandedCategories}
                    <motion.h3
                      key={"shopByGenderHeading"}
                      className=" font-bold text-center text-xl drop-shadow-lg overflow-hidden"
                      variants={buttonVariants}
                      initial="initial"
                      animate="animate"
                      exit="initial"
                    >
                      Shop by Gender
                    </motion.h3>

                    {genderCategories}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              key={"seeAllButton"}
              className={`flex justify-center overflow-hidden `}
              variants={buttonVariants}
              animate="animate"
              initial="initial"
              exit="initial"
            >
              <SeeAllButton />
            </motion.div>
          </div>
        </section>
      </div>

      <ProductCarousel category="laptops" />
    </>
  );
};

export default Categories;
