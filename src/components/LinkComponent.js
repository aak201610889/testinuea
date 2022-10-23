import React from "react";

function LinkComponent() {
  const data = [
    { name: "dashbord" },
    { name: "room" },
    { name: "devices" },
    { name: "security" },
    { name: "member" },
  ];
  const data2 = [
    { name: "seetting" },
    { name: "log out" },
    
  ];

  return (
    <div className="mt-[70px] flex flex-col items-start justify-start pt-[40px] pb-[40px] ">
      <div className="w-[70%] m-auto">

      {data.map((item, index) => (
        <div key={index} className="flex  mt-[20px] ">
          <div className="w-[20px] h-[20px] rounded-full bg-white  "></div>
          <p className="ml-[10px] ">{item.name}</p>
        </div>
      ))}
      </div>
      <div className="h-[1px] rounded-xl bg-[#6969695a] w-[80%] m-auto mt-[15px]"></div>
      <div className="w-[70%] m-auto">

      {data2.map((item, index) => (
        <div key={index} className="flex  mt-[20px] ">
          <div className="w-[20px] h-[20px] rounded-full bg-white  "></div>
          <p className="ml-[10px] ">{item.name}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default LinkComponent;
