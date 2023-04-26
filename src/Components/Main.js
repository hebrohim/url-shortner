import React from "react";
import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from "axios";

const Main = () => {
  const [userInput, setuserInput] = useState("");
  const [shortenedLink, setshortenedLink] = useState("");
  const [displayLink, setdisplayLink] = useState(false)
  // const fetchData = async () => {
  //   try {
  //     const response = await axios(
  //       `https://api.shrtco.de/v2/shorten?url=${userInput}`
  //     );
  //     // setshortenedLink(response.data.result.full_short_link);
  //     console.log(response.data)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

 const Data = ()=>{ fetch(`https://api.shrtco.de/v2/shorten?url=${userInput}`)
.then(response =>{
    return response.json();
}).then(data =>{
  
   setshortenedLink(data.result.full_short_link)
  
})

 }

  return (
    <div className="h-[90vh] bg-[#d4e6f1a1]">
      <section className="flex justify-center">
        <div className=" inputContainer w-[80vw] h-[30vh] flex flex-col px-5 rounded-lg translate-y-[-50%] md:flex-row md:justify-between md:h-[20vh] md:items-center">
          <input
            value={userInput}
            onChange={(e) => {
              setuserInput(e.target.value);
            }}
            type="text"
            placeholder="Shorten a link here..."
            className="my-5 rounded-md text-center p-4 font-bold md:w-[65%] md:h-14"
          />
          <button
            className="bg-[#19c9cf] my-5 rounded-md text-center p-4 font-semibold text-white font-textFont
             md:w-[30%] md:h-14"
            onClick={() => {
              Data();
              setdisplayLink(true)
            }}
          >
            Shorten it
          </button>
{displayLink?
          <section className="flex flex-col justify-between items-center w-full">
            <div className="text-white text-xl text-center">
              {shortenedLink}
            </div>
            <CopyToClipboard text={shortenedLink}>
            <button
              className="bg-[#22da1c] rounded-md text-center p-2 text-white font-textFont
             md:w-[20%] md:h-14"
              onClick={() => {
                console.log(userInput);
              }}
            >
              copy to clipboard
            </button>
</CopyToClipboard>
          
          </section>:null

            }
        </div>
      </section>
    </div>
  );
};

export default Main;
