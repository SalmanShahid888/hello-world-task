import { ChevronLeft } from "lucide-react";
import Button from "../ui/Button";

const ThirdColumn = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-row justify-between items-center px-2 py-3">
        <div className="flex flex-row gap-2 items-center">
          <button className="btn btn-ghost btn-square border rounded-md bg-[#FAFAFA] btn-sm sm:btn-md">
            <ChevronLeft className="text-black" />
          </button>
          <h3 className="text-[#1A3A5F] font-light font-mulish leading-6 text-base sm:text-xl">
            Morning Journal Entry
          </h3>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Button variant={"success"}> Message </Button>
          <Button variant={"primary"} size={"lg"}>
            Schedule a Session
          </Button>
        </div>
      </div>
      <div className="flex flex-row px-4 py-3 gap-4 items-center">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt=""
          className="w-11 h-11 rounded-full  object-cover"
        />
        <div className="flex flex-col">
          <h3 className="text-[#1A3A5F] font-light font-mulish text-base leading-6">
            Brandy Fadel IV
          </h3>
          <div className="flex flex-row items-center gap-2">
            <p className="text-[#1A3A5F] font-semibold font-mulish sm:text-sm text-[8px] leading-6">
              Daily Journal
            </p>
            <div className="h-2 w-2 bg-[#1A3A5F] rounded-full"></div>
            <p className="text-[#90A3A7] font-mulish sm:text-sm text-[8px] leading-6">
              Assigned on -
            </p>
            <p className="text-[#1A3A5F] font-mulish sm:text-sm text-[8px] leading-6">
              6 July 2022 @ 3:00 PM
            </p>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-[#FAFAFA] block"></div>
      <div className="px-4 py-4">
        <p className="text-[#425151] font-light font-mulish text-base leading-6">
          Gastropub chillwave lumbersexual umami lyft. Poke austin direct trade,
          marfa raclette letterpress actually. Chartreuse sriracha pinterest
          twee lo-fi try-hard. Meditation banh mi kitsch, prism organic hot
          chicken literally heirloom occupy af semiotics food truck. Aesthetic
          asymmetrical gluten-free, health goth shaman meh lumbersexual bespoke
          kinfolk helvetica vaporware fashion axe freegan. Pour-over hammock
          succulents disrupt chartreuse raw denim. Brunch aesthetic fanny pack
          subway tile everyday carry green juice neutra beard cray small batch
          poke yuccie plaid pork belly. Blue bottle 8-bit flexitarian hashtag.
          Scenester marfa yuccie snackwave edison bulb. VHS blog pickled
          scenester venmo hashtag lo-fi.
        </p>
      </div>
    </div>
  );
};

export default ThirdColumn;
