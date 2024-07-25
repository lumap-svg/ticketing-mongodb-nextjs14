// import { MongoClient } from "mongodb";
// const uri = process.env.MONGODB_URI;

// const options = {};
// if (!uri) throw new Error("please add mongodb uri");
// if (uri) console.log(uri);
import Ticket from "@/(models)/Ticket";
import { NextResponse } from "next/server";
export const POST = async (formData: FormData) => {
  try {
    const ticketData = await FormData;
    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
        error,
      },
      { status: 500 }
    );
  }
};
