import React from "react";
import { ChevronRight } from "lucide-react";
import { TocItem as TocItemType } from "@/app/page";

interface TocItemProps {
  item: TocItemType;
  isExpanded: boolean;
  onToggle: () => void;
}

const TocItem: React.FC<TocItemProps> = ({ item, isExpanded, onToggle }) => {
  return (
    <li>
      <div className="flex items-center justify-between rounded bg-white p-3 shadow">
        <span>{item.title}</span>
        <button
          onClick={onToggle}
          className="text-blue-500 hover:text-blue-700"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      {isExpanded && (
        <div className="mt-2 rounded bg-gray-100 p-3">
          <p>{item.content}</p>
        </div>
      )}
    </li>
  );
};

export default TocItem;
