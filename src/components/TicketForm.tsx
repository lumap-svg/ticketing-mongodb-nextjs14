"use client";

import { createTicket } from "@/app/lib/actions";
import { useState } from "react";

export default function TicketForm() {
  const initialState = {
    title: "",
    description: "",
    category: "Hardware problems",
    priority: 1,
    progress: 20,
    status: "not started",
  };

  const [formData, setFormData] = useState(initialState);

  return (
    <form action={createTicket} className="flex flex-col gap-1  w-1/2">
      <h3>create a ticket</h3>

      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        required={true}
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />

      <label htmlFor="description">description</label>
      <textarea
        name="description"
        value={formData.description}
        required={true}
        rows={3}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <label htmlFor="category">Category</label>
      <select
        name="category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option value="hardware problem">Hardware problem</option>
        <option value="software problem">software problem</option>
        <option value="project">project</option>
      </select>
      <label htmlFor="priority">Priority</label>
      <div>
        <input
          type="radio"
          name="priority"
          onChange={(e) =>
            setFormData({ ...formData, priority: Number(e.target.value) })
          }
          value={1}
          checked={formData.priority == 1}
        />
        <label htmlFor="1">1</label>
        <input
          type="radio"
          name="priority"
          value={2}
          checked={formData.priority == 2}
          onChange={(e) =>
            setFormData({ ...formData, priority: Number(e.target.value) })
          }
        />
        <label htmlFor="2">2</label>
        <input
          type="radio"
          name="priority"
          value={3}
          checked={formData.priority == 3}
          onChange={(e) =>
            setFormData({ ...formData, priority: Number(e.target.value) })
          }
        />
        <label htmlFor="3">3</label>
        <input
          type="radio"
          name="priority"
          value={4}
          checked={formData.priority == 4}
          onChange={(e) =>
            setFormData({ ...formData, priority: Number(e.target.value) })
          }
        />
        <label htmlFor="4">4</label>
        <input
          type="radio"
          name="priority"
          value={5}
          checked={formData.priority == 5}
          onChange={(e) =>
            setFormData({ ...formData, priority: Number(e.target.value) })
          }
        />
        <label htmlFor="5">5</label>
      </div>
      <label htmlFor="progress">progress</label>
      <input
        type="range"
        name="progress"
        value={formData.progress}
        min={0}
        max={100}
        onChange={(e) =>
          setFormData({ ...formData, progress: Number(e.target.value) })
        }
      />
      <label htmlFor="status">Status</label>
      <select
        name="status"
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option value="not started">Not started</option>
        <option value="started">started</option>
        <option value="done">Done</option>
      </select>
      <input type="submit" value="Create Ticket" className="btn" />
    </form>
  );
}
