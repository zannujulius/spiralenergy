const ChannelOption = () => {
  const option = ["Add to group", "Rename", "Recharge"];
  return (
    <div className="">
      {option.map((i) => (
        <div className="" key={1}></div>
      ))}
    </div>
  );
};

export default ChannelOption;
