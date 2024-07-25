"use server";
import Ticket from "@/(models)/Ticket";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createTicket = async (formData: FormData) => {
  console.log("exit the tiger");
  console.log(formData.get("title"));
  revalidatePath("/ticketpage/");
  redirect("/");
};
