import ProductsList from "@/components/ProductsList";
import Image from "next/image";

const Home= async({searchParams}:{searchParams:{category:string}})=>{
  const category= searchParams.category;
  return (
    <>
    <div className="relative w-full aspect-[3/1]">
      <Image src='/featured.png' alt="featured" fill />
    </div>
    <ProductsList category={category} params='home'/>
    </>
  );
}

export default Home;
