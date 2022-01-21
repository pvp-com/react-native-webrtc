import RTCView from "./RTCView";

// add 'release' method to the MediaStream prototype matching React Native's MediaStream release()
window.MediaStream.prototype.release = function release() {
  this.getTracks().forEach((track) => track.stop());
};

window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
  stream.getTracks().forEach((track) => this.addTrack(track, stream));
};

const {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  MediaStream,
  MediaStreamTrack,
} = window;

const { mediaDevices, permissions } = navigator;

const registerGlobals = () => {
  window.mediaDevices = navigator.mediaDevices;
  window.permissions = navigator.permissions;
};

export {
  RTCIceCandidate,
  RTCSessionDescription,
  MediaStreamTrack,
  mediaDevices,
  permissions,
  // customizations
  registerGlobals,
  RTCPeerConnection,
  MediaStream,
  RTCView,
};

// "use strict";

// // import ScreenCapturePickerView from './ScreenCapturePickerView';
// import RTCPeerConnection from "./RTCPeerConnection";
// import RTCIceCandidate from "./RTCIceCandidate";
// import RTCSessionDescription from "./RTCSessionDescription";
// import RTCRtpTransceiver from "./RTCRtpTransceiver";
// import RTCRtpSender from "./RTCRtpSender";
// import RTCRtpReceiver from "./RTCRtpReceiver";
// // import RTCView from "./RTCView";
// import MediaStream from "./MediaStream";
// import MediaStreamTrack from "./MediaStreamTrack";
// import mediaDevices from "./MediaDevices";
// import permissions from "./Permissions";

// export {
//   //   ScreenCapturePickerView,
//   RTCPeerConnection,
//   RTCIceCandidate,
//   RTCSessionDescription,
//   RTCRtpTransceiver,
//   RTCRtpReceiver,
//   RTCRtpSender,
// //   RTCView,
//   MediaStream,
//   MediaStreamTrack,
//   mediaDevices,
//   permissions,
//   registerGlobals,
// };

// function registerGlobals() {
//   // Should not happen. React Native has a global navigator object.
//   if (typeof navigator !== "object") {
//     throw new Error("navigator is not an object");
//   }

//   if (!navigator.mediaDevices) {
//     navigator.mediaDevices = {};
//   }

//   navigator.mediaDevices.getUserMedia =
//     mediaDevices.getUserMedia.bind(mediaDevices);

//   navigator.mediaDevices.enumerateDevices =
//     mediaDevices.enumerateDevices.bind(mediaDevices);

//   global.RTCPeerConnection = RTCPeerConnection;
//   global.RTCIceCandidate = RTCIceCandidate;
//   global.RTCSessionDescription = RTCSessionDescription;
//   global.MediaStream = MediaStream;
//   global.MediaStreamTrack = MediaStreamTrack;
// }
