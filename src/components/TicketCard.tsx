import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

export default function TicketCard() {
  return (
    <div className="flex flex-col bg-slate-700 hover:bg-slate-500 rounded-md shadow-lg m-2 p-3">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket title</h4>
      <hr className="mb-2 h-px border-0 bg-slate-900" />
      <p className="whitespace-pre-wrap">this is the ticket description</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-sm my-1">
            {new Date(Date.now()).toLocaleString()}
          </p>
          <ProgressDisplay />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
}
