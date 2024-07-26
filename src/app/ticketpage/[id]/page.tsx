import { createTicket } from "@/app/lib/actions";
import TicketForm from "@/components/TicketForm";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center ">
      <TicketForm />
      {/* <form action={createTicket}>
        <input type="text" name="text" />
        <button type="submit">Shoot</button>
      </form> */}
    </div>
  );
}
