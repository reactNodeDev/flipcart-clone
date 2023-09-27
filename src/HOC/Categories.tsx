import { useState, useMemo, useRef } from "react";
import {
  Accordion,
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

interface ICategoryData {
  name: string;
  array: string[];
  headingClassname?: string;
}

const Categories = () => {
  const [data] = useFetch<string[]>("/categories");
  const [seeAll, setSeeAll] = useState<boolean>(false);
  const [showGenderSection, setShowGenderSection] = useState<
    "men" | "women" | null
  >(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  const sliceData = (numbers: number[]) => {
    let slicedData: string[] = [];
    if (data) {
      numbers.map((num) => {
        slicedData.push(data[num]);
      });
    }
    if (!data) throw new Error("Some Error Occured. Try again later !");
    return slicedData;
  };

  const categories = useMemo(() => {
    return !data
      ? []
      : [
          { name: "Electronics", array: sliceData([0, 1]) },
          {
            name: "Self Care",
            array: sliceData([2, 3, 16]),
          },
          {
            name: "Decor Accessories",
            array: sliceData([5, 6, 19]),
          },
          {
            name: "Clothes",
            array: sliceData([7]),
          },
          {
            name: "Auto",
            array: sliceData([17, 18]),
          },
        ];
  }, [data]);

  const categoriesByGender = data
    ? {
        women: {
          name: "Women",
          array: sliceData([8, 9, 13, 14, 15]),
          headingClassname: "text-pink-700 text-center",
        },
        men: {
          name: "Men",
          array: sliceData([10, 11, 12]),
          headingClassname: "text-red-700 text-center",
        },
      }
    : {};

  const collapsedCategories = categories.slice(0, 2);
  const expandedCategories = categories.slice(2, categories.length);

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

  if (!data || data.length === 0)
    return (
      <section className="h-[10rem] relative mt-2 mx-4 bg-white p-3 overflow-hidden  flex items-center justify-center">
        <Loader className="h-[3rem] w-[3rem]" />
      </section>
    );

  if (data)
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
            <Accordion key={"categoriesAccordion"} dependency={seeAll}>
              {seeAll && categoriesJsx(expandedCategories)}
            </Accordion>
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
              <CategoryButton
                name="Men"
                textClassname="text-md text-black"
                className={`border-[1px] shadow-md ${
                  showGenderSection == "men"
                    ? "border-b-2 border-b-blue-950"
                    : ""
                } `}
                onClick={() => {
                  setShowGenderSection((prev) => {
                    if (prev === "men") return null;
                    else return "men";
                  });
                }}
              />
              <CategoryButton
                name="Women"
                textClassname="text-md text-black"
                className={`border-[1px] shadow-md ${
                  showGenderSection == "women"
                    ? "border-b-2 border-b-purple-700"
                    : ""
                }`}
                onClick={() => {
                  setShowGenderSection((prev) => {
                    if (prev === "women") return null;
                    else return "women";
                  });
                }}
              />
            </div>
            <Accordion dependency={showGenderSection}>
              <div className="max-h-min pb-2 bg-white">
                {showGenderSection && (
                  <CategoriesContainer
                    dataArray={
                      categoriesByGender[`${showGenderSection}`]?.array
                    }
                    categoryName={
                      categoriesByGender[`${showGenderSection}`]?.name
                    }
                  />
                )}
              </div>
            </Accordion>
          </div>
          {/*  */}

          <ProductCarousel category="laptops" />
        </section>
      </>
    );
};

export default Categories;
