import { FC } from "react";
interface DropdownContentProps {
  src: string;
  name: string;
  status?: string;
  seen?: boolean;
}
const DropdownContent: FC<DropdownContentProps> = (props) => {
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
      {props.status ? (
        <p className="text-[#1A3A5F] text-xs font-semibold font-poppins">
          {props.status}
        </p>
      ) : null}
    </div>
  );
};

export default DropdownContent;
