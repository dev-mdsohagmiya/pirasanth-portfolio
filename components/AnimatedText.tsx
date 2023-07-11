import React from "react";
import TextAutomation from "./TextAutomation";

const AnimatedText = () => {
  return (
    <div className="md:translate-x-96 p-3 w-full">
      <div className=" ">
        <div className="">
          <div className="">
            <p className="text-primary block text-[40px] md:text-[68px] lg:text-[70px] xl:text-[70px]">
              <TextAutomation text={"!Hi"} start={1000} end={1000} />
            </p>
          </div>
          <p className="text-[20px] md:text-[28px] lg:text-[32px] pt-6 lg:pt-14 text-white">
            I'm <span className="text-primary">Pirasanth</span> - but call me
            <span className="text-primary">PJ.</span>
          </p>
        </div>
        <div className="">
          <span className="text-[20px] md:text-[28px] lg:text-[32px] pt-3 lg:pt-8 text-white block ">
            <div>
              <div>
                <TextAutomation text={"I’m"} start={1000} end={1000} />
                <TextAutomation text={"a"} start={3000} end={3000} />
                <TextAutomation text={"frontend"} start={1000} end={2000} />
                <TextAutomation text={"developer"} start={500} end={5000} />
                <TextAutomation text={"and"} start={2000} end={2000} />
                <TextAutomation
                  text={"automation"}
                  start={1000}
                  end={1000}
                />{" "}
                <br />
                <TextAutomation text={"QA"} start={1000} end={2000} />
                <TextAutomation text={"living"} start={1000} end={2000} />
                <TextAutomation text={"in"} start={1000} end={2000} />
                <TextAutomation text={".London"} start={1000} end={2000} />
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
