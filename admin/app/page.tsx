import AppAreaCharts from "@/components/AppAreaCharts";
import AppBarCharts from "@/components/AppBarCharts";
import AppPieCharts from "@/components/AppPieCharts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarCharts/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Title</div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppPieCharts/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Title</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppAreaCharts/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Title</div>
    </div>
  );
}
