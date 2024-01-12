import React from "react";
import Item from "./Item";
import { Droppable } from "react-beautiful-dnd";

type Props = {
  board: {
    id: string;
    name: string;
    hasBtn: boolean;
    tasks: {
      id: string;
      name: string;
      priority: string;
      participant: string;
      date: string;
    }[];
  };
};

const Todo = ({ board }: Props) => {
  return (
    <Droppable droppableId={board.id}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className=" bg-zinc-100 p-5 rounded-xl w-1/3 h-[980px]"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl">{board.name}</h2>
              {board.hasBtn && (
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
              )}
            </div>
            <div className="mt-8">
              {board.tasks.map((task, i) => (
                <Item task={task} i={i} key={i} />
              ))}
            </div>
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default Todo;
