import React from "react";
import Item from "./Item";

type Props = {};

const Closed = (props: Props) => {
  return (
    <div className=" bg-zinc-100 p-5 rounded-xl w-1/3 h-[980px]">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Closed</h2>
      </div>
      <div className="mt-10">
        <Item />
      </div>
    </div>
  );
};

export default Closed;
