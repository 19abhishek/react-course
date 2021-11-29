import React, { useState } from "react";

import CourseInput from "./components/CourseGoal/CourseInput/CourseInput";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);
  return (
    <div>
      <CourseInput />
    </div>
  );
}

export default App;
