const Backdrop = ({ children }) => {
  return (
    <div className="fixed h-screen w-screen bg-[red] top-0 left-0">
      {children}
    </div>
  );
};

export default Backdrop;
