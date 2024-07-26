import TicketCard from "@/components/TicketCard";
import Image from "next/image";
import { fetchTickets } from "./lib/actions";

export default async function Home() {
  const tickets = await fetchTickets();
  console.log("pingting sdabfhkbhasbf");
  console.log(tickets);
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
      {tickets &&
        tickets.map((ticket) => <h2 key={ticket._id}>{ticket.title}</h2>)}
    </div>
  );
}
