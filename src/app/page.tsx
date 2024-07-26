import TicketCard from "@/components/TicketCard";
import { fetchTickets } from "./lib/actions";
import { ticketT } from "./lib/definition";

export default async function Home() {
  const tickets: ticketT[] | undefined = await fetchTickets();
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className=" p-5">
      <div>
        {tickets &&
          uniqueCategories.map((uniquecategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniquecategory}</h2>
              <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 ">
                {tickets
                  .filter((ticket) => ticket.category === uniquecategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard key={_index} tick={filteredTicket} />
                  ))}
              </div>
            </div>
          ))}
      </div>

      {/* <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 ">
        {tickets &&
          tickets.map((ticket) => (
            <TicketCard key={ticket._id} tick={ticket} />
          ))}
      </div> */}
    </div>
  );
}
