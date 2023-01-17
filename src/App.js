import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
// import Greet from "./components/greet";
import { Quote } from "./components/greet";
// import img from "./images/test_img.jpg";
import Dashboard from "./components/dashboard";
import CourseReviews from "./components/course_reviews";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Feedback from "./components/feedback";

function App() {

  return (
    <Router>
    <div className="App">
      <Header />

      <div className="container">
          {/* <Greet name="Khushdev Yogi"/> */}
      <Routes>
        <Route exact path="/course_reviews" element={<CourseReviews />} />
        <Route exact path="/" element={<Dashboard name='YESHWANTH' rollNo='MM21B026' up_votes='55' down_votes='14'  />} />
        <Route exact path="/feedback" element={<Feedback />} />
      </Routes>
          <Quote />
      </div>
      <Footer />

    </div>
    </Router>
  );
}

export default App;
