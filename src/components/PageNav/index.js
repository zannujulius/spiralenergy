import { HiHome } from "react-icons/hi";
import { Navigate } from "react-router-dom";

const PageNav = ({ page, img }) => {
  return (
    <div className="flex items-start cursor-pointer">
      <div className="flex items-center justify-center pt-[2px] hover:text-secondary underline">
        <HiHome size={18} />
      </div>
      <div className=" underline">{page}</div>
    </div>
  );
};

export default PageNav;
