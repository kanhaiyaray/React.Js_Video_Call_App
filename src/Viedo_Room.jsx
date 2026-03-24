import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Viedo_Room = () => {
  const{id} = useParams()
  const meeting = (element) => {

// generate Kit Token
      const appID = 528709255;
      const serverSecret = "3b233c20ff7129866b08e219a4ff7943";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id,  Date.now().toString(),   "kanhaiya");

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      
      zp.joinRoom({
        container:element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:`http://localhost:5173/${id}`
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      })

  }
  return (
    <>
    <div ref={meeting}/>
    </>
    
  );
}

export default Viedo_Room
