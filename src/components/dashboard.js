import React from "react";

export default function Dashboard(props) {   
  let img = "https://photos.iitm.ac.in/byroll.php?roll=" + props.rollNo;
  
  return (
    <div className="dashboard">
      <div className="db_details">
        <img src={img} alt="dp" />
        <h1>{props.name}</h1>
        <h2>{props.rollNo}</h2>
      </div>
      <div className="db_text">
        <h2>Activity Summary</h2>
        <p>Courses Reviewed: {parseInt(props.up_votes) + parseInt(props.down_votes)}</p>
        <p>Up Votes: {props.up_votes}</p>
        <p>Down Votes: {props.down_votes}</p>
      </div>
    </div>
  );
}

Dashboard.defaultProps = {
    name: 'User', 
    rollNo: 'CE21BXXX',
    reviews_count: '0',
    up_votes: '0',
    down_votes: '0'
};