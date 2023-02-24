import { IoCloseOutline } from "react-icons/io5";
const CloseButton = ({ closeBtn }) => {
  return (
    <div
      className="flex items-center justify-center pt-2"
      onClick={() => closeBtn(false)}
    >
      <IoCloseOutline size={21} />
    </div>
  );
};

export default CloseButton;
