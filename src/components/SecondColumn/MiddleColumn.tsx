import { ChevronDown } from "lucide-react";
import CollapseThird from "../Collapse/CollapseThird";
import Button from "../ui/Button";

const MiddleColumn = () => {
  return (
    <>
      <div className="px-[2px] pb-2 flex flex-col w-1/4 bg-[#FAFAFA]">
        <div className="flex flex-col bg-white py-3 px-3">
          <h3 className="text-[#1A3A5F] font-light font-mulish text-xl leading-6">
            Journals
          </h3>
          {/* Drop Down for select */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="flex flex-row w-full justify-between items-center bg-[#FAFAFA] rounded-lg px-4 my-3 h-12"
            >
              <p className="font-poppins text-sm font-medium text-[#425151]">
                All
              </p>
              <ChevronDown className="text-[#425151]" size={20} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white rounded-box w-full"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Collapse */}
        <CollapseThird />
        <div className="flex flex-1"></div>
        <Button className="mx-3" variant={"primary"} size={"lg"}>
          Assign a Journal
        </Button>
      </div>
    </>
  );
};

export default MiddleColumn;
