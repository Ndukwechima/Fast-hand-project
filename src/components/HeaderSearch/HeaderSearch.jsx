// import React from "react";
// import { IoSearchSharp } from "react-icons/io5";

// const HeaderSearch = () => {
//   return (
//     <div>
//       <div className="w-[2em]">
//         <IoSearchSharp className="text-pink900 mt-3 hover:text-skyBlue700" />
//         <div>
//           <input
//             className="py-[.2em] italic text-[.6em] px-[2em] right-[8em] rounded-sm"
//             type="text"
//             name=""
//             id=""
//             placeholder="Search for Artisans "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderSearch;

// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// HeaderSearch.jsx
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const HeaderSearch = ({ toggleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search functionality here
    console.log("Search submitted:", searchValue);
  };

  return (
    <div>
      <div className="w-[2em]">
        <IoSearchSharp
          onClick={toggleSearch}
          className="text-pink900 mt-3 hover:text-skyBlue700 cursor-pointer"
        />
        <div>
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search for Artisans"
              className="py-[.2em] italic text-[.6em] px-[2em] right-[8em] rounded-sm"
            />
            <button
              type="submit"
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Go
            </button>
            <button onClick={toggleSearch} className="ml-2 focus:outline-none">
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
