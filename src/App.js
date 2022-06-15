import { Home, Landing } from "./components";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />

      <Route path="/*" element={<PrivateRoute />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
