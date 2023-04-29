import React from "react";
import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from "axios";

const Main = () => {
  const [userInput, setuserInput] = useState("");
  const [shortenedLink, setshortenedLink] = useState("");
  const [displayLink, setdisplayLink] = useState(false)
const [copied, setCopied] = useState(false)

  //Fetch Data

const Data = () => {axios.get(`https://api.shrtco.de/v2/shorten?url=${userInput}`).then((response) => {
   setshortenedLink(response.data.result.full_short_link)
  
});
}

let btn_style = {
  borderRadius:"5px",
  textAlign:"center",
  padding:"5px",
  color:"white",
  // fontWeight:"bold"
  // 'rounded-md text-center p-2 text-white font-textFont md:w-[20%] md:h-14'

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
            style={btn_style}
              className= {copied?"bg-red-500":"bg-yellow-500"} 
              onClick={() => {
                setCopied(!copied)
              }}
            >
              {copied?"copied!":"copy to clipboard"}
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
