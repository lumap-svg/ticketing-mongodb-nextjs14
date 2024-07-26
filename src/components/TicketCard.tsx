import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import { ticketT } from "@/app/lib/definition";
import { deleteTicket } from "@/app/lib/actions";

type tick = {
  tick: ticketT;
};
export default function TicketCard({ tick }: tick) {
  // function formatTimestamp(timestamp:Date){
  //   const options ={
  //     year:"numeric",
  //     month:'2-digit',
  //     day:'2-digit',
  //     hour:'2-digit',
  //     minute:'2-digit',
  //     hour12:true
  //   }
  //   const date = new Date(timestamp).toLocaleString('en-US', options)
  // }
  const deleteTicketWithId = deleteTicket.bind(null, tick._id.toString());

  return (
    <div className="flex flex-col bg-slate-700 hover:bg-slate-500 rounded-md shadow-lg m-2 p-3">
      <div className="flex mb-3">
        <PriorityDisplay prior={tick.priority} />
        <div className="ml-auto">
          <DeleteBlock deleteFun={deleteTicketWithId} />
        </div>
      </div>
      <h4>{tick.title}</h4>
      <hr className="mb-2 h-px border-0 bg-slate-900" />
      <p className="whitespace-pre-wrap">{tick.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-sm my-1">{tick.category}</p>

          <p className="text-sm my-1">{tick.createdAt.toLocaleDateString()}</p>

          <ProgressDisplay progress={tick.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={tick.status} />
        </div>
      </div>
    </div>
  );
}
