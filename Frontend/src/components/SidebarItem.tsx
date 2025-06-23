import React from "react";
import clsx from "clsx";

type SidebarItemProps = {
  text: string;
  icon: React.ReactNode;
  count: number;
  onClick: () => void;
  selected?: boolean;
};

function SidebarItem({ text, icon, count, onClick, selected = false }: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex items-center justify-between gap-3 p-2 rounded-md cursor-pointer transition-colors",
        selected ? "bg-[#fdeaea]" : "hover:bg-gray-100"
      )}
    >
      <span className="flex items-center gap-2">
        <span className={clsx("text-lg", selected ? "text-[#b22d2d]" : "text-gray-700")}>
          {icon}
        </span>
        <span className={clsx("font-medium","text-sm",selected ? "text-[#b22d2d]" : "text-gray-800")}>
          {text}
        </span>
      </span>
      <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-700 text-[12px] flex items-center justify-center">
        {count}
      </span>
    </div>
  );
}

export default SidebarItem;



