import EditForm from "@/components/EditForm";
import TicketForm from "@/components/TicketForm";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className="flex justify-center ">
      {params.id === "new" ? <TicketForm /> : <EditForm id={params.id} />}
    </div>
  );
}
