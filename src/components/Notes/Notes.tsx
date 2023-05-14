import Collapse from "../Collapse/Collapse";
import CollapseSecond from "../Collapse/CollapseSecond";
import Button from "../ui/Button";
import { Search } from "lucide-react";
const Notes = () => {
  return (
    <div className="flex flex-row py-2 px-0 my-2 mx-8 rounded-lg bg-white">
      {/* Column One */}
      <div className="py-2 px-2 flex flex-col w-1/4 justify-center">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-[#1A3A5F] font-light font-mulish text-xl leading-6">
            Client List
          </h3>
          {/* Button Component */}
          <Button variant={"primary"} size={"lg"}>
            Assign a Journal
          </Button>
        </div>
        {/* Input Search for Client Name */}
        <div className="w-full flex flex-row justify-between items-center bg-[#FAFAFA] rounded-lg px-4 py-3 my-3">
          <input
            type="search"
            name="search_input"
            id="search_client"
            className="outline-transparent border-none focus:ring-0 bg-[#FAFAFA] w-full text-[#425151] font-light font-poppins text-base leading-6 p-0 m-0 placeholder:font-light placeholder-[#425151] placeholder:text-base"
            placeholder="Search by client name"
          />
          <Search className="text-black" />
        </div>
        {/* Collapse */}
        <Collapse />
        <CollapseSecond />
      </div>
    </div>
  );
};

export default Notes;
