import { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar:FC = () => {
  return (
    <div className="search-field flex lg:items-center m-0  h-[3rem] lg:h-[70%] bg-searchBarBg flex-grow">
                {/* search bar */}
				<div className="pl-2 flex items-center w-full rounded-xl h-full overflow-hidden">
					<AiOutlineSearch size={'1.4rem'} className="mr-2 flex-initial text-searchBarText" />
					<input
          type="text"
						className="bg-transparent outline-none flex-1 text-searchBarText text-sm lg:text-lg"
						placeholder="Search for Products, Brands and More..."
					/>
					
				</div>
			</div>
  )
}

export default SearchBar