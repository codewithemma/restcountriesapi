import React from "react";
import DropdownMenu from "./DropdownMenu";
const Input = ({ value, onChange, handleClick }) => {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center my-4 container">
      <div className="my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a country..."
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={onChange}
          value={value}
        />
      </div>
      <div>
        <DropdownMenu handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Input;
// <div className="relative">
//       <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//         <svg
//           className="w-4 h-4 text-gray-500 dark:text-gray-400"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 20 20"
//         >
//           <path
//             stroke="currentColor"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//           />
//         </svg>
//       </div>
//       <input
//         type="search"
//         id="default-search"
//         className="block w-3/12 p-2 ps-10 text-xs placeholder-gray-900 border-1 shadow-lg rounded leading-6 bg-white focus:ring-blue-500 focus:ring-2 ring-1 ring-slate-200 focus:bg-white focus:outline-none appearance-none"
//         placeholder="Search for a country..."
//         required
//         value={value}
//         onChange={onChange}
//       />
//     </div>
