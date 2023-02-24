import { useState } from "react";
import { Button } from "../../Button";
import CloseButton from "../../CloseButton";
const AddMeter = ({ closeBtn }) => {
  const [meterid, setmeterid] = useState("");
  const [name, setname] = useState("");
  const [loading, setloading] = useState(false);

  return (
    <div className="backdrop z-40">
      <div className="bg-white rounded drop-shadow-md p-4 w-[330px] lg:w-[400px] animate__animated animate__fadeInUp">
        <div className="flex items-start justify-between">
          <div className="">
            <div className="font-semibold">Add Meter</div>
            <div className="text-gray-600 font-light ">
              Fill in the option below to add meter.
            </div>
          </div>
          <div className="">
            <CloseButton closeBtn={closeBtn} />
          </div>
        </div>
        <div className="">
          <div className="mt-4">
            <label className="text-primary font-normal text-sm">
              Preferred name of Meter
            </label>
            <div className="flex items-center w-100 border-[1px] rounded-md border-gray-300 mt-2 h-[45px] w-100">
              <div className="ml-2 w-100">
                <input
                  required
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  type={"text"}
                  placeholder={"Enter a meter"}
                  className=" placeholder:text-sm block w-100 placeholder:font-thin outline-none border-[0px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-primary font-normal text-sm">Meter Id</label>
            <div className="flex items-center w-100 border-[1px] rounded-md border-gray-300 mt-2 h-[45px] w-100">
              <div className="ml-2 w-100">
                <input
                  required
                  type={"text"}
                  value={meterid}
                  onChange={(e) => {
                    setmeterid(e.target.value);
                  }}
                  placeholder={"Enter a meterid"}
                  className=" placeholder:text-sm block w-100 placeholder:font-thin outline-none border-[0px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button
              text={"Submit"}
              onClick={() => closeBtn(false)}
              loading={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMeter;
