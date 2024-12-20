import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [expand, setExpand] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="h-screen inline-flex flex-col justify-between bg-[#f0f4f9] px-[25px] pt-[15px] ">
      <div className="mt-5">
        <img
          src={assets.menu_icon}
          alt="menu"
          width={20}
          className="block ml-3 cursor-pointer"
          onClick={() => setExpand((prev) => !prev)}
        />
        <div
          onClick={() => newChat()}
          className="mt-12 inline-flex items-center gap-5 p-3 bg-[#e6eaf1] rounded-full text-[14px] text-gray-500 cursor-pointer"
        >
          <img src={assets.plus_icon} alt="plus" width={20} />
          {expand ? <p>New Chat</p> : null}
        </div>
        {expand ? (
          <div className="flex flex-col animate-fadeIn">
            <p className="mt-8 mb-8">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="flex items-start gap-5 p-2 pr-5 rounded-xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]"
                >
                  <img src={assets.message_icon} alt="message" width={20} />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col ">
        <div className="flex gap-5 p-3 hover:bg-[#e2e6eb] rounded-xl pr-3 cursor-pointer">
          <img src={assets.question_icon} alt="question" width={20} />
          {expand ? <p>Help</p> : null}
        </div>
        <div className="flex gap-5 p-3 hover:bg-[#e2e6eb] rounded-xl pr-3 cursor-pointer">
          <img src={assets.history_icon} alt="question" width={20} />
          {expand ? <p>Activity</p> : null}
        </div>
        <div className="flex gap-5 p-3 hover:bg-[#e2e6eb] rounded-xl pr-3 cursor-pointer">
          <img src={assets.setting_icon} alt="question" width={20} />
          {expand ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
