import React from "react";
import { FaFire } from "react-icons/fa";

export default function PriorityDisplay({ prior }: { prior: number }) {
  return (
    <div className="flex justify-start align-baseline">
      <FaFire
        className={`pr-1 ${prior > 0 ? "text-red-400" : "text-slate-400"}`}
      />
      <FaFire
        className={`pr-1 ${prior > 1 ? "text-red-400" : "text-slate-400"}`}
      />
      <FaFire
        className={`pr-1 ${prior > 2 ? "text-red-400" : "text-slate-400"}`}
      />
      <FaFire
        className={`pr-1 ${prior > 3 ? "text-red-400" : "text-slate-400"}`}
      />
      <FaFire
        className={`pr-1 ${prior > 4 ? "text-red-400" : "text-slate-400"}`}
      />
    </div>
  );
}
