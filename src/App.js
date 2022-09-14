import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="flights" />
        <Route path="hotels" />
        <Route path="trains" />
        <Route path="Homestays" />
      </Route>
    </Routes>
  );
}

export default App;
