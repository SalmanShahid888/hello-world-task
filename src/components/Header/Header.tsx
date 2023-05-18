import logo from "../../assets/Icons/logo.svg";
import dashboardIcon from "../../assets/Icons/dashboard-icons/dashboard.svg";
import videoCamera from "../../assets/Icons/dashboard-icons/video.svg";
import userIcon from "../../assets/Icons/dashboard-icons/user.svg";
import fileIcon from "../../assets/Icons/dashboard-icons/file.svg";
import toolIcons from "../../assets/Icons/dashboard-icons/tools.svg";
import blogIcon from "../../assets/Icons/dashboard-icons/blogg.svg";
import bellIcon from "../../assets/Icons/dashboard-icons/bell.svg";
import evelopeIcon from "../../assets/Icons/dashboard-icons/envelope.svg";
import YellowFile from "../../assets/Icons/dashboard-icons/yellowFile.svg";
import { ChevronDown } from "lucide-react";
import { MenuSquare } from "lucide-react";
const Header = () => {
  return (
    <div className="w-full h-20 bg-[#FCFCFCFC] flex flex-row items-center justify-between px-4">
      {/* Main Logo */}
      <div className="flex justify-center items-center p-2 w-24 h-16">
        <img src={logo} alt="logo" className="h-7 w-8" />
      </div>
      {/* Icons Row */}
      <div className="justify-center items-center gap-16 mr-56 pt-2 xl:flex xl:flex-row lg:hidden sm:hidden xs:hidden">
        <div className="flex flex-col justify-center items-center">
          <img
            src={dashboardIcon}
            alt="dashboard icon"
            className="text-[#AFB1B0] text-xl h-5 w-5"
          />
          <p className="xl:text-[12px] text-[#AFB1B0] font-jakarta font-light mt-2 lg:text-[14px]">
            Dashboard
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={videoCamera}
            alt="dashboard icon"
            className="text-[#AFB1B0] text-xl h-5 w-5"
          />
          <p className="xl:text-[12px] text-[#AFB1B0] font-jakarta font-light mt-2 lg:text-[14px]">
            Appointments
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={userIcon}
            alt="dashboard icon"
            className="text-[#AFB1B0] text-xl h-5 w-5"
          />
          <p className="xl:text-[12px] text-[#AFB1B0] font-jakarta font-light mt-2 lg:text-[14px]">
            Clients
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={fileIcon}
            alt="dashboard icon"
            className="text-[#AFB1B0] text-xl h-5 w-5"
          />
          <p className="xl:text-[12px] text-[#AFB1B0] font-jakarta font-light mt-2 lg:text-[14px]">
            Assessments
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={toolIcons}
            alt="dashboard icon"
            className="text-[#AFB1B0] text-xl h-5 w-5"
          />
          <p className="xl:text-[12px] text-[#AFB1B0] font-jakarta font-light mt-2 lg:text-[14px]">
            Tools & Guides
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={blogIcon}
            alt="dashboard icon"
            className="text-[#AFB1B0] text-xl h-5 w-5"
          />
          <p className="xl:text-[12px] text-[#AFB1B0] font-jakarta font-light mt-2 lg:text-[14px]">
            Notes
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={YellowFile}
            alt="dashboard icon"
            className="text-[#F4A417] text-xl h-5 w-5"
          />
          <p className="xl:text-[12px] text-[#F4A417] font-jakarta font-light mt-2 lg:text-[14px]">
            Journal
          </p>
        </div>
      </div>
      {/* Profile */}
      <div className="flex flex-row justify-center items-center gap-12">
        <div className="flex flex-row gap-12">
          <img
            src={bellIcon}
            alt=""
            className="text-[#AFB1B0] text-xl h-5 w-5"
          />
          <img
            src={evelopeIcon}
            alt=""
            className="text-[#AFB1B0] text-xl h-5 w-5"
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="bg-white flex flex-row justify-center items-center px-1 py-1 rounded-full gap-2">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="avatar image"
              className="rounded-full h-[40px] w-[40px]"
            />
            {/* profile Dropdown */}
            <div className="dropdown dropdown-end">
              <ChevronDown
                tabIndex={0}
                size={24}
                className="text-black mr-2 focus:animate-pop"
                strokeWidth={1.5}
              />

              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end xl:hidden">
              <MenuSquare
                tabIndex={0}
                size={24}
                className="text-black mr-2 focus:animate-pop"
                strokeWidth={1.5}
              />

              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
              >
                <li>
                  <div className="flex flex-row gap-5 items-center">
                    <img
                      src={dashboardIcon}
                      alt="dashboard icon"
                      className="text-[#AFB1B0] text-sm h-3 w-3"
                    />
                    <p className="text-[12px] text-[#AFB1B0] font-jakarta font-light">
                      Dashboard
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-5 items-center">
                    <img
                      src={videoCamera}
                      alt="dashboard icon"
                      className="text-[#AFB1B0] text-sm h-3 w-3"
                    />
                    <p className="text-[12px] text-[#AFB1B0] font-jakarta font-light">
                      Appointment
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-5 items-center">
                    <img
                      src={userIcon}
                      alt="dashboard icon"
                      className="text-[#AFB1B0] text-sm h-3 w-3"
                    />
                    <p className="text-[12px] text-[#AFB1B0] font-jakarta font-light">
                      Clients
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-5 items-center">
                    <img
                      src={fileIcon}
                      alt="dashboard icon"
                      className="text-[#AFB1B0] text-sm h-3 w-3"
                    />
                    <p className="text-[12px] text-[#AFB1B0] font-jakarta font-light">
                      Assessments
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-5 items-center">
                    <img
                      src={toolIcons}
                      alt="dashboard icon"
                      className="text-[#AFB1B0] text-sm h-3 w-3"
                    />
                    <p className="text-[12px] text-[#AFB1B0] font-jakarta font-light">
                      Tools & Guides
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-5 items-center">
                    <img
                      src={fileIcon}
                      alt="dashboard icon"
                      className="text-[#AFB1B0] text-sm h-3 w-3"
                    />
                    <p className="text-[12px] text-[#AFB1B0] font-jakarta font-light">
                      Notes
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-5 items-center">
                    <img
                      src={YellowFile}
                      alt="dashboard icon"
                      className="text-[#AFB1B0] text-sm h-3 w-3"
                    />
                    <p className="text-[12px] text-[#F4A417] font-jakarta font-light">
                      Journal
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
