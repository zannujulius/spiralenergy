const AddToGroup = () => {
  return (
    <div className="backdrop">
      <div className="flex items-center justify-between bg-white rounded drop-shadow-md lg-[350px] w-[300px]">
        <div className="">
          <div className="font-semibold ">Groups</div>
          <div className="font-light text-gray-600">
            Tap any of the tabs to group a channel
          </div>
        </div>
        <div className="">
          <div className="w-[40px] h-[40px] border-[1px] border-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default AddToGroup;
