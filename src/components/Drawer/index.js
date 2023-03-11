import { AiFillCloseCircle } from "react-icons/ai";

const Drawer = ({ children }) => {
  return (
    <div className="fixed">
      <div className="flex items-center justify-between">
        <div className="">
          <div className="">Title</div>
          <div className="">Caption</div>
        </div>
        <div className="">
          <AiFillCloseCircle />
        </div>
      </div>

      <div className="">{children}</div>
    </div>
  );
};

export default Drawer;
