import AppAreaCharts from "@/components/AppAreaCharts";
import AppBarCharts from "@/components/AppBarCharts";
import AppPieCharts from "@/components/AppPieCharts";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    // tujhe kya lagta hai pata nhi chalta hume.... har 15 minute mein github kholta hai clone karta hai, sharam karle thorasa 
    itna kya obsession hai humse khudki gf ko attention dede bhai... sabh pata hai hume saamne se bolunga toh accha nhi lagega par had hoti hai bhai
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarCharts/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Latest Transactions"/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppPieCharts/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><TodoList/></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppAreaCharts/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Popular Content"/></div>
    </div>
  );
}
