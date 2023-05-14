import Collapse from "../Collapse/Collapse";
import CollapseSecond from "../Collapse/CollapseSecond";
import Modal from "../Modal/Modal";
import MiddleColumn from "../SecondColumn/MiddleColumn";
import ThirdColumn from "../ThirdColumn/ThirdColumn";
import Button from "../ui/Button";
import { Search } from "lucide-react";
import { useState } from "react";

import card from "../../assets/ModalImages/Card.png";
import cardOne from "../../assets/ModalImages/Card1.png";
import cardtwo from "../../assets/ModalImages/Card2.png";
import cardthree from "../../assets/ModalImages/Card3.png";
import cardfour from "../../assets/ModalImages/Card6.png";
import cardfive from "../../assets/ModalImages/Card5.png";

const Notes = () => {
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-row px-0 mt-2 mx-8 rounded-lg bg-white">
      {/* Column One */}
      <div className="py-3 px-2 flex flex-col w-1/4">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-[#1A3A5F] font-light font-mulish text-xl leading-6">
            Client List
          </h3>
          {/* Button Component */}
          <Button
            variant={"primary"}
            size={"lg"}
            onClick={() => {
              setisModalOpen(true);
            }}
          >
            Assign a Journal
            <label htmlFor="modal-1"></label>
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
      {/* Column two */}
      <MiddleColumn />
      {/* Column Three */}
      <ThirdColumn />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          handleClose={() => {
            setisModalOpen(!isModalOpen);
          }}
        >
          <div className="px-2 flex flex-col gap-5 flex-1">
            <div className="flex flex-row justify-between flex-wrap gap-2">
              <img src={card} alt="" className="w-[48%]" />
              <img src={cardOne} alt="" className="w-[48%]" />
            </div>
            <div className="flex flex-row justify-between flex-wrap gap-3">
              <img src={cardtwo} alt="" className="w-[48%]" />
              <img src={cardthree} alt="" className="w-[48%]" />
            </div>
            <div className="flex flex-row justify-between flex-wrap gap-3">
              <img src={cardfour} alt="" className="w-[48%]" />
              <img src={cardfive} alt="" className="w-[48%]" />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Notes;
