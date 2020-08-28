import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import CourseList from "./Components/CourseList/CourseList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CourseList></CourseList>
    </div>
  );
}

export default App;
