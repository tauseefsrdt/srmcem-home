import React, { useState } from "react";
import Engeenring from "./programs/Engeenring";
import Pharmacy from "./programs/Pharmacy";
import Management from "./programs/Management";
import { tabDataType } from "../types/home-data-type";
import ComputerApplication from "./programs/ComputerApplication";
import Commerce from "./programs/Commerce";
import { container } from "../utils/tw";

export const tabData: tabDataType[] = [
  {
    heading: [
      {
        h1: "Our Courses",
        para: "On the college’s dynamic campus, you will be part of a diverse and inclusive academic community that fosters intellectual growth and equips you with essential life skills in a supportive environment.",
      },
    ],
    tabs: [
      {
        id: 0,
        title: "Engineering",
        content: <Engeenring />,
      },
      {
        id: 1,
        title: "Computer Application",
        content: <ComputerApplication />,
      },
      {
        id: 2,
        title: "Pharmacy",
        content: <Pharmacy />,
      },
      {
        id: 3,
        title: "Management",
        content: <Management />,
      },
      {
        id: 4,
        title: "Commerce",
        content: <Commerce />,
      },
    ],
  },
];
const { heading, tabs } = tabData[0];

const Course: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="pt-[86px] pb-[92px] px-0 bg-white max-[940px]:pt-16 max-[940px]:pb-[72px]">
      <div className="w-full">
        <div className={container}>
          {heading.map((item: any, index: any) => {
            return (
              <div className="text-center" key={index}>
                <h2 className="mx-auto text-[#101522] font-sans text-[36px] leading-[1.2] font-extrabold tracking-normal max-[940px]:text-[32px]">{item.h1}</h2>
                <p className="max-w-[1270px] mx-auto mt-4 text-[#020817] text-[16px] leading-[1.55] max-[940px]:max-w-[760px] max-[940px]:text-[15px]">On the college's dynamic campus, you will be part of a diverse and inclusive academic community that fosters intellectual growth and equips you with essential life skills in a supportive environment.</p>
              </div>
            );
          })}

          <ul className="flex justify-center items-center flex-wrap gap-0 mt-[42px] max-[700px]:gap-3 max-[700px]:mt-8" role="tablist" aria-label="Course categories">
            {tabs.map((item: any, index: number) => (
              <li
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                role="tab"
                aria-selected={activeTab === item.id}
                className={`relative inline-flex items-center justify-center min-w-[130px] min-h-[43px] px-[19px] py-[9px] border rounded-pill  text-[15px] font-bold leading-none cursor-pointer transition-all duration-200 hover:-translate-y-px [&+&]:ml-10 max-[940px]:[&+&]:ml-4 max-[700px]:min-w-0 max-[700px]:min-h-[40px] max-[700px]:px-[15px] max-[700px]:py-[9px] max-[700px]:text-[14px] max-[700px]:[&+&]:ml-0 ${
                  activeTab === item.id
                    ? 'text-white bg-[#243f7f] border-[#243f7f]'
                    : 'text-[#626b79] border-[#263f7d] hover:text-[#263f7d]'
                }`}
              >
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[-21px] top-1/2 -translate-y-1/2 w-px h-[35px] bg-[#9aa7c2] max-[940px]:hidden"
                  />
                )}
                {item.title}
              </li>
            ))}
          </ul>
          <div className="mt-[55px] max-[700px]:mt-9">{tabs[activeTab].content}</div>
        </div>
      </div>
    </section>
  );
};

export default Course;
