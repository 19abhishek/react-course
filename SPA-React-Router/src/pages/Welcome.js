import { Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome to the home Page.</h1>
      <Routes>
        <Route path="new-user" element={<p>Welcome, new User!</p>} />
      </Routes>
    </section>
  );
};

export default Welcome;
