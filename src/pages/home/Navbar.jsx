import { MenuItem } from '../../components/MenuItem.jsx';
import { menuItems } from '../../utils/mappings.js';
import { Logo } from '../../components/Icons/Logo.jsx';
import { Settings } from '../../components/Icons/Settings.jsx';
import { Logout } from '../../components/Icons/Logout.jsx';

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col p-4 gap-6 h-full ">
        {/* LOGO */}
        <div className="flex  items-center">
          <Logo />
          <p className="font-black ml-2 text-2xl">OrangeFarm </p>
        </div>

        {/* SEARCH BAR */}
        <div className=" flex gap-2 px-4 rounded-full border p-2 border-[#F1F1F1] text-[#7D7D7D] ">
          <img src="search.svg" alt="" />
          Search
        </div>

        <div className="flex flex-col justify-between h-full">
          {/* LIST */}
          <div className="flex flex-col gap-8 ">
            {menuItems.map((item, index) => (
              <MenuItem key={index} Icon={item.Icon} name={item.name} />
            ))}
          </div>

          <div className="flex flex-col gap-4 px-3">
            <div className="flex gap-5 w-full">
              <img src="profile1.svg" alt="" className="rounded-circle w-10 " />
              <div className="flex flex-col gap-2">
                <p className="text-md font-bold">Gustavo Xavier</p>
                <div className="rounded-full w-max px-2 py-1 text-[0.7rem] bg-[#FFCD71]">
                  Admin
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <Settings />
              <img src="settings.svg" alt="" className="w-2 " />
              <p className="text-md">Settings</p>
            </div>

            <div className="flex items-center ">
              <Logout />
              <img src="logout.svg" alt="" className="w-2" />
              <p className="text-red-500 text-md">Log out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
