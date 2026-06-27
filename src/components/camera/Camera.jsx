const Camera = () => {
  return (
    <div className="border w-[30vw] h-[35vh] overflow-hidden">
      <img
        src="http://127.0.0.1:8080/stream?topic=/camera/image_raw"
        alt="ROS Camera"
        className="w-full h-full"
        onLoad={() => console.log("loaded")}
        onError={(e) => console.log("error", e)}
      />
    </div>
  );
};
export default Camera