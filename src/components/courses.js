import React from "react";
import "./courses.css";
import courses_json from "../courses.json";
import { TextField } from "@mui/material";
import { useState } from "react";

function Courses(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = courses_json[props.id] && courses_json[props.id].courses.filter((value) => {
    if (searchTerm == "") {
      return value
    } else if (value.code.toLowerCase().includes(searchTerm.toLowerCase())) {
      return value
    } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return value
    }
  });
  
  return (
    <div>
      <center>
        <div>
          <TextField id="filled-basic" label="Search" variant="filled" style={{ marginTop: '10px', width: '400px'}}
            onChange={event => setSearchTerm(event.target.value)}
          />
        </div>
      </center>
      <div className="courses">
        <table>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            {/* <th>Like</th>
            <th>Dislike</th> */}
          </tr>
          {(filteredData.length>0) ? filteredData.map((value, key) => {
            return (
              <tr>
                <td>{value.code}</td>
                <td>{value.name}</td>
                {/* <td><i class="fa-solid fa-thumbs-up"></i></td>
                <td><i class="fa-solid fa-thumbs-down"></i></td> */}
              </tr>
            );
          }) : (
            <tr>
              <td colSpan={2}>No matching records found !!</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}

export default Courses;
