import { SlClose } from "react-icons/sl";
import "./style.css";
const MLeftModal = ({ title, closeBtn, caption, children }) => {
  return (
    <div className="h-screen w-screen fixed top-0 z-50 mleft-modal_cover">
      {/* top */}
      <div className="relative h-screen w-screen">
        <div className="mleft-modal absolute w-full bg-white rounded-tl-[20px] rounded-tr-[20px] drop-shadow-md mleft-modal px-4 pt-4">
          <div className="item-center justify-between flex ">
            <div className=""></div>
            <div className="text-center">
              <div className="font-Kanit font-semibold text-[17px]">
                {title}
              </div>
              <div className="text-gray-600 text-center font-light">
                {caption}
              </div>
            </div>
            <div
              className="text-secondary font-normal cursor-pointer"
              onClick={() => closeBtn(false)}
            >
              Close
            </div>
          </div>
          <div className="relative h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MLeftModal;
