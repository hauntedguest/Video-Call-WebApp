import React from 'react'
import {useParams  } from "react-router-dom"
const Room = () => {
    const {id}=useParams();
    let myMeeting = async (element) => {
        // generate Kit Token
         const appID = ;
         const serverSecret = "";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));
   
       
        // Create instance object from Kit Token.
         const zp = ZegoUIKitPrebuilt.create(kitToken);
         // start the call
         zp.joinRoom({
           container: element,
           sharedLinks: [
             {
               name: 'Personal link',
               url:
                window.location.protocol + '//' + 
                window.location.host + window.location.pathname +
                 '?roomID=' +
                 roomID,
             },
           ],
           scenario: {
             mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
           },
         });
        };
  return (
    <>
    </>
  )
}

export default Room