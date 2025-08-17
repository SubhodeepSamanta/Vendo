"use client";
import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

const Categories = () => {
    const searchParams= useSearchParams();
    const selectedCategory= searchParams.get("category");
    const pathname= usePathname();
    const router= useRouter();
    console.log(selectedCategory);
    const handleCategory=(value:string | null)=>{
        const params= new URLSearchParams(searchParams);
        params.set("category",value || "all");
        router.push(`${pathname}?${params.toString()}`,{scroll:false});
    }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 w-full bg-gray-100 rounded mt-4 p-2">
        {categories.map((category)=>(
            <div key={category.name} className={`flex justify-center items-center gap-2 bg-gray-100 hover:bg-gray-50 cursor-pointer p-1 ${selectedCategory?.toLocaleLowerCase()==category.slug.toLocaleLowerCase()?'bg-white text-gray-700':'bg-gray-100 text-gray-500'} rounded-lg text-sm`} onClick={()=>handleCategory(category.name)}>
                {category.icon}
                {category.name}
            </div>
        ))}
    </div>
  )
}

export default Categories