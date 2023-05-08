import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <ReactLoading
    type={"spin"}
    color={"#000"}
    height={64}
    width={64}
    className="inline-block"
  />
);

export default Loading;
