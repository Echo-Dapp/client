import React from "react";
import { twMerge } from "tailwind-merge";

export default function (
  props: { title: string; subtitle?: string } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  const { subtitle, className, ...inputProps } = props;

  return (
    <div className="relative">
      <span className="absolute top-0 left-2 -translate-y-1/2 text-[11px] pl-[2px] pr-1 bg-background text-front/90">
        {props.title}
        {props.required && (
          <span className="ml-1 text-red-500 text-sm font-bold">*</span>
        )}
      </span>
      <input
        {...inputProps}
        className={twMerge("text-sm px-3 py-4 rounded-md w-full", className)}
      />

      {subtitle && (
        <p className="text-mute text-[11px] px-1 pt-1">{subtitle}</p>
      )}
    </div>
  );
}
