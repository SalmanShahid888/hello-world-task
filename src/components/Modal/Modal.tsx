import { FC } from "react";
import { useEffect } from "react";
import ReactPortal from "./ReactPortal";
import { X, Search } from "lucide-react";
interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = (props) => {
  //Close Modal in case of Escape key press

  useEffect(() => {
    const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
      e.key === "Escape" ? props.handleClose : null;
      document.body.addEventListener("keydown", closeOnEscapeKeyDown);
      return () => {
        document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
      };
    };
  }, [props.handleClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [props.isOpen]);

  if (!props.isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-neutral-800 opacity-50" />
        <div className="fixed rounded-3xl flex flex-col gap-4 box-border sm:w-[45vw] sm:h-[90vh] px-5 py-8 bg-white sm:inset-y-10 sm:inset-x-96 md:inset-x-64 inset-y-20 inset-x-10 2xl:inset-x-1/4 h-[50vh] w-[80vw] z-50 ">
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-[#1A3A5F] font-light font-mulish text-xl leading-6">
              Assign a Journal
            </h3>
            <button
              className="btn btn-ghost btn-square btn-md border rounded-2xl bg-[#F3F8F4]"
              onClick={props.handleClose}
            >
              <X className="text-black" />
            </button>
          </div>
          <div className="w-full flex flex-row justify-between items-center bg-[#FAFAFA] rounded-lg px-4 py-3 my-3">
            <Search className="text-black" />
            <input
              type="search"
              name="search_input"
              id="search_client"
              className="outline-transparent border-none focus:ring-0 bg-[#FAFAFA] w-full text-[#425151] font-light font-poppins text-base leading-6 p-0 px-5 m-0 placeholder:font-light placeholder-[#425151] placeholder:text-base"
            />
          </div>
          <div className="box-border h-auto">{props.children}</div>
        </div>
      </>
    </ReactPortal>
  );
};

export default Modal;
