import React, { useState } from "react";
import Classes from "../utils/styles/Global.module.css";
import Engeenring from "./programs/Engeenring";
import Pharmacy from "./programs/Pharmacy";
import Management from "./programs/Management";
import { tabDataType } from "../types/home-data-type";
import ComputerApplication from "./programs/ComputerApplication";
import Commerce from "./programs/Commerce";

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
    <section className="program-section">
      <div className="w-full">
        <div className={`${Classes["container"]} `}>
          {heading.map((item: any, index: any) => {
            return (
              <div className="program-heading" key={index}>
                <h2>{item.h1}</h2>
                <p>On the college's dynamic campus, you will be part of a diverse and inclusive academic community that fosters intellectual growth and equips you with essential life skills in a supportive environment.</p>
              </div>
            );
          })}

          <ul className="program-tabs" role="tablist" aria-label="Course categories">
            {tabs.map((item: any) => (
              <li
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                role="tab"
                aria-selected={activeTab === item.id}
                className={`program-tab ${activeTab === item.id ? 'is-active' : ''}`}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="program-content">{tabs[activeTab].content}</div>
        </div>
      </div>
    </section>
  );
};

export default Course;
