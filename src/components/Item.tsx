import React from "react";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  task: {
    id: string;
    name: string;
    priority: string;
    participant: string;
    date: string;
  };
  i: number;
};

const Item = ({ task, i }: Props) => (
  <Draggable draggableId={task.id} index={i}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="w-full bg-zinc-300 h-32 rounded-xl p-5 mb-5"
      >
        <div className="flex gap-3">
          <h3 className="font-bold text-xl">{task.name}</h3>
          <div className="bg-green-500 text-white rounded-md px-2">
            {task.priority}
          </div>
        </div>
        <div className="mt-5 text-gray-400">
          <p>
            Participant: <span className="text-black">{task.participant}</span>
          </p>
          <p>
            Date Added: <span className="text-black">{task.date}</span>
          </p>
        </div>
      </div>
    )}
  </Draggable>
);

export default Item;
