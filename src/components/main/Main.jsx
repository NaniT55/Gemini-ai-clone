import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    // <div className="relative w-full flex flex-col ">
    //   <div className="flex justify-between items-center p-3 md:p-6">
    //     <p className="font-semibold text-lg md:text-xl">Gemini</p>
    //     <img
    //       src={assets.asta_icon}
    //       alt="user"
    //       width={50}
    //       className="rounded-full"
    //     />
    //   </div>
    //   <div className="max-w-[900px] m-auto">
    //     {!showResult ? (
    //       <>
    //         <div className="m-4 text-[36px] md:text-[56px] text-[#c4c7c5] lg:p-5 sm:p-3">
    //           <p>
    //             <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-fill-transparent">
    //               Hello, Bala Krishna
    //             </span>
    //           </p>
    //           <p>How can I help you Today?</p>
    //         </div>

    //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
    //           <div className=" p-5 bg-gray-300 rounded-xl relative cursor-pointer hover:bg-[#c5d0e1]">
    //             <p className="text-[#585858] text-[17px]">
    //               Suggest beautiful places to see on an upcoming road trip?
    //             </p>
    //             <img
    //               src={assets.compass_icon}
    //               alt="compass"
    //               width={50}
    //               className="rounded-full p-3 absolute bg-white bottom-5 right-5"
    //             />
    //           </div>
    //           <div className="lg:h-[200px] sm:h-[150px] p-5 bg-gray-300 rounded-xl relative cursor-pointer hover:bg-[#c5d0e1]">
    //             <p className="text-[#585858] text-[17px]">
    //               Briefly summarize this concept: Trip Planning?
    //             </p>
    //             <img
    //               src={assets.bulb_icon}
    //               alt="bulb"
    //               width={50}
    //               className="rounded-full p-3 absolute bg-white bottom-5 right-5"
    //             />
    //           </div>
    //           <div className="lg:h-[200px] sm:h-[150px] p-5 bg-gray-300 rounded-xl relative cursor-pointer hover:bg-[#c5d0e1]">
    //             <p className="text-[#585858] text-[17px]">
    //               Brainstorm team bonding activities for our work retreat?
    //             </p>
    //             <img
    //               src={assets.message_icon}
    //               alt="message"
    //               width={50}
    //               className="rounded-full p-3 absolute bg-white bottom-5 right-5"
    //             />
    //           </div>
    //           <div className="lg:h-[200px] sm:h-[150px] p-5 bg-gray-300 rounded-xl relative cursor-pointer hover:bg-[#c5d0e1]">
    //             <p className="text-[#585858] text-[17px]">
    //               Improve the readability of the following code?
    //             </p>
    //             <img
    //               src={assets.code_icon}
    //               alt="code"
    //               width={50}
    //               className="rounded-full p-3 absolute bg-white bottom-5 right-5"
    //             />
    //           </div>
    //         </div>
    //       </>
    //     ) : (
    //       <div className=" overflow-scroll scrollbar-hide p-6 bg-white border border-gray-300 shadow-lg rounded-xl">
    //         <div className="mb-4 flex items-center gap-3">
    //           <img
    //             src={assets.asta_icon}
    //             alt="user"
    //             className="rounded-full"
    //             width={40}
    //           />
    //           <p>{recentPrompt}</p>
    //         </div>
    //         <div>
    //           <img src={assets.gemini_icon} alt="gemini" width={40} />
    //           <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
    //         </div>
    //       </div>
    //     )}

    //     <div className="absolute w-full max-w-[900px] px-0 py-3 sm:px-3 m-auto ">
    //       <div className="flex items-center justify-between gap-4 bg-[#f0f4f9] px-[8px] py-[8px] rounded-xl">
    //         <input
    //           type="text"
    //           placeholder="Enter a prompt here"
    //           className="flex-1 bg-transparent p-1 text-[16px] md:text-[18px] border-none outline-none"
    //           onChange={(e) => setInput(e.target.value)}
    //           value={input}
    //         />
    //         <div className="flex gap-6">
    //           <img
    //             src={assets.gallery_icon}
    //             alt="gallery"
    //             width={24}
    //             className="rounded"
    //           />
    //           <img
    //             src={assets.mic_icon}
    //             alt="mic"
    //             width={24}
    //             className="rounded"
    //           />
    //           <img
    //             src={assets.send_icon}
    //             alt="send"
    //             width={24}
    //             className="rounded"
    //             onClick={() => onSent()}
    //           />
    //         </div>
    //       </div>
    //       {/* <p className="text-xs md:text-sm text-[#585858] mt-4">
    //         Welcome to Gemini, your personal AI assistant. Google Terms and
    //         Privacy Notice apply. Chats are reviewed to improve Google AI.
    //         Gemini can make mistakes, so double-check it.
    //       </p> */}
    //     </div>
    //   </div>

    <div className="relative w-full flex flex-col h-screen ">
      <div className="flex justify-between items-center p-3 md:p-6">
        <p className="font-semibold text-lg md:text-xl">Gemini</p>
        <img
          src={assets.asta_icon}
          alt="user"
          width={50}
          className="rounded-full"
        />
      </div>

      <div className="flex-1 flex flex-col max-w-[900px] w-full mx-auto">
        {/* Main Content */}
        {showResult ? (
          <div className="h-[70vh] overflow-y-auto p-6 bg-white border border-gray-300 shadow-lg rounded-xl mb-4 scrollbar-hide">
            <div className="mb-4 flex items-center gap-3">
              <img
                src={assets.asta_icon}
                alt="user"
                className="rounded-full"
                width={40}
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-6">
              <img
                src={assets.gemini_icon}
                alt="gemini"
                width={40}
                className="rounded-full"
              />
              {loading ? (
                <div className="w-full flex-col gap-5">
                  <hr className="rounded border-non bg-[#f6f7f8] bg-gradient-to-r from-[#e19be1] via-[#ffffff] to-[#9ed7ff] h-3 bg-custom-size my-5 animate-loader" />
                  <hr className="rounded border-non bg-[#f6f7f8] bg-gradient-to-r from-[#e19be1] via-[#ffffff] to-[#9ed7ff] h-3 bg-custom-size my-5 animate-loader" />
                  <hr className="rounded border-non bg-[#f6f7f8] bg-gradient-to-r from-[#e19be1] via-[#ffffff] to-[#9ed7ff] h-3 bg-custom-size my-5 animate-loader" />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-[17px] leading-9"
                ></p>
              )}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center ">
            <div className="text-center text-[36px] md:text-[56px] text-[#c4c7c5] lg:p-5 sm:p-3">
              <p>
                <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-fill-transparent">
                  Hello, Varun
                </span>
              </p>
              <p>How can I help you Today?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
              <div className=" p-5 bg-gray-300 rounded-xl relative cursor-pointer hover:bg-[#c5d0e1]">
                <p className="text-[#585858] text-[17px]">
                  Suggest beautiful places to see on an upcoming road trip?
                </p>
                <img
                  src={assets.compass_icon}
                  alt="compass"
                  width={50}
                  className="rounded-full p-3 absolute bg-white bottom-5 right-5"
                />
              </div>
              <div className="lg:h-[200px] sm:h-[150px] p-5 bg-gray-300 rounded-xl relative cursor-pointer hover:bg-[#c5d0e1]">
                <p className="text-[#585858] text-[17px]">
                  Briefly summarize this concept: Trip Planning?
                </p>
                <img
                  src={assets.bulb_icon}
                  alt="bulb"
                  width={50}
                  className="rounded-full p-3 absolute bg-white bottom-5 right-5"
                />
              </div>
              <div className="lg:h-[200px] sm:h-[150px] p-5 bg-gray-300 rounded-xl relative cursor-pointer hover:bg-[#c5d0e1]">
                <p className="text-[#585858] text-[17px]">
                  Brainstorm team bonding activities for our work retreat?
                </p>
                <img
                  src={assets.message_icon}
                  alt="message"
                  width={50}
                  className="rounded-full p-3 absolute bg-white bottom-5 right-5"
                />
              </div>
              <div className="lg:h-[200px] sm:h-[150px] p-5 bg-gray-300 rounded-xl relative cursor-pointer hover:bg-[#c5d0e1]">
                <p className="text-[#585858] text-[17px]">
                  Improve the readability of the following code?
                </p>
                <img
                  src={assets.code_icon}
                  alt="code"
                  width={50}
                  className="rounded-full p-3 absolute bg-white bottom-5 right-5"
                />
              </div>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className=" scrollbar-hide sticky bottom-0 w-full bg-[#f0f4f9] px-[8px] py-[8px] rounded-lg shadow-md flex items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Enter a prompt here"
            className="flex-1 bg-transparent p-2 text-[16px] md:text-[18px] border-none outline-none  rounded-md"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div className="flex gap-4">
            <img
              src={assets.gallery_icon}
              alt="gallery"
              width={24}
              className="rounded cursor-pointer hover:scale-110"
            />
            <img
              src={assets.mic_icon}
              alt="mic"
              width={24}
              className="rounded cursor-pointer hover:scale-110"
            />
            {input ? (
              <img
                src={assets.send_icon}
                alt="send"
                width={24}
                className="rounded cursor-pointer hover:scale-110"
                onClick={() => onSent()}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
