const PageTitle = ({ title, caption }) => {
  return (
    <div className="">
      <div className="text-primary font-semibold text-[17px] ">
        <span className="text-3xl"></span> {title}
      </div>
      <div className="">{caption}.</div>
    </div>
  );
};

export default PageTitle;
