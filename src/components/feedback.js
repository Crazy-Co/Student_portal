import React from "react";

const Feedback = () => {
  return (
    <div className="feedback">
      <h1 className="title">Feedback</h1>
      <div className="wrapper">
        <div className="box">
            <h3>Course: CE2310</h3>
            <h3>Mechanics of Materials</h3>
            <input type="text" name="feedback" id="feedback_text" />
            <input type="submit" value="Share with us" />
            <input type="reset" value="Clear" />
        </div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Feedback;
