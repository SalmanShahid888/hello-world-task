import DropdownNoStatus from "./DropdownNoStatus";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const CollapseSecond = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapseOne = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div
      className={`collapse ${isCollapsed ? "collapse-close" : "collapse-open"}`}
      onClick={toggleCollapseOne}
    >
      <input type="checkbox" className="w-full" />
      <div className="collapse-title w-full px-0">
        <div className="flex flex-row justify-between items-center">
          <p className="text-xs font-medium text-[#90A3A7]">Shared With You</p>
          <button className="btn btn-ghost btn-square btn-sm border border-[#FAFAFA] rounded-xl">
            {isCollapsed ? (
              <ChevronUp
                className={`text-black ${
                  isCollapsed ? "animate-rotatefull" : ""
                }`}
              />
            ) : (
              <ChevronDown
                className={`text-black ${
                  isCollapsed ? "animate-rotatefullReverse" : ""
                }`}
              />
            )}
          </button>
        </div>
      </div>
      <div className="collapse-content pl-2 px-0">
        <div className="flex flex-col bg-white">
          <DropdownNoStatus
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            name="Valerie Hickle"
            seen={true}
          />
          <DropdownNoStatus
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            name="Maurice Helpert"
            seen={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CollapseSecond;
