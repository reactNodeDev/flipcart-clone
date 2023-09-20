import { useState, useMemo, useRef } from "react";
import { Loader, PrimaryButton } from "../components";
import { useFetch } from "../hooks";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { ProductCarousel } from ".";
import CategoriesContainerNew from "../components/categories/CategoriesContainerNew";

// const windowWidth = window.innerWidth;

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
        className={`relative categories grid parentSection  mt-2 mx-4 bg-white overflow-hidden`}
        style={{
          willChange: "height",
        }}
      >
        <div className={` p-3`}>
          {/* category by name */}
          <h3 className="font-bold text-center text-xl drop-shadow-lg">
            Shop by Category
          </h3>

          {/* <div> */}
          {visibleCategories.map((category) => {
            const { name, array } = category;
            return (
              <CategoriesContainerNew
                key={name}
                categoryName={name}
                dataArray={array}
                initialAnimation={false}
                willExit={false}
                layoutDependency={visibleCategories.length}
              />
            );
          })}
          {/* </div> */}

          {/* {seeAll && ( */}
            <h3
              key={"shopByGenderHeading"}
              className="font-bold text-center text-xl drop-shadow-lg mt-8 overflow-hidden"
            >
              Shop by Gender
            </h3>
          {/* )} */}

          {/* category by gender */}
          {/* {seeAll && */}
            {categoriesByGender.map((category) => {
              const { name, array, headingClassname } = category;
              return (
                <CategoriesContainerNew
                  key={name}
                  categoryName={name}
                  dataArray={array}
                  headingClassname={headingClassname ? headingClassname : ""}
                  willExit={true}
                />
              );
            })}
             {/* } */}

          {/* see-more/less button */}
          <div
            key={"seeAllButton"}
            className="absolute bottom-0 z-[10000] w-full flex justify-center overflow-hidden bg-[rgba(0,0,0,0.5)]"
          >
            <PrimaryButton
              onClick={() => {
                if (!seeAll) {
                  parentRef.current?.classList.add("categoriesExpanded");
                }
                // const categoriesParent = document.getElementsByClassName('.categories')
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
          </div>
        </div>
      </section>
      <ProductCarousel category="laptops" />
    </>
  );
};

export default CategoriesNew;
