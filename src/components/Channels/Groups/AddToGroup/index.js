import { Select } from "antd";
import { Button } from "../../../Button";
import CloseButton from "../../../CloseButton";

const AddToGroup = ({ type, closeBtn }) => {
  return (
    <div className="backdrop">
      <div className="p-3 bg-white rounded drop-shadow-md lg:w-[400px] w-[300px]">
        <div className="flex  items-center justify-between">
          <div className="">
            <div className="font-semibold ">Groups</div>
            <div className="font-light text-gray-600">
              Tap any of the tabs to group a channel
            </div>
          </div>
          <div className="">
            {/* w-[40px] h-[40px] border-[1px] border-gray-500 */}
            <div className="">
              <CloseButton closeBtn={closeBtn} />
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-4">
            <label className="text-primary font-normal text-sm">
              Group name
            </label>
            <div className="flex items-center w-100 border-[1px] rounded-sm border-gray-300 mt-2 h-[45px]">
              <div className="ml-2">
                <input
                  type={"text"}
                  placeholder={"Enter a group name"}
                  className=" placeholder:text-sm placeholder:font-thin outline-none border-[0px]"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="mt-5">
              <label className="text-primary font-normal text-sm">
                Select a channels
              </label>
              <div className="flex items-center w-100 border-[1px] rounded-md border-gray-300 mt-2 h-[45px] w-100">
                <div className="ml-2 w-[100%]" style={{}}>
                  <Select
                    defaultValue="lucy"
                    className="h-100"
                    allowClear
                    showSearch
                    bordered={false}
                    style={{ width: "100%" }}
                    // onChange={handleChange}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "disabled",
                        disabled: true,
                        label: "Disabled",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Button text={"Add to group"} loading={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToGroup;
