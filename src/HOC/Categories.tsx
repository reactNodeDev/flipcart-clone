import { useState, useMemo } from "react";
import { CategoriesContainer, Loader, PrimaryButton } from "../components";
import { useFetch } from "../hooks";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Categories = () => {
  const [data] = useFetch<string[]>("/categories");
  const [seeAll, setSeeAll] = useState<boolean>(false);

  const categories =  useMemo(()=>{
    return !data
    ? []
    : [
        { name: "Electronics", array: [data[0], data[1]] },
        { name: "Self Care", array: [data[2], data[3], data[16]] },
        { name: "Decor Accessories", array: [data[5], data[6], data[19]] },
        { name: "Clothes", array: [data[7]] },
        { name: "Auto", array: [data[17], data[18]] },
      ];
  },[data]) 

  const categoriesByGender = useMemo(()=>{
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
  },[data])  
  

  const visibleCategories = seeAll ? categories : categories.slice(0, 2);

  if (!data)
    return (
      <section className="relative mt-2 mx-4 w-[calc(100vw-2.75rem)] bg-white p-3 overflow-hidden  flex items-center justify-center">
        <Loader className="h-[3rem] w-[3rem]" />
      </section>
    );

  return (
    <>
      <section className="relative mt-2 mx-4 bg-white p-3 overflow-hidden w-[calc(100vw-2.75rem)]">
        {/* category by name */}
        <h3 className="font-bold text-center text-xl drop-shadow-lg">
          Shop by Category
        </h3>
        {visibleCategories.map((category) => {
          const { name, array } = category;
          return <CategoriesContainer categoryName={name} dataArray={array} />;
        })}

        {/* category by gender */}
        {seeAll && (
          <h3 className="font-bold text-center text-xl drop-shadow-lg mt-8">
            Shop by Gender
          </h3>
        )}
        {seeAll
          ? categoriesByGender.map((category) => {
              const { name, array, headingClassname } = category;
              return (
                <CategoriesContainer
                  categoryName={name}
                  dataArray={array}
                  headingClassname={headingClassname ? headingClassname : ""}
                />
              );
            })
          : null}

        {/* see-more/less button */}
        <section className="w-full flex justify-center">
          <PrimaryButton onClick={() => setSeeAll(!seeAll)} text={seeAll ? "See Less" : "See All"} Icon={seeAll ? (
              MdOutlineKeyboardArrowUp
            ) : (
              MdOutlineKeyboardArrowDown
            )} />
        </section>
      </section>
    </>
  );
};

export default Categories;
