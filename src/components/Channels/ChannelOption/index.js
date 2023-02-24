const ChannelOption = ({ selectedchannel, channelId, setselectedchannel }) => {
  const option = ["Add to group", "Rename", "Recharge"];
  return (
    <div
      className={`bg-white drop-shadow rounded absolute right-[-5px] z-10 top-9 animate__animated animate__fadeInUp`}
      style={{
        display: selectedchannel == channelId ? "block" : "none",
      }}
    >
      {option.map((i) => (
        <div
          className="px-5 text-[12px] even:bg-gray-50 hover:even:bg-gray-50 cursor-pointer py-2 my-2 text-primary  font-light"
          key={i}
          onClick={() => {
            setselectedchannel(null);
          }}
        >
          {i}
        </div>
      ))}
    </div>
  );
};

export default ChannelOption;
