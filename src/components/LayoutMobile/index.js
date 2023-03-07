const LayoutMobile = ({ children }) => {
  return (
    <div className="w-screen h-screen px-3 lg:hidden md:hidden block pt-4 pb-[100px]">
      {children}
    </div>
  );
};

export default LayoutMobile;
