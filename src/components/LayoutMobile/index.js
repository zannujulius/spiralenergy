import { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { HiViewGrid } from "react-icons/hi";
import { IoNotificationsSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { ProfileContext } from "../../context/profileContext";
import { updateProfile } from "../../redux/slice/profileSlice";

const LayoutMobile = ({ children, pageTitle }) => {
  const { profileData } = useContext(ProfileContext);
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profiles);
  useEffect(() => {
    (async () => {
      try {
        let result = await profileData();
        // console.log(result)
        dispatch(updateProfile(result));
      } catch (err) {
        toast.error(err.message);
      }
    })();
    return () => {};
  }, []);

  return (
    <div className="w-screen h-screen lg:hidden md:hidden block pt-4 pb-[100px]">
      <div className="fixed top-0 z-20 bg-white drop-shadow-md w-full px-2 py-3 ">
        <div className="flex items-center justify-between w-[95%] mx-auto ">
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full p-2 flex items-center justify-center">
              <HiViewGrid size={23} />
            </div>
            <div className="font-Kanit font-semibold text-[17px] text-gray-800 pl-4">
              {pageTitle}
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="flex items-center justify-center p-2 rounded-full relative">
              <div className="absolute rounded-full w-[20px] h-[20px] bg-secondary flex items-center justify-center top-0 right-0">
                <div className="text-white font-light text-[14px]">2</div>{" "}
              </div>
              <IoNotificationsSharp size={25} />
            </div>
            <div
              className="w-[40px] h-[40px] bg-gray-50 rounded-md ml-4"
              style={{
                background: `url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="px-3">{children}</div>
    </div>
  );
};

export default LayoutMobile;
