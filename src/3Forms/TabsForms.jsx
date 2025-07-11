import React, { useState } from "react";
import Personal from "./Personal";
import Hobbies from "./Hobbies";
import Settings from "./Settings";

const TabsForms = () => {
  const [data, setData] = useState({
    name: "Jhon Doe",
    age: "21",
    email: "jhondoe@gmail.com",
    interst: ["Coding", "Beer"],
    theme: "Dark",
  });
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Personal Info",
      component: Personal,
    },
    {
      name: "Hobbies",
      component: Hobbies,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const TabsSelected = tabs[activeTab].component;
  return (
    <>
      <div className="tabs-container">
        {tabs.map((t, index) => (
          <div
            className="tabs"
            onClick={() => setActiveTab(index)}
            key={t.index}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tabs-component">
        <TabsSelected data={data} setData={setData} />
      </div>
    </>
  );
};

export default TabsForms;
