import { useEffect, useState } from "react";
import Camera from "./components/camera/Camera";
import * as ROSLIB from "roslib";
const App = () => {
  const [connected, setConnected] = useState("Connecting...");

  useEffect(() => {
    const connectToRos = () => {
      const ros = new ROSLIB.Ros({
        url: "ws://localhost:9090",
      });
      ros.on("connection", () => {
        console.log("Ros connected");
        setConnected("Connected");
      });
      ros.on("error", () => {
        console.log("Error in ros");
        setConnected("Error in connction");
        setTimeout(() => {
          connectToRos();
        }, 2000);
      });      ros.on("close", () => {
        console.log("Ros connection close");
        setConnected("connection close");
        setTimeout(() => {
          connectToRos();
        }, 2000);
      });
    };
    connectToRos();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <div className="border rounded-md px-4 py-2 min-w-[140px] text-center font-medium shadow">
        {connected}
      </div>
      <div className="h-screen w-screen bg-amber-300">
        <Camera />
      </div>
    </div>
  );
};

export default App;
