import { getTicket } from "@/app/lib/actions";
import EditForm from "@/components/EditForm";
import TicketForm from "@/components/TicketForm";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const ticket = await getTicket(params.id);

  return (
    <div className="flex justify-center ">
      {params.id === "new" && <TicketForm />}
      {ticket && <EditForm tick={ticket} />}
    </div>
  );
}
