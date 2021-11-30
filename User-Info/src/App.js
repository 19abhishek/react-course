import React from "react";

import UserInput from "./Components/User/UserInput";
import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className="main">
      <Card>
        <section className="input">
          <UserInput />
        </section>
      </Card>
    </div>
  );
}

export default App;
