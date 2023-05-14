import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const CollapseThird = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsedTwo, setIsCollapsedTwo] = useState(false);
  const toggleCollapseOne = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggleCollapseTwo = () => {
    setIsCollapsedTwo(!isCollapsedTwo);
  };
  return (
    <div className="flex flex-col-reverse gap-2">
      <div
        className={`collapse ${
          isCollapsed ? "collapse-close" : "collapse-open"
        }`}
        onClick={toggleCollapseOne}
      >
        {/* TODO: Collapse only on title / Icon */}
        <input type="checkbox" className="w-full" />
        <div className="collapse-title w-full px-0">
          <div className="flex flex-row justify-between items-center px-2">
            <p className="text-xs font-medium text-[#90A3A7] font-poppins">
              Grif Journal
            </p>
            <button className="btn btn-ghost btn-square btn-sm border border-[#FAFAFA] rounded-xl bg-white">
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
        <div className="collapse-content pl-2 pr-4">
          {/* Items 1 */}
          <div className="flex flex-col my-1">
            <div className="flex flex-col gap-2 px-2 py-4 rounded-2xl">
              <h3 className="text-[#1A3A5F] font-light font-poppins text-xl leading-6">
                Entry - 01
              </h3>
              <p className="text-xs font-[500] text-[#90A3A7] font-poppins">
                6 July 2022 @ 3:00 PM
              </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col my-2">
            <div className="flex flex-col gap-2 px-2 py-4">
              <h3 className="text-[#1A3A5F] font-light font-poppins text-xl leading-6">
                Entry - 02
              </h3>
              <p className="text-xs font-[500] text-[#90A3A7] font-poppins">
                6 July 2022 @ 3:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`collapse ${
          isCollapsedTwo ? "collapse-close" : "collapse-open"
        }`}
        onClick={toggleCollapseTwo}
      >
        {/* TODO: Collapse only on title / Icon */}
        <input type="checkbox" className="w-full" />
        <div className="collapse-title w-full px-0">
          <div className="flex flex-row justify-between items-center px-2">
            <p className="text-xs font-medium text-[#90A3A7] font-poppins">
              Daily Journal
            </p>
            <button className="btn btn-ghost btn-square btn-sm border border-[#FAFAFA] rounded-xl bg-white">
              {isCollapsedTwo ? (
                <ChevronUp
                  className={`text-black ${
                    isCollapsedTwo ? "animate-rotatefull" : ""
                  }`}
                />
              ) : (
                <ChevronDown
                  className={`text-black ${
                    isCollapsedTwo ? "animate-rotatefullReverse" : ""
                  }`}
                />
              )}
            </button>
          </div>
        </div>
        <div className="collapse-content pl-2 pr-4">
          {/* Items 1 */}
          <div className="flex flex-col my-1">
            <div className="flex flex-col gap-2 bg-white px-2 py-4 rounded-2xl">
              <h3 className="text-[#1A3A5F] font-light font-poppins text-xl leading-6">
                Online Consultation
              </h3>
              <p className="text-xs font-[500] text-[#90A3A7] font-poppins">
                6 July 2022 @ 3:00 PM
              </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col my-2">
            <div className="flex flex-col gap-2 px-2 py-4">
              <h3 className="text-[#1A3A5F] font-light font-poppins text-xl leading-6">
                Online Consultation
              </h3>
              <p className="text-xs font-[500] text-[#90A3A7] font-poppins">
                6 July 2022 @ 3:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapseThird;
