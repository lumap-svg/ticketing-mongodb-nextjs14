"use server";
import Ticket from "@/(models)/Ticket";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const createTicket = async (formData: FormData) => {
  try {
    const rawFormdata = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      priority: formData.get("priority"),
      progress: formData.get("progress"),
      status: formData.get("status"),
    };

    await Ticket.create(rawFormdata);
    NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (err) {
    NextResponse.json({ message: "Error", err }, { status: 505 });
  }
  revalidatePath("/ticketpage/");
  redirect("/");
};

export const fetchTickets = async () => {
  try {
    const tickets = await Ticket.find();
    // console.log(tickets);
    NextResponse.json({ tickets }, { status: 200 });
    return tickets;
  } catch (err) {
    NextResponse.json({ message: "Error", err }, { status: 505 });
  }
};
