import TicketCard from "@/components/TicketCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" p-5">
      <h2 className="text-center">home page</h2>
      <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 ">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
}
