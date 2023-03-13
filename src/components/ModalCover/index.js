import Backdrop from "../Backdrop";

const ModalCover = ({ children, setopen, open }) => {
  return (
    <Backdrop setopen={setopen} open={open}>
      <div
        className="w-screen h-screen  items-center justify-center"
        style={{
          display: open ? "flex" : "none",
        }}
      >
        <div className="bg-white drop-shadow-sm rounded-lg animate__animated animate__fadeInUp h-auto lg:w-[400px]">
          <div className="">{children}</div>
        </div>
      </div>
    </Backdrop>
  );
};

export default ModalCover;
