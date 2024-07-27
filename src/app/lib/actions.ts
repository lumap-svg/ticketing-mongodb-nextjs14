"use server";
import Ticket from "@/(models)/Ticket";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { ticketT } from "./definition";

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

export const deleteTicket = async (id: string) => {
  console.log(id);
  try {
    await Ticket.findByIdAndDelete(id);
    NextResponse.json({ message: "Success deleting ticket" }, { status: 200 });
    console.log("deleted ticket");
    revalidatePath("/");
    redirect("/");
  } catch (err) {
    NextResponse.json(
      { message: "Error deleting ticket", err },
      { status: 505 }
    );
  }
};
export const getTicket = async (id: string) => {
  try {
    const response = await Ticket.findById(id);
    const ticket: ticketT = await response._doc;

    return ticket;
  } catch (err) {
    NextResponse.json(
      { message: "Error geting ticket by id", err },
      { status: 505 }
    );
  }
};
export const updateTicket = async (id: string, formData: FormData) => {
  console.log("updating ticket", id);
  try {
    const rawFormdata = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      priority: formData.get("priority"),
      progress: formData.get("progress"),
      status: formData.get("status"),
    };
    const result = await Ticket.findByIdAndUpdate(id, rawFormdata, {
      new: true,
    });
    console.log("updated record", result);
    NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (err) {
    NextResponse.json({ message: "Error", err }, { status: 505 });
  }
  revalidatePath("/ticketpage/");
  redirect("/");
};
