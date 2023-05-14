import DropdownContent from "./DropdownContentWithStatus";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Collapse = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapseOne = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div
      className={`collapse ${isCollapsed ? "collapse-close" : "collapse-open"}`}
      onClick={toggleCollapseOne}
    >
      {/* TODO: Collapse only on title / Icon */}
      <input type="checkbox" className="w-full" />
      <div className="collapse-title w-full px-0">
        <div className="flex flex-row justify-between items-center w-full">
          <p className="text-xs font-medium text-[#90A3A7] font-poppins">
            Assigned By You
          </p>
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
          <DropdownContent
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            status="Viewed"
            name="Valerie Hickle"
          />
          <DropdownContent
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            status="Yet to view"
            name="Maurice Helpert"
          />
          <DropdownContent
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            status="Shared"
            name="Brandi Fadel IV"
          />
        </div>
      </div>
    </div>
  );
};

export default Collapse;
