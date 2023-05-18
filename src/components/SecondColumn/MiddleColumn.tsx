import { ChevronDown } from "lucide-react";
import CollapseThird from "../Collapse/CollapseThird";
import Button from "../ui/Button";
import { useState } from "react";
import Modal from "../Modal/Modal";
import card from "../../assets/ModalImages/Card.png";
import cardOne from "../../assets/ModalImages/Card1.png";
import cardtwo from "../../assets/ModalImages/Card2.png";
import cardthree from "../../assets/ModalImages/Card3.png";
import cardfour from "../../assets/ModalImages/Card6.png";
import cardfive from "../../assets/ModalImages/Card5.png";

const MiddleColumn = () => {
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);
  return (
    <>
      <div className="sm:px-[2px] sm:mt-0 mt-4 pb-2 flex flex-col w-full bg-[#FAFAFA] lg:w-1/4">
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
        <Button
          className="mx-3"
          variant={"primary"}
          size={"lg"}
          onClick={() => setisModalOpen(true)}
        >
          Assign a Journal
        </Button>
      </div>
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
    </>
  );
};

export default MiddleColumn;
