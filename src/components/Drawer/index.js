import { VscClose } from "react-icons/vsc";
import Backdrop from "../Backdrop";

const Drawer = ({
  children,
  title = "Drawer title",
  caption = "Caption",
  open,
  setopen,
}) => {
  return (
    <Backdrop open={open}>
      <div
        className="fixed h-screen w-[400px] p-2 bg-white drop-shadow-md right-0 animate__animated animate__fadeInRight z-[2000px]"
        style={{
          display: open ? "block" : "none",
        }}
      >
        <div className="flex items-start justify-between pt-3">
          <div className="">
            <div className="font-semibold text-[17px]">{title}</div>
            <div className="text-gray-700 font-light">{caption}</div>
          </div>
          <div className="p-2 cursor-pointer" onClick={() => setopen(false)}>
            <VscClose size={22} />
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </Backdrop>
  );
};

export default Drawer;
