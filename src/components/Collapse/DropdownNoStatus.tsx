import { FC } from "react";
interface DropdownNoStatus {
  src: string;
  name: string;
  seen?: boolean;
}
const DropdownNoStatus: FC<DropdownNoStatus> = (props) => {
  return (
    <div className="flex flex-row justify-between items-center py-4 my-2">
      <div className="flex flex-row gap-3 justify-center items-center">
        <img
          src={props.src}
          alt={`${props.name} profile picture`}
          className="w-10 h-10 rounded-full  object-cover"
        />
        <p className="text-[#1A3A5F] text-base font-medium font-poppins">
          {props.name}
        </p>
      </div>
      {props.seen ? (
        <div className="rounded-full h-2 w-2 bg-[#F4A417] animate-ping mr-2"></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DropdownNoStatus;
