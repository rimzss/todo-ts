import React from "react";
import Item from "./Item";

type Props = {};

const Todo = (props: Props) => {
  return (
    <div className=" bg-zinc-100 p-5 rounded-xl w-1/3 h-[980px]">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">To do</h2>
        <div>
          <input
            className="rounded-lg p-2 outline-none"
            placeholder="Write here..."
            type="text"
            name=""
            id=""
          />
          <button className="bg-green-500 rounded-lg w-10 h-10 -ml-9 text-white">
            +
          </button>
        </div>
      </div>
      <div className="mt-8">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Todo;
