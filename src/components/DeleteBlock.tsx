"use client";
import React from "react";
import { MdDeleteForever } from "react-icons/md";

const DeleteBlock = ({ deleteFun }: { deleteFun: () => void }) => {
  return (
    <MdDeleteForever
      className="text-red-400 hover:text-red-200 text-xl hover:cursor-pointer"
      onClick={() => deleteFun()}
    />
  );
};

export default DeleteBlock;
