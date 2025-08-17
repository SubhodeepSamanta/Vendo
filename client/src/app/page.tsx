import Categories from "@/components/Categories";
import ProductsList from "@/components/ProductsList";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="relative w-full aspect-[3/1]">
      <Image src='/featured.png' alt="featured" fill />
    </div>
    <ProductsList/>
    </>
  );
}
