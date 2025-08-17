"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Filter = () => {
  const searchParams= useSearchParams();
  const router= useRouter();
  const pathname= usePathname();

  const handleFilter=(value:string)=>{
    const params= new URLSearchParams(searchParams);
    params.set("sort",value);
    router.push(`${pathname}?${params.toString()}`, {scroll:false});
  }

  return (
    <div className="w-full flex gap-2 items-center justify-end text-gray-700 py-5 pr-5">
      Sort:
      <select name="sort" id="sort" className="ring ring-gray-500 p-1 text-black rounded-md cursor-pointer" onChange={(e)=>handleFilter(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
