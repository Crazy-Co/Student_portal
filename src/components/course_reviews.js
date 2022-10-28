import React from "react";
import { useState } from "react";
import Courses from "./courses";

export default function CourseReviews(){
    const [department,setDepartment] = useState("-1");
    function ViewCourses() {
        if(department >= 0) return ( <Courses id={department} /> )
        else if (department === '-1') return (<>
        <p>The Indian Institute of Technology Madras, a “Centre of Excellence” and an “Institute of National Importance” offers a wide variety of academic programmes in various disciplines. </p>
        <span>Click on the button above to <b>Select Department</b> and know more about the courses offered by various departments.</span> 
        </> 
        );
    };


    return (
        <div className="course_reviews">
            <h2>Course Search</h2>
            
            <select name="select_dept" className="button" value={department} id="dept" onChange={(e)=>{
                    const selectedDepartment = e.target.value;
                    setDepartment(selectedDepartment);
            }}>
                <option value="-1">Select Department</option>
                <option value="0">Aerospace Engineering</option>
                <option value="1">Biotechnology</option>
                <option value="2">Chemical Engineering</option>
                <option value="3">Civil Engineering</option>
                <option value="4">Computer Science and Engineering</option>
                <option value="5">Electrical Engineering</option>
                <option value="6">Engineering Design</option>
                <option value="7">Engineering Physics</option>
                <option value="8">Mechanical Engineering</option>
                <option value="9">Metallurgical and Materials Engineering</option>
                <option value="10">Naval Architecture and Ocean Engineering</option>
                <option value="11">Physics</option>
            </select>
            <ViewCourses/>
        </div>
    );
};
