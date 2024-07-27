import React from "react";

export default function (props: {
  name?: string;
  title?: string;
  tooltip?: string;
}) {
  return (
    <div className="flex items-center gap-x-3">
      <div className="w-10 rounded-full flex p-1 relative overflow-hidden">
        <input
          type="checkbox"
          className="absolute-cover z-1 opacity-0 cursor-pointer peer"
        />

        <figure className="absolute-cover bg-front peer-checked:bg-blue-200" />

        <figure className="peer-checked:w-1/2 w-0 h-1 relative z-1 duration-150 pointer-events-none" />

        <figure className="w-1/2 aspect-square bg-mute relative z-1 pointer-events-none peer-checked:bg-blue-500 rounded-full" />
      </div>

      <span>{props.title}</span>
      {props.tooltip && (
        <button
          type="button"
          title={props.tooltip}
          className="text-xs bg-mute aspect-square h-[1.5em] flex justify-center items-center rounded-full text-back"
        >
          i
        </button>
      )}
    </div>
  );
}
