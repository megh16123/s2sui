import About from "./components/pages/About/About"
import Classes from "./components/pages/Classes/Classes";
import Hero from "./components/pages/Home/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss"
function App() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    height: "30rem",
    fontSize: "xx-large",
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/classes" element={<Classes />} />
      <Route
        path="*"
        element={<div style={style}>404 Page Not Found</div>}
      />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
