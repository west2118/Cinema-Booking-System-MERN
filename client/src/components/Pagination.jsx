import React from "react";

const Pagination = () => {
  return (
    <ul class="flex space-x-5 justify-center">
      <li class="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer w-9 h-9 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 fill-gray-400"
          viewBox="0 0 55.753 55.753">
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000"
          />
        </svg>
      </li>
      <li class="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer text-base font-semibold text-slate-900 px-[13px] h-9 rounded-md">
        1
      </li>
      <li class="flex items-center justify-center shrink-0 bg-purple-800 cursor-pointer text-base font-semibold text-white px-[13px] h-9 rounded-md">
        2
      </li>
      <li class="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer text-base font-semibold text-slate-900 px-[13px] h-9 rounded-md">
        3
      </li>
      <li class="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer text-base font-semibold text-slate-900 px-[13px] h-9 rounded-md">
        4
      </li>
      <li class="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer text-base font-semibold text-slate-900 px-[13px] h-9 rounded-md">
        5
      </li>
      <li class="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer text-base font-semibold text-slate-900 px-[13px] h-9 rounded-md">
        6
      </li>
      <li class="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer w-9 h-9 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 fill-gray-400 rotate-180"
          viewBox="0 0 55.753 55.753">
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000"
          />
        </svg>
      </li>
    </ul>
  );
};

export default Pagination;
