import React from "react";

type Props = {};

const Item = (props: Props) => {
  return (
    <div className="w-full bg-zinc-300 h-32 rounded-xl p-5 mb-5">
      <div className="flex gap-3">
        <h3 className="font-bold text-xl">Lorem ipsum dolor sit.</h3>
        <div className="bg-green-500 text-white rounded-md px-2">badge</div>
      </div>
      <div className="mt-5 text-gray-400">
        <p>
          Participant: <span className="text-black">Name</span>
        </p>
        <p>
          Date Added: <span className="text-black">01/09/2024</span>
        </p>
      </div>
    </div>
  );
};

export default Item;
