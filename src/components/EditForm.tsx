import { getTicket, updateTicket } from "@/app/lib/actions";
import { ticketT } from "@/app/lib/definition";
import { Ticket } from "lucide-react";

export default async function EditForm({ tick }: { tick: ticketT }) {
  const id: string = tick._id.toString();
  const updateTicketWithId = updateTicket.bind(null, id);
  return (
    <form
      action={updateTicketWithId}
      className="flex flex-col gap-1 w-full md:w-1/2"
    >
      <h3>create a ticket</h3>

      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        required={true}
        defaultValue={tick.title}
      />

      <label htmlFor="description">description</label>
      <textarea
        name="description"
        defaultValue={tick.description}
        required={true}
        rows={3}
      />
      <label htmlFor="category">Category</label>
      <select name="category" defaultValue={tick.category}>
        <option defaultValue="hardware problem">Hardware problem</option>
        <option defaultValue="software problem">software problem</option>
        <option defaultValue="project">project</option>
      </select>
      <label htmlFor="priority">Priority</label>
      <div>
        <input
          type="radio"
          name="priority"
          value={1}
          checked={tick.priority == 1}
        />
        <label htmlFor="1">1</label>
        <input
          type="radio"
          name="priority"
          value={2}
          checked={tick.priority == 2}
        />
        <label htmlFor="2">2</label>
        <input
          type="radio"
          name="priority"
          value={3}
          checked={tick.priority == 3}
        />
        <label htmlFor="3">3</label>
        <input
          type="radio"
          name="priority"
          value={4}
          checked={tick.priority == 4}
        />
        <label htmlFor="4">4</label>
        <input
          type="radio"
          name="priority"
          value={5}
          checked={tick.priority == 5}
        />
        <label htmlFor="5">5</label>
      </div>
      <label htmlFor="progress">progress</label>
      <input
        type="range"
        name="progress"
        defaultValue={tick.progress}
        min={0}
        max={100}
      />
      <label htmlFor="status">Status</label>
      <select name="status" defaultValue={tick.status}>
        <option value="not started">Not started</option>
        <option value="started">started</option>
        <option value="done">Done</option>
      </select>
      <input type="submit" value="Update Ticket" className="btn" />
    </form>
  );
}
