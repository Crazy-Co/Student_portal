import React from "react";
import "./courses.css";
import courses_json from "../courses.json";

function Courses(props) {
  return (
    <div className="courses">
      <table>
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          {/* <th>Like</th>
          <th>Dislike</th> */}
        </tr>
        {courses_json[props.id] && courses_json[props.id].courses.map((value, key) => {
          return (
            <tr>
              <td>{value.code}</td>
              <td>{value.name}</td>
              {/* <td><i class="fa-solid fa-thumbs-up"></i></td>
              <td><i class="fa-solid fa-thumbs-down"></i></td> */}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Courses;
