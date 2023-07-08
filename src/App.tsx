import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Secured } from "./Secured";
import "./App.css";

export const App = () => (
  <BrowserRouter>
    <div className="container">
      <ul>
        <li>
          <Link to="/">public component</Link>
        </li>
        <li>
          <Link to="/secured">secured component</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/secured" element={<Secured />} />
      </Routes>
    </div>
  </BrowserRouter>
);
