const Backdrop = ({ children, setopen, open }) => {
  return (
    <div
      className="fixed h-screen w-screen bg-[#00000036] top-0 right-0 z-50"
      style={{
        display: open ? "block" : "none",
      }}
    >
      {children}
    </div>
  );
};

export default Backdrop;
