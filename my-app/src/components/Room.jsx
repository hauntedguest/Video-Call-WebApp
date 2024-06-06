import React from 'react'
import {useParams  } from "react-router-dom"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room = () => {
    const {id}=useParams();
    let myMeeting = async (element) => {
        // generate Kit Token
         const appID = 1884139254;
         const serverSecret = "b509e2481652cbc77d4afbaa0b7bd606";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,id,Date.now().toString(),"Pranav");
   
       
        // Create instance object from Kit Token.
         const zp = ZegoUIKitPrebuilt.create(kitToken);
         // start the call
         zp.joinRoom({
           container: element,
           sharedLinks: [
             {
               name: 'Personal link',
               url:`http://localhost:5173/room/${id}`
             },
           ],
           scenario: {
             mode: ZegoUIKitPrebuilt.OneONoneCall , // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
           },
           showScreenSharingButton:true,
         });
        };
  return (
    <div className="myCallContainer" ref={myMeeting}>
        
    </div>
  )
}

export default Room