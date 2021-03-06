import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { addSubscriber } from "../redux";
import Comments from "./Comments";

const home = ({ count, addSubscriber }) => {
  return (
    <div className="items">
      <Comments />
      <h2>구독자 수: {count}</h2>
      <button onClick={() => addSubscriber()}>구독하기!</button>
    </div>
  );
};
const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   };
// };
const mapDispatchToProps = {
  addSubscriber,
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
