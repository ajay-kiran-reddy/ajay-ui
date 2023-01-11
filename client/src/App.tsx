import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Apps from "./components/apps/Apps";
import { Todo } from "./components/apps/todo/Todo";
import Login from "./components/auth/Login";
import Home from "./components/home/home";
import ResponsiveAppBar from "./components/shared/Appbar";
import SnackBar from "./components/shared/SnackBar";
import { snackBar } from "./features/sharedUiSlice";

function App() {
  const snackBarInfo = useSelector(snackBar);
  const params = useLocation();

  console.log("")

  return (
    <>
      <ResponsiveAppBar />
      <div className="containers">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="apps" element={<Apps />} />
          <Route path="/about*" element={<About />} />
          <Route path="/apps/todo" element={<Todo />} />
        </Routes>
      </div>
      {snackBarInfo && <SnackBar />}
    </>
  );
}

export default App;
