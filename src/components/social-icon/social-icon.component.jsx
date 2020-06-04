import React from "react";
import { Twitter, Facebook, Telegram, Instagram } from "../icon/icon.component";

export const TwitterButton = (props) => (
   <a href={`https://${process.env.REACT_APP_TWITTER_URL}`}>
      <div
         className="py-3 px-3 bg-purple-800 text-white mx-2"
         style={{ borderRadius: "19px 4px 4px 4px" }}
      >
         <Twitter />
      </div>
   </a>
);

export const InstagramButton = (props) => (
   <a href={`https://${process.env.REACT_APP_INSTAGRAM_URL}`}>
      <div
         className="py-3 px-3 bg-purple-800 text-white mx-2"
         style={{ borderRadius: "19px 4px 4px 4px" }}
      >
         <Instagram />
      </div>
   </a>
);

export const FacebookButton = (props) => (
   <a href={`https://${process.env.REACT_APP_FACEBOOK_URL}`}>
      <div
         className="py-3 px-3 bg-purple-800 text-white mx-2"
         style={{ borderRadius: "19px 4px 4px 4px" }}
      >
         <Facebook />
      </div>
   </a>
);

export const TelegramButton = (props) => (
   <a href={`https://${process.env.REACT_APP_TELEGRAM_URL}`}>
      <div
         className="py-3 px-3 bg-purple-800 text-white mx-2"
         style={{ borderRadius: "19px 4px 4px 4px" }}
      >
         <Telegram />
      </div>
   </a>
);
